import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { LikeAfter } from "../Components/LikeAfter";
import { LikeBefore } from "../Components/LikeBefore";
import { NextBtn } from "../Components/NextBtn";
import { useFetch } from "../hooks/useFetch";

export const GalleryDogs = () => {
  const [likes, setLikes] = useState(JSON.parse(localStorage.getItem("likes")) || {});
  const [liked, setLiked] = useState(false);
  const [showLikesOnly, setShowLikesOnly] = useState(false);

  const { urls, increment, isLoading } = useFetch("https://api.thedogapi.com/v1/images/search?limit=15&mime_types=jpg&api_key=", "live_LaxTNaqiuVnnA7IXJ2ysXfufGDoqo6T4Z0avwRpEgLhaUzqsZRGMM8XSIkbTPWev")

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes])

  const toggleFavorites = () => setShowLikesOnly(!showLikesOnly)

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#121212] dark:text-white transition-all duration-500 pb-10">

      <div className="flex justify-end pr-3 md:pr-16"><button onClick={toggleFavorites} className="px-8 py-3 text-black dark:text-slate-400 dark:hover:text-white text-center mt-8 text-xl cursor-pointer hover:underline underline-offset-4 decoration-red-800 dark:decoration-red-200  transition-all duration-200">
        Favorites
      </button></div>

      <div className="flex flex-wrap justify-center md:justify-start px-2 md:px-16 pt-10 gap-x-2 md:gap-x-4 gap-y-20 md:gap-y-10">
        {
          !isLoading
            ?
            (
              urls
                .filter(dogUrl => !showLikesOnly || likes[dogUrl.id])
                .map(({ id, url }) =>
                  <div className="relative rounded-xl shadow-md dark:shadow-none" key={id} data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                    <img src={url} alt="dog" className="h-96 md:h-full w-72 object-cover rounded-xl" />
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

      <NextBtn increment={increment} />
    </div>
  )
}
