import { useCallback, useEffect, useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { LikeAfter, LikeBefore } from "../Components/";
import { NextBtn } from "../Components/NextBtn";
import {useCounter} from "../hooks/useCounter"
export const GalleryCats = () => {
  const API_KEY = "live_Vij93yq9KvVPmqRrG9T6tTTGyJggDD2nkxOitkWTaeQqzNT3IhACReHNuB3neLO8";

  const [catUrls, setCatUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [likes, setLikes] = useState(JSON.parse(localStorage.getItem("likes")) || {});
  const [liked, setLiked] = useState(false);
  const [showLikesOnly, setShowLikesOnly] = useState(false);;

  const {counter, increment } = useCounter(1)

  const getCat = useCallback(async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg&api_key=${API_KEY}&page=${counter}`)
      const data = await res.json()
      const catImageUrlList = await data.map(cat => cat);
      setCatUrls(catImageUrlList);
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }, [counter]);

  useEffect(() => {
    getCat()
  }, [getCat])

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes])

  const toggleFavorites = () => setShowLikesOnly(!showLikesOnly)
  

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#121212] dark:text-white transition-all duration-500 pb-10">

      <div className="flex justify-end pr-3 md:pr-16">
        <button onClick={toggleFavorites} className="px-8 py-3 text-black dark:text-slate-400 dark:hover:text-white text-center mt-8 text-xl cursor-pointer hover:underline underline-offset-4 decoration-red-800 dark:decoration-red-200 transition-all duration-200">
          Favorites
        </button>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start px-2 md:px-16 pt-10 gap-x-2 md:gap-x-4 gap-y-20 md:gap-y-10">
        {
          !isLoading
            ?
            (
              catUrls
                .filter(catUrl => !showLikesOnly || likes[catUrl.id])
                .map(({ id, url }) =>
                  <div className="relative rounded-xl shadow-md dark:shadow-none" key={id} data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                    <img src={url} alt="cat" className="h-96 md:h-full w-72 object-cover rounded-xl" />
                    <div className="absolute bottom-0 right-0 p-2">
                      <button onClick={function () { setLikes({ ...likes, [id]: !likes[id] }); setLiked(true) }}>
                        {
                          liked & likes[id]
                            ? <LikeAfter url={url} />
                            : <LikeBefore url={url} />
                        }

                      </button>
                    </div>
                  </div>
                )
            )
            :
            (
              <div className="pt-4 md:pt-10 mx-auto m-20">
                <CgSpinner size={90} className="animate-spin mx-auto " />
              </div>
            )
        }
      </div>
      <div className="flex justify-end pr-3 md:pr-16">
        <button onClick={toggleFavorites} className="px-8 py-3 text-black dark:text-slate-400 dark:hover:text-white text-center mt-8 text-xl cursor-pointer hover:underline underline-offset-4 decoration-red-800 dark:decoration-red-200 transition-all duration-200">
          Favorites
        </button>
      </div>
      
      <NextBtn increment={increment}  />

    </div>
  )
}
