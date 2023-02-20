import { MdOutlineFileDownload } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

export const LikeAfter = ({url}) => {
    return (
        <div className="flex gap-x-2">
            <span className="p-0.5 backdrop-blur-sm rounded-full">
                <AiFillHeart size={35} className="hover:bg-red-200 text-red-100 font-semibold hover:text-white p-1 rounded-full transition-all duration-200" />
            </span>
            <a href={url} download target="_blank" rel="noreferrer" className="p-0.5 backdrop-blur-sm rounded-full">
                <MdOutlineFileDownload size={35} className="hover:bg-red-200 text-red-100 font-semibold hover:text-white p-1 rounded-full transition-all duration-200 backdrop-blur-sm" />
            </a>
        </div>
    )
}
