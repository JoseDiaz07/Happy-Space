import { Link } from "react-router-dom"

const RefreshBtn = ({ path, get }) => {
    return (
        <div className="w-28 mx-auto pt-10">
            <Link to={path} className="btn shadow-md" onClick={get}>Refresh</Link>
        </div>
    )
}

export default RefreshBtn