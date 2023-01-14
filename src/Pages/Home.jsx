import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

const Home = () => {
  const [catImg, setCatImg] = useState("")
  const [dogImg, setDogImg] = useState("")
  const [loadingCat, setLoadingCat] = useState(false)
  const [loadingDog, setLoadingDog] = useState(false)

  //* Bring cat img
  const getCat = async () => {
    setLoadingCat(true)
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search')
      const data = await res.json()
      const cat = await data.map(cat => cat.url);
      setCatImg(cat)
      setLoadingCat(false)
    } catch (error) {
      console.error(error)
    }
  }

  //* Bring dog img
  const getDog = async () => {
    setLoadingDog(true)
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await res.json()
      setDogImg(data.message)
      setLoadingDog(false)
    } catch (error) {
      console.error(error)
    }
  }

  //* Start loading images 
  useEffect(() => {
    getCat()
    getDog()
  }, [])

  const [imgZoomCat, setImgZoomCat] = useState('')
  const [imgZoomDog, setImgZoomDog] = useState('')
  const handleImgZoomInCat = () => {
    setImgZoomCat('scale-110 overflow-hidden')
  }

  const handleImgZoomOutCat = () => {
    setImgZoomCat('scale-100 overflow-hidden')
  }

  const handleImgZoomInDog = () => {
    setImgZoomDog('scale-110 overflow-hidden')
  }

  const handleImgZoomOutDog = () => {
    setImgZoomDog('scale-100 overflow-hidden')
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#121212] dark:text-white transition-all duration-500">
      <div className="pt-6 md:pt-28 pb-24 flex-wrap md:flex justify-center  gap-10">
        <div className="w-72 shadow-lg p-5 rounded-md text-center bg-slate-50 dark:bg-[#28292a] mx-auto md:mx-0 transition-all duration-500" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
          <div className="relative rounded-md w-60 h-64 mx-auto overflow-hidden" onMouseEnter={handleImgZoomInCat} onMouseLeave={handleImgZoomOutCat}>
            {
              loadingCat ? <CgSpinner size={90} className="animate-spin mx-auto absolute top-24 left-24" /> : <img src={catImg} alt="cat img" className={`rounded-md w-60 h-64 object-cover transition-all duration-300 ${imgZoomCat}`} />
            }
          </div>

          <div className="flex gap-x-5 duration-75 justify-center">
            <button onClick={getCat} className="btn">Get a cat</button>
            <a href={catImg} download target="_blank" rel="noreferrer" className="btn">Download</a>
          </div>
        </div>


        <div className="w-72 shadow-lg p-5 rounded-md text-center bg-slate-50 dark:bg-[#28292a] mx-auto md:mx-0 transition-all duration-500 mt-5 md:mt-0" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
          <div className="relative rounded-md w-60 h-64 mx-auto overflow-hidden" onMouseEnter={handleImgZoomInDog} onMouseLeave={handleImgZoomOutDog}>
            {
              loadingDog ? <CgSpinner size={90} className="animate-spin mx-auto absolute top-24 left-24" /> : <img src={dogImg} alt="dog img" className={`rounded-md w-60 h-64 object-cover transition-all duration-300 ${imgZoomDog}`} />
            }
          </div>

          <div className="flex gap-x-5 duration-75 justify-center">
            <button onClick={getDog} className="btn">Get a dog</button>
            <a href={dogImg} download target="_blank" rel="noreferrer" className="btn">Download</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
