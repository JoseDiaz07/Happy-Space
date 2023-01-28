import { useCallback, useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import RefreshBtn from "../Components/RefreshBtn";
import { MdOutlineFileDownload } from "react-icons/md";

const GalleryCats = () => {
  const API_KEY = "live_Vij93yq9KvVPmqRrG9T6tTTGyJggDD2nkxOitkWTaeQqzNT3IhACReHNuB3neLO8";
  const [catUrls, setCatUrls] = useState('');
  const [likes, setLikes] = useState(JSON.parse(localStorage.getItem("likes")) || {});
  const [liked, setLiked] = useState(false);
  const [showLikesOnly, setShowLikesOnly] = useState(false);

  const getCat = useCallback(async () => {
    try {
      const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=24&mime_types=jpg&api_key=${API_KEY}`)
      const data = await res.json()
      const catImageUrlList = await data.map(cat => cat);
      setCatUrls(catImageUrlList);
    } catch (error) {
      console.error(error)
    }
  }, [setCatUrls]);

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
          catUrls
            ?
            (
              catUrls
                .filter(catUrl => !showLikesOnly || likes[catUrl.id])
                .map((catUrl) =>
                  <div className="relative rounded-xl shadow-md dark:shadow-none" key={catUrl.id} data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                    <img src={catUrl.url} alt="cat" className="h-96 md:h-full w-72 object-cover rounded-xl" />
                    <div className="absolute bottom-0 right-0 p-2">
                      <button onClick={function () { setLikes({ ...likes, [catUrl.id]: !likes[catUrl.id] }); setLiked(true) }}>

                        {
                          liked & likes[catUrl.id]
                            ?
                            <div className="flex gap-x-2">
                              <span className="p-0.5 backdrop-blur-sm rounded-full">
                                <AiFillHeart size={35} className="hover:bg-red-200 text-red-100 font-semibold hover:text-white p-1 rounded-full transition-all duration-200" />
                              </span>
                              <a href={catUrl.url} download target="_blank" rel="noreferrer" className="p-0.5 backdrop-blur-sm rounded-full">
                                <MdOutlineFileDownload size={35} className="hover:bg-red-200 text-red-100 font-semibold hover:text-white p-1 rounded-full transition-all duration-200 backdrop-blur-sm" />
                              </a>
                            </div>
                            :
                            <div className="flex gap-x-2">
                              <span className="p-0.5 backdrop-blur-sm rounded-full">
                                <AiOutlineHeart size={35} className="hover:bg-red-200 text-red-100 font-semibold hover:text-white p-1 rounded-full transition-all duration-200" />
                              </span>
                              <a href={catUrl.url} download target="_blank" rel="noreferrer" className="p-0.5 backdrop-blur-sm rounded-full">
                                <MdOutlineFileDownload size={35} className="hover:bg-red-200 text-red-100 font-semibold hover:text-white p-1 rounded-full transition-all duration-200 backdrop-blur-sm" />
                              </a>
                            </div>
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

      <RefreshBtn path="/cats" get="getCat" />
    </div>
  )
}

export default GalleryCats