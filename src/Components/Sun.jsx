import { HiSun } from "react-icons/hi2";

export const Sun = ({toggleTheme, toggleIcon}) => {
  return (
    <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-45 transition-all duration-200 scale-125 md:mt-1 text-black dark:text-slate-100" onClick={function () { toggleTheme(); toggleIcon() }}><HiSun size={24} /></span>
  )
}
