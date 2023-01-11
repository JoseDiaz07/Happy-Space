import { useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";

const Navbar = () => {
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
            <div className="flex justify-between px-8 md:px-16 py-4">
                <h1 className="text-2xl">Happy Space</h1>
                {
                    Icon
                        ?
                        <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-12 transition-all duration-200 scale-125" onClick={function () { toggleTheme(); toggleIcon() }}><HiMoon size={24} /></span>
                        :
                        <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-45 transition-all duration-200 scale-125" onClick={function () { toggleTheme(); toggleIcon() }}><HiSun size={24} /></span>
                }
            </div>
        </nav>
    )
}

export default Navbar