import React from 'react'
import footerlayer1 from '../assets/images/png/footerlayer1.png'
import footerlayer2 from '../assets/images/png/footerlayer-2.png'
import DiscordIcon from '../assets/images/svg/discord 1.svg'
import TwitterIcon from '../assets/images/svg/tw.svg'



const Footer = () => {
    return (
        <footer id="discord" className="bg-[#245AAB] relative mx-auto py-[46px]  ">
            <div className="flex justify-center items-center">
                <a href="/" className="ff-1 fw-400 text-[21px] leading-[25px] text-white tracking-wide  no-underline z-10">
                    NEKOZUMA</a></div>
            <div className="flex justify-center items-center mt-6 gap-6">
                <a
                    href="https://discord.gg/YOUR_INVITE_CODE"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src={DiscordIcon}
                        alt="discord-icon"
                        className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer" />
                </a>
                <a
                    href="https://twitter.com/YOUR_TWITTER_HANDLE"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src={TwitterIcon}
                        alt="twitter-icon"
                        className="transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer"
                    />
                </a>
            </div>
            <img src={footerlayer1} alt="footer-layer-left" className="absolute bottom-0 left-0 hidden md:block  " />
            <img src={footerlayer2} alt="footer-layer-right" className="absolute bottom-0 right-0  hidden md:block " />
        </footer>
    )
}

export default Footer
