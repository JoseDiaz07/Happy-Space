import { useEffect, useState } from "react"
import { CgSpinner } from "react-icons/cg";

const DogCard = () => {
    const [dogImg, setDogImg] = useState("")
    const [loadingDog, setLoadingDog] = useState(false)

    //* Traer las imagenes 
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

    //* Iniciar la carga de imagenes
    useEffect(() => {
        getDog()
    }, [])

    return (
        <div className="pt-10">
            <div className="w-72 shadow-lg p-5 rounded-md text-center bg-slate-50 dark:bg-[#28292a] mx-auto mt-10 md:mt-0 md:mx-0 transition-all duration-500" >
                <div className="rounded-md w-60 h-64 bo">
                    {
                        loadingDog ? <CgSpinner size={90} className="animate-spin mx-auto " /> : <img src={dogImg} alt="" className="rounded-md w-60 h-64 object-cover" />
                    }
                </div>
                <div className="flex gap-x-5 duration-75">
                    <button onClick={getDog} className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100 dark:hover:bg-white dark:hover:text-black active:bg-none ">Get a dog</button>
                    <a href={dogImg} download target="_blank" rel="noreferrer" className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100 dark:hover:bg-white dark:hover:text-black active:bg-none">Download</a>
                </div>
            </div>
        </div>
    )
}

export default DogCard