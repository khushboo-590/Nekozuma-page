import React from 'react'
import footerlayer1 from '../assets/images/png/footerlayer1.png'
import footerlayer2 from '../assets/images/png/footerlayer-2.png'
import DiscordIcon from '../assets/images/png/discord.png'
import TwiiterIcon from '../assets/images/png/twitter.png'


const Footer = () => {
    return (
        <footer className="bg-[#245AAB] relative mx-auto py-9  ">
            <div className="flex justify-center items-center">
                <a href="#" className="ff-1 fw-400 text-[21px] leading-[25px] text-white tracking-wide  no-underline z-10">
                    NEKOZUMA</a></div>
            <div className="flex justify-center items-center mt-6 gap-6">
                <a href="/"> <img src={DiscordIcon} alt="social-icon" className="icon" /></a>
                <a href="/"> <img src={TwiiterIcon} alt="social-icon" className="icon" /></a>
            </div>
            <img src={footerlayer1} alt="footer-layer-left" className="absolute bottom-0 left-0 w-[210px]  md:w-[355px] " />
            <img src={footerlayer2} alt="footer-layer-right" className="absolute bottom-0 right-0 w-[210px] md:w-[275px]" />
        </footer>
    )
}

export default Footer
