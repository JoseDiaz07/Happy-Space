import { useEffect, useState } from "react";

function App() {

  const [catImg, setCatImg] = useState("")
  const [dogImg, setDogImg] = useState("")


  const getCat = () => {
    fetch('https://aws.random.cat/meow')
      .then(res => res.json())
      .then(data => setCatImg(data.file))
      .catch(console.error("Something bad happened"))
  }

  const getDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogImg(data.message))
      .catch(console.error("Something bad happened"))
  }

  useEffect(() => {
      fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => setCatImg(data.file))
        .catch(console.error("Something bad happened"))

      fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setDogImg(data.message))
        .catch(console.error("Something bad happened"))

  }, [])

  return (
    <div className="min-h-screen bg-slate-100">
      <h1 className="text-5xl md:text-6xl text-center py-5">Happy space</h1>
      <div className="pt-8 md:pt-32 pb-24 flex-wrap md:flex justify-center  gap-10">
        <div className="w-72 shadow-lg p-5 rounded-md text-center bg-slate-100 mx-auto md:mx-0">
          <div className="rounded-md w-60 h-64">
            <img src={catImg} alt="" className="rounded-md w-60 h-64 object-cover" />
          </div>
          <button onClick={getCat} className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100">Get a cat</button>
        </div>

        <div className="w-72 shadow-lg p-5 rounded-md text-center bg-slate-100 mx-auto mt-10 md:mt-0 md:mx-0 border-none bg-none">
          <div className="rounded-md w-60 h-64 bo">
            <img src={dogImg} alt="" className="rounded-md w-60 h-64 object-cover" />
          </div>
          <button onClick={getDog} className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100">Get a dog</button>
        </div>

      </div>
    </div>
  );
}

export default App;
