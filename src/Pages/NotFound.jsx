import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div className="h-screen bg-slate-100 dark:bg-[#121212] transition-all duration-500">
      <div className="text-center h-screen text-white dark:text-black pt-32" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                <h1 className="text-5xl md:text-7xl font-serif pb-10 text-black dark:text-white">404 Page not found</h1>
                <Link to="/" className="outline outline-1  font-medium  hover:bg-black text-black hover:text-white outline-black dark:outline-white dark:text-white dark:hover:bg-white dark:hover:text-white px-10 py-1 rounded-lg transition-colors duration-200 ">Back home</Link>
            </div>
    </div>
  )
}
