import { AiOutlineHeart } from "react-icons/ai";

export const LikeBefore = () => {
  return (
    <div className="flex gap-x-2">
    <span className="p-0.5 backdrop-blur-sm rounded-full">
      <AiOutlineHeart size={35} className="hover:bg-red-200 text-red-100 font-semibold hover:text-white p-1 rounded-full transition-all duration-200"/>
    </span>
  </div>
  )
}
