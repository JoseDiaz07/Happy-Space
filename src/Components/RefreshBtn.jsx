import { Link } from "react-router-dom"

const RefreshBtn = ({ path, get }) => {
    return (
        <div className="w-28 mx-auto pt-10">
            <Link to={path} className="px-8 py-3 text-black bg-slate-300 hover:bg-slate-400 dark:text-white dark:bg-slate-500 dark:hover:bg-slate-600 w-40 mx-auto text-center mt-8 rounded-lg cursor-pointer shadow-md text-lg" onClick={get}>Refresh</Link>
        </div>
    )
}

export default RefreshBtn