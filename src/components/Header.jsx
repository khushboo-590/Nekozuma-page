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
        <nav className="w-full  py-[8px] md:py-[20px] lg:py-[30px] px-4 md:px-10">
            <div className="flex items-center justify-between">
                <a href="/" ><img src={logo} alt="Nekozuma Logo" className="absolute " /></a>
                <ul
                    className={`${menuOpen
                        ? "md:hidden flex flex-col items-center justify-center fixed z-50 top-0 right-0 w-full h-screen space-y-6 text-white bg-[#1C2430] transition-transform duration-500"
                        : "hidden md:flex items-center gap-8 m-0 list-none justify-center"}`}>
                    {navLinks.map((link) => (
                        <li key={link.id} className="flex items-center flex-col md:flex-row gap-2">
                            {link.title && (
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-sarabun font-normal text-[16px] leading-[21px] text-white hover:text-[#3586FF] transition-colors duration-300">
                                    {link.title}</a>)}
                            {link.icon && (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={link.icon}
                                        alt="icon"
                                        className="transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer"/></a>)}</li>
                    ))}

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
        </nav>
    );
};

export default Header;
