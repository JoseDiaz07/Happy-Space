import { Link } from "react-router-dom"

export const RefreshBtn = ({ path, get }) => {
    return (
        <div className="flex justify-center pt-10">
            <Link to={path} className="btn shadow-md dark:text-slate-100" onClick={get}>Refresh</Link>
        </div>
    )
}