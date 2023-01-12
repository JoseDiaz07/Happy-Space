import CatCard from "../Components/CatCard"

const GalleryCats = () => {

  const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#121212] dark:text-white transition-all duration-500 pb-10">
      <div className="flex flex-wrap justify-start px-16 pt-2 gap-5">
        {id.map(i =>
          <CatCard id={i} />
        )}
      
      <h2 className=" p-4 bg-slate-500 w-40 mx-auto text-center mt-8 rounded-lg">Load more</h2>
      </div>

    </div>
  )
}

export default GalleryCats