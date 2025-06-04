import React from 'react'
import footerlayer1 from '../assets/images/png/footerlayer1.png'
import footerlayer2 from '../assets/images/png/footerlayer-2.png'
import discordIcon from '../assets/images/svg/discord 1.svg'
import twitterIcon from '../assets/images/svg/tw.svg'

const Footer = () => {
    return (
        <footer id="discord" className=" bg-[#1C2430]  ">
            <div className=' max-w-[1920px] mx-auto bg-[#245AAB] relative  py-[26px] lg:py-[46px]'>
            <div className="flex justify-center items-center ">
                <a href="/" className="font-family-franklin fw-400 text-[21px] leading-[25px] text-white tracking-wide  no-underline z-10">
                    NEKOZUMA</a></div>
            <div className="flex justify-center items-center mt-3 lg:mt-6 gap-6">
                <a
                    href="https://discord.gg/YOUR_INVITE_CODE"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src={discordIcon}
                        alt="discord-icon"
                        className="transform hover:scale-110 transition duration-300 ease-in-out  w-9" /></a>
                <a
                    href="https://twitter.com/YOUR_TWITTER_HANDLE"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src={twitterIcon}
                        alt="twitter-icon"
                        className="transform hover:scale-110 transition duration-500 ease-in-out  w-9"/></a>
            </div>
            <img src={footerlayer1} alt="footer-layer-left" className="absolute bottom-0 left-0 hidden lg:block  pointer-events-none " />
            <img src={footerlayer2} alt="footer-layer-right" className="absolute bottom-0 right-0  hidden lg:block pointer-events-none " />
            </div>
        </footer>
    )
}

export default Footer
