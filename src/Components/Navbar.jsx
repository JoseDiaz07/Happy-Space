import { useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const Navbar = () => {
    const location = useLocation()

    const [mobileMenu, setMobileMenu] = useState(false);
    const handdleMobileMenu = () => {
        setTimeout(() => setMobileMenu(!mobileMenu), 200)
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
    const toggleTheme = () => theme === '' ? setTheme('dark') : setTheme('')

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const [Icon, setIcon] = useState(true)
    const toggleIcon = () => {
        setIcon(!Icon)
    }

    return (
        <nav className="bg-slate-100 dark:bg-[#121212] transition-all duration-500">
            <div className="flex justify-between px-4 md:px-16 py-4">
                <NavLink to="/" className="text-2xl dark:text-white">Happy Space</NavLink>
                <div className="hidden md:flex gap-4 ">
                    <NavItem title="Home" path="/" />

                    <NavItem title="Cats" path="/cats" />

                    <NavItem title="Dogs" path="/dogs" />

                    <NavItem title="Gifcat" path="/gifcat" />

                    <NavItem title="Gifdog" path="/gifdog" />

                    {
                        Icon
                            ?
                            <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-12 transition-all duration-200 scale-125 md:mt-1 text-black dark:text-slate-100" onClick={function () { toggleTheme(); toggleIcon() }}><HiMoon size={24}/></span>
                            :
                            <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-45 transition-all duration-200 scale-125 md:mt-1 text-black dark:text-slate-100" onClick={function () { toggleTheme(); toggleIcon() }}><HiSun size={24} /></span>
                    }
                </div>
                <div className="flex gap-4 justify-end md:hidden">
                    {
                        Icon
                            ?
                            <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-12 transition-all duration-200 scale-125 md:pt-3 text-black dark:text-slate-100" onClick={function () { toggleTheme(); toggleIcon() }}><HiMoon size={24} /></span>
                            :
                            <span className="rounded-full p-2 cursor-pointer hover:origin-center hover:-rotate-45 transition-all duration-200 scale-125 md:pt-3 text-black dark:text-slate-100" onClick={function () { toggleTheme(); toggleIcon() }}><HiSun size={24} /></span>
                    }
                    <MdMenu size={38} onClick={() => setMobileMenu(!mobileMenu)} className="transition-all duration-500 md:hidden rounded-full p-2 cursor-pointer scale-125 dark:text-slate-100" />
                </div>
                {
                    mobileMenu
                        &&
                        <div className="h-screen w-full top-0 left-0 z-20 bg-slate-100 dark:bg-[#121212] fixed animation md:hidden" transition-style="in:circle:top-right">
                            <MdClose size={38} className="absolute right-0 m-4 text-black dark:text-slate-100 cursor-pointer p-1 rounded-full scale-125" onClick={() => setMobileMenu(!mobileMenu)} />
                            <div className="pt-32 pl-20">
                                <div>
                                    <span className={location.pathname === "/" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"}  onClick={handdleMobileMenu}>
                                        <NavLink to="/" className="text-5xl dark:text-slate-100">
                                            <span className="bold font-mono text-slate-500 text-2xl">01</span>Home
                                        </NavLink>
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <span className={location.pathname === "/cats" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"}  onClick={handdleMobileMenu}>
                                        <NavLink to="/cats" className="text-5xl dark:text-slate-100">
                                            <span className="bold font-mono text-slate-500 text-2xl">02</span>Cats
                                        </NavLink>
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <span className={location.pathname === "/dogs" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"}  onClick={handdleMobileMenu}>
                                        <NavLink to="/dogs" className="text-5xl dark:text-slate-100">
                                            <span className="bold font-mono text-slate-500 text-2xl">03</span>Dogs
                                        </NavLink>
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <span className={location.pathname === "/gifcat" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"}  onClick={handdleMobileMenu}>
                                        <NavLink to="/gifcat" className="text-5xl dark:text-slate-100">
                                            <span className="bold font-mono text-slate-500 text-2xl">04</span>GifCat
                                        </NavLink>
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <span className={location.pathname === "/gifdog" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"}  onClick={handdleMobileMenu}>
                                        <NavLink to="/gifdog" className="text-5xl dark:text-slate-100">
                                            <span className="bold font-mono text-slate-500 text-2xl">05</span>GifDog
                                        </NavLink>
                                    </span>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </nav>
    )
}

export default Navbar