import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const ScrollToTopBtn = () => {

    const [scrolled, setScrolled] = useState(false)

    const goTop = () => {
        window.scrollTo(0, 0)
    }

    const handleScroll = () => {
        const scroll = window.scrollY;
        if (scroll > 300) {
            setScrolled(true);
        } else if (scroll === 0) {
            setTimeout(() => {
                setScrolled(false);
            }, 2000);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScroll(e));
    }, []);

    return (
        <>
            {
                scrolled
                &&
                <button className='p-2.5 bg-red-300 fixed right-5 bottom-3 transition-all duration-500 rounded-full text-white transform hover:translate-y-32 hover:bg-red-400' onClick={goTop} data-aos="fade-up" data-aos-duration="600"><IoIosArrowUp size={28} /></button>
            }
        </>
    )
}
