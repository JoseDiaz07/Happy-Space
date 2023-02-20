import { NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";



export const MobileMenu = ({ handdleMobileMenu }) => {

    const location = useLocation()

    return (
        <div className="h-screen w-full top-0 left-0 z-20 bg-slate-100 dark:bg-[#121212] fixed animation md:hidden" transition-style="in:circle:top-right">
            <MdClose size={38} className="absolute right-0 m-4 text-black dark:text-slate-100 cursor-pointer p-1 rounded-full scale-125" onClick={handdleMobileMenu} />
            <div className="pt-32 pl-20">
                <div>
                    <span className={location.pathname === "/" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"} onClick={handdleMobileMenu}>
                        <NavLink to="/" className="text-5xl dark:text-slate-100">
                            <span className="bold font-mono text-slate-500 text-2xl">01</span>Home
                        </NavLink>
                    </span>
                </div>

                <div className="mt-6">
                    <span className={location.pathname === "/cats" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"} onClick={handdleMobileMenu}>
                        <NavLink to="/cats" className="text-5xl dark:text-slate-100">
                            <span className="bold font-mono text-slate-500 text-2xl">02</span>Cats
                        </NavLink>
                    </span>
                </div>

                <div className="mt-6">
                    <span className={location.pathname === "/dogs" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"} onClick={handdleMobileMenu}>
                        <NavLink to="/dogs" className="text-5xl dark:text-slate-100">
                            <span className="bold font-mono text-slate-500 text-2xl">03</span>Dogs
                        </NavLink>
                    </span>
                </div>

                <div className="mt-6">
                    <span className={location.pathname === "/gifcat" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"} onClick={handdleMobileMenu}>
                        <NavLink to="/gifcat" className="text-5xl dark:text-slate-100">
                            <span className="bold font-mono text-slate-500 text-2xl">04</span>GifCat
                        </NavLink>
                    </span>
                </div>

                <div className="mt-6">
                    <span className={location.pathname === "/gifdog" ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5" : "pt-0.5"} onClick={handdleMobileMenu}>
                        <NavLink to="/gifdog" className="text-5xl dark:text-slate-100">
                            <span className="bold font-mono text-slate-500 text-2xl">05</span>GifDog
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>
    )
}
