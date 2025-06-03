import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { navLinks } from '../utils/helper';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    return (
        <nav className="w-full py-[30px]">
            <div className="flex items-center justify-between w-full">
                <Link
                    to="/"
                    className="z-10 no-underline font-sans font-normal text-[21px] leading-[25px] tracking-wide text-white opacity-0"
                >
                    NEKOZUMA
                </Link>
                <div className="hidden md:flex items-center gap-8 m-0 list-none justify-center">
                    {navLinks.map((link, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <Link
                                to={link.href}
                                className="no-underline ff-2 font-normal text-[16px] leading-[21px] text-white hover:text-[#3586FF] transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                            <img src={link.icon}  />
                        </li>
                    ))}
                </div>

                <div onClick={toggleNavbar} className="md:hidden cursor-pointer z-30 flex flex-col gap-1">
                    <span className={`bg-white block w-6 h-1 transition-all duration-300 ${menuOpen && "rotate-45 translate-y-[8px]"}`}></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen && "opacity-0"}`}></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen && "-rotate-45 -translate-y-[8px]"}`}></span>
                </div>
            </div>

            <div className={`md:hidden flex flex-col items-center justify-center fixed z-29 top-0 right-0 w-full h-screen space-y-6 text-white bg-[#1C2430] transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {navLinks.map((link, index) => (
                    <li key={index} className="flex flex-col items-center">
                        <Link
                            to={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="no-underline ff-2 font-normal text-[16px] leading-[21px] text-white"
                        >
                            {link.label}
                        </Link>
                        <img src={link.icon}  />
                    </li>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
