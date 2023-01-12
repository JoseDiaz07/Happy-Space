import { useEffect, useState } from "react"
import { CgSpinner } from "react-icons/cg";

const CatCard = () => {
    const [catImg, setCatImg] = useState("")
    const [loadingCat, setLoadingCat] = useState(false)

    //* Traer las imagenes 
    const getCat = async () => {
        setLoadingCat(true)
        try {
            const res = await fetch('https://aws.random.cat/meow')
            const data = await res.json()
            setCatImg(data.file)
            setLoadingCat(false)
        } catch (error) {
            console.error(error)
        }
    }

    //* Iniciar la carga de imagenes
    useEffect(() => {
        getCat()
    }, [])

    return (
        <div className="pt-0 md:pt-10">
            <div className="w-72 shadow-lg p-5 rounded-md text-center bg-slate-50 dark:bg-[#28292a] mx-auto mt-4 md:mt-0 md:mx-0 transition-all duration-500" >
                <div className="rounded-md w-60 h-64 bo">
                    {
                        loadingCat ? <CgSpinner size={90} className="animate-spin mx-auto " /> : <img src={catImg} alt="" className="rounded-md w-60 h-64 object-cover" />
                    }
                </div>
                <div className="flex gap-x-5 duration-75">
                    <button onClick={getCat} className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100 dark:hover:bg-white dark:hover:text-black active:bg-none ">Get a dog</button>
                    <a href={catImg} download target="_blank" rel="noreferrer" className="py-2 px-5 mt-5 outline outline-1 rounded-md hover:bg-black hover:text-slate-100 dark:hover:bg-white dark:hover:text-black active:bg-none">Download</a>
                </div>
            </div>
        </div>
    )
}

export default CatCard