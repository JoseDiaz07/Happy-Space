import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Moon, Sun, MobileMenu, NavItem } from "./";


export const Navbar = () => {

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

    const [Icon, setIcon] = useState(false)
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
                            ? <Sun toggleIcon={toggleIcon} toggleTheme={toggleTheme} />
                            : <Moon toggleIcon={toggleIcon} toggleTheme={toggleTheme} />

                    }
                </div>
                <div className="flex gap-4 justify-end md:hidden">
                    {
                        Icon
                            ? <Sun toggleIcon={toggleIcon} toggleTheme={toggleTheme} />
                            : <Moon toggleIcon={toggleIcon} toggleTheme={toggleTheme} />
                    }
                    <MdMenu size={38} onClick={() => setMobileMenu(!mobileMenu)} className="transition-all duration-500 md:hidden rounded-full p-2 cursor-pointer scale-125 dark:text-slate-100" />
                </div>
                {
                    mobileMenu
                        && <MobileMenu handdleMobileMenu={handdleMobileMenu} />
                }
            </div>
        </nav>
    )
}
