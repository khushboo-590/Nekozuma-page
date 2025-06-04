import React, { useState } from "react";
import logo from "../assets/images/svg/nekuzuma.svg";
import { navLinks } from "../utils/helper";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };
    return (
        <div className="w-full  py-[10px] lg:py-[20px]  xl:py-[44px] ">
            <div className="flex  justify-between">
                <a href="/" ><img src={logo} alt="Nekozuma Logo  pointer-events-none" className="absolute " /></a>
                <ul className={`${menuOpen
                    ? "md:hidden flex flex-col items-center justify-center fixed z-50 top-0 right-0 w-full h-screen gap-4 text-white bg-[#1C2430] transition-transform duration-500"
                    : "hidden md:flex items-center gap-8 m-0 list-none justify-center"}`}>
                    {navLinks.map((obj, index) => (
                        <li key={index} className="flex items-center flex-col md:flex-row gap-2">
                            <a href={obj.link}
                                onClick={() => setMenuOpen(false)}
                                className="font-family-sarabun font-normal text-[16px] leading-[21px] text-white hover:text-[#3586FF] transition-colors duration-300">
                                {obj.title}
                            </a>
                            <a href={obj.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={obj.icon}
                                    className="transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer" /></a></li>))}
                </ul>
                <div onClick={toggleNavbar} className="md:hidden cursor-pointer z-50 flex flex-col gap-1">
                    <span className={`bg-white block w-6 h-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
                    ></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                    ></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default Header;


