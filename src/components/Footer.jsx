import React from 'react'
import footerlayer1 from '../assets/images/png/footerlayer1.png'
import footerlayer2 from '../assets/images/png/footerlayer-2.png'
import DiscordIcon from '../assets/images/svg/discord 1.svg'
import TwitterIcon from '../assets/images/svg/tw.svg'
import { Link } from 'react-router-dom'; 



const Footer = () => {
    return (
        <footer id="discord" className="bg-[#245AAB] relative mx-auto py-9  ">
            <div className="flex justify-center items-center">
                <Link to="/" className="ff-1 fw-400 text-[21px] leading-[25px] text-white tracking-wide  no-underline z-10">
                    NEKOZUMA</Link></div>
            <div className="flex justify-center items-center mt-6 gap-6">
                <Link to="/">
                    <img
                        src={DiscordIcon}
                        alt="social-icon"
                        className=" transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"/>
                </Link>
                <Link to="/">
                    <img
                        src={TwitterIcon}
                        alt="social-icon"
                        className=" transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer"/>
                </Link>
            </div>
            <img src={footerlayer1} alt="footer-layer-left" className="absolute bottom-0 left-0   w-1/2 md:w-1/3 max-w-[350px]  " />
            <img src={footerlayer2} alt="footer-layer-right" className="absolute bottom-0 right-0  w-1/2 md:w-1/3 max-w-[350px]" />
        </footer>
    )
}

export default Footer
