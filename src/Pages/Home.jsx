import { useEffect, useState } from "react";
import { saveAs } from 'file-saver'
import { CgSpinner } from "react-icons/cg";
import { ScrollToTopBtn } from "../Components/";

export const Home = () => {
  const [catImg, setCatImg] = useState("")
  const [dogImg, setDogImg] = useState("")
  const [loadingCat, setLoadingCat] = useState(false)
  const [loadingDog, setLoadingDog] = useState(false)

  //* Bring cat img
  const getCat = async () => {
    setLoadingCat(true)
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg')
      const data = await res.json()
      const cat = data[0].url
      setCatImg(cat)
      setLoadingCat(false)
    } catch (error) {
      console.error(error)
    }
  }

  const downloadDog = () => saveAs(dogImg, 'dog.jpg');

  //* Bring dog img
  const getDog = async () => {
    setLoadingDog(true)
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random?mime_types=jpg')
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

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#121212] dark:text-white transition-all duration-500">
      <div className="pt-6 md:pt-28 pb-24 flex-wrap md:flex justify-center  gap-10">

        <div className="h-96 w-80 shadow-lg rounded-xl text-center mx-auto md:mx-0 transition-all duration-500 bg-white dark:bg-[#28292a] " data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
          <div className="relative rounded-xl h-96 w-80  mx-auto overflow-hidden" >
            {
              loadingCat
                ? <CgSpinner size={90} className="animate-spin mx-auto absolute top-28 left-28 text-black dark:text-slate-100" />
                : <img src={catImg} alt="cat" className="h-96 w-80 object-cover rounded-xl  transition-all duration-300" />
            }
            <div className="absolute bottom-0 right-8 p-2">
              <button onClick={getCat} className="btn text-slate-100 mr-3 backdrop-blur-sm">Get a cat</button>
              <a href={catImg} target="_blank" rel="noreferrer"><button className="btn text-slate-100 backdrop-blur-sm">Download</button></a>
            </div>
          </div>
        </div>

        <div className="h-96 w-80 mt-10 md:mt-0 shadow-lg rounded-xl text-center mx-auto md:mx-0 transition-all duration-500 bg-white dark:bg-[#28292a]" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
          <div className="relative rounded-xl h-96 w-80  mx-auto overflow-hidden">
            {
              loadingDog
                ? <CgSpinner size={90} className="animate-spin mx-auto absolute top-28 left-28 text-black dark:text-slate-100" />
                : <img src={dogImg} alt="dog" className="h-96 w-80 object-cover rounded-xl  transition-all duration-300" />
            }
            <div className="absolute bottom-0 right-8 p-2">
              <button onClick={getDog} className="btn text-slate-100 mr-3 backdrop-blur-sm">Get a dog</button>
              <span onClick={downloadDog}><button className="btn text-slate-100 backdrop-blur-sm">Download</button></span>
            </div>
          </div>
        </div>

      </div>
      <ScrollToTopBtn />
    </div>
  );
}

