import { HiMoon } from "react-icons/hi2";


export const Moon = ({toggleTheme, toggleIcon}) => {
  return (
    <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-12 transition-all duration-200 scale-125 md:mt-1 text-black dark:text-slate-100" onClick={function () { toggleTheme(); toggleIcon() }}><HiMoon size={24}/></span>
  )
}
