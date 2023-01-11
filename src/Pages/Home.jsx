import { useEffect, useState } from "react";

const Home = () => {
  const [catImg, setCatImg] = useState("")
  const [dogImg, setDogImg] = useState("")

  //* Traer las imagenes 
  const getCat = async () => {
    try {
      const res = await fetch('https://aws.random.cat/meow')
      const data = await res.json()
      setCatImg(data.file)
    } catch (error) {
      console.error(error)
    }
  }

  const getDog = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await res.json()
      setDogImg(data.message)
    } catch (error) {
      console.error(error)
    }
  }

  //* Iniciar la carga de imagenes
  useEffect(() => {
    getCat()
    getDog()
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#121212] dark:text-white transition-all duration-500">
      <div className="pt-6 md:pt-28 pb-24 flex-wrap md:flex justify-center  gap-10">

        <div className="w-72 shadow-lg p-5 rounded-md text-center bg-slate-100 dark:bg-[#28292a] mx-auto md:mx-0 transition-all duration-500">
          <div className="rounded-md w-60 h-64">
            <img src={catImg} alt="" className="rounded-md w-60 h-64 object-cover" />
          </div>
          <div className="flex gap-x-5 duration-75">
            <button onClick={getCat} className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100 dark:hover:bg-white dark:hover:text-black active:bg-none">Get a cat</button>
            <a href={catImg} download target="_blank" rel="noreferrer" className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100 dark:hover:bg-white dark:hover:text-black active:bg-none">Download</a>
          </div>
        </div>

        <div className="w-72 shadow-lg p-5 rounded-md text-center bg-slate-100 dark:bg-[#28292a] mx-auto mt-10 md:mt-0 md:mx-0 transition-all duration-500">
          <div className="rounded-md w-60 h-64 bo">
            <img src={dogImg} alt="" className="rounded-md w-60 h-64 object-cover" />
          </div>
          <div className="flex gap-x-5 duration-75">
            <button onClick={getDog} className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100 dark:hover:bg-white dark:hover:text-black active:bg-none ">Get a dog</button>
            <a href={dogImg} download target="_blank" rel="noreferrer" className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100 dark:hover:bg-white dark:hover:text-black active:bg-none">Download</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
