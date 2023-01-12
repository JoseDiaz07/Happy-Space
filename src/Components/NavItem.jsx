import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ path, title }) => {
    const location = useLocation()
    return (
        <>
            <span className={location.pathname ===  path ? "underline underline-offset-4 decoration-red-800 decoration-1 decoration-wavy transition-colors pt-0.5 md:pt-2 text-black dark:text-slate-100" : "pt-0.5 md:pt-2 text-slate-500 dark:text-slate-400"}>
                <NavLink to={path} className="text-lg font-medium hover:text-black dark:hover:text-white">{title}</NavLink>
            </span>
        </>
    )
}

export default NavItem