import { useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation()

    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

    const toggleTheme = () => theme === '' ? setTheme('dark') : setTheme('')

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const [Icon, setIcon] = useState(false)

    const toggleIcon = () => {
        setIcon(!Icon)
    }


    return (
        <nav className="bg-slate-100 dark:bg-[#121212] dark:text-white transition-all duration-500">
            <div className="flex justify-between px-4 md:px-16 py-4">
                <h1 className="text-2xl">Happy Space</h1>
                <div className="flex gap-4">
                    <span className={location.pathname === "/" ? "underline underline-offset-8 decoration-red-800 decoration-2 transition-colors pt-2" : "group transition-all ease-in-out pt-2"}><NavLink to="/" className="bg-left-bottom bg-gradient-to-r from-gray-600 to-gray-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:200%_2px] transition-all duration-300 ease-in text-base hover:cursor-pointer">Home</NavLink></span>

                    <span className={location.pathname === "/cats" ? "underline underline-offset-8 decoration-red-800 decoration-2 transition-colors pt-2" : "group transition-all ease-in-out pt-2"}><NavLink to="/cats" className="bg-left-bottom bg-gradient-to-r from-gray-600 to-gray-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:200%_2px] transition-all duration-300 ease-in text-base hover:cursor-pointer">Cats</NavLink></span>

                    <span className={location.pathname === "/dogs" ? "underline underline-offset-8 decoration-red-800 decoration-2 transition-colors pt-2" : "group transition-all ease-in-out pt-2"}><NavLink to="/dogs" className="bg-left-bottom bg-gradient-to-r from-gray-600 to-gray-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:200%_2px] transition-all duration-300 ease-in text-base hover:cursor-pointer">Dogs</NavLink></span>
                    
                    {
                        Icon
                            ?
                            <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-12 transition-all duration-200 scale-125" onClick={function () { toggleTheme(); toggleIcon() }}><HiMoon size={24} /></span>
                            :
                            <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-45 transition-all duration-200 scale-125" onClick={function () { toggleTheme(); toggleIcon() }}><HiSun size={24} /></span>
                    }
                </div>

            </div>
        </nav>
    )
}

export default Navbar