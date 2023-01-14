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
      const res = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg')
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

        <div className="h-96 w-80 shadow-lg rounded-md text-center mx-auto md:mx-0 transition-all duration-500 bg-[#28292a]" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
          <div className="relative rounded-md h-96 w-80  mx-auto overflow-hidden" >
            {
              loadingCat ? <CgSpinner size={90} className="animate-spin mx-auto absolute top-28 left-28" /> : <img src={catImg} alt="cat" className="h-96 w-80 object-cover rounded-md  transition-all duration-300" />
            }
            <div className="absolute bottom-0 right-8 p-2">
              <button onClick={getCat} className="btn mr-3 backdrop-blur-sm">Get a cat</button>
              <a href={catImg} download target="_blank" rel="noreferrer"><button className="btn backdrop-blur-sm">Download</button></a>
            </div>
          </div>
        </div>

        <div className="h-96 w-80 mt-10 md:mt-0 shadow-lg rounded-md text-center mx-auto md:mx-0 transition-all duration-500 bg-[#28292a]" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
          <div className="relative rounded-md h-96 w-80  mx-auto overflow-hidden">
            {
              loadingDog ? <CgSpinner size={90} className="animate-spin mx-auto absolute top-28 left-28" /> : <img src={dogImg} alt="cat" className="h-96 w-80 object-cover rounded-md  transition-all duration-300" />
            }
            <div className="absolute bottom-0 right-8 p-2">
              <button onClick={getDog} className="btn mr-3 backdrop-blur-sm">Get a dog</button>
              <a href={dogImg} download target="_blank" rel="noreferrer"><button className="btn backdrop-blur-sm">Download</button></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
