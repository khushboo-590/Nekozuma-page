import React from 'react'
import DiscordIcon from '../assets/images/png/discord.png'
import TwiiterIcon from '../assets/images/png/twitter.png'

const Navbar = () => {
  return (
        <nav class="w-full py-[30px]">
            <div className="flex items-center justify-between w-full">
                <a href="/" class="z-10 no-underline font-sans font-normal text-[21px] leading-[25px] tracking-wide text-white">
                    NEKOZUMA
                </a>
                <ul id="name" className="flex items-center gap-8 m-0 list-none justify-center">
                    <li>
                        <a href="/" className="no-underline ff-2 font-normal text-[16px] leading-[21px] text-white">Overview</a>
                    </li>
                    <li>
                      <a href="/" className="no-underline ff-2 font-normal text-[16px] leading-[21px] text-white">Story</a>
                    </li>
                    <li>
                      <a href="/" className="no-underline ff-2 font-normal text-[16px] leading-[21px] text-white">Team</a>
                    </li>
                    <li>
                      <a href="/"><img src={DiscordIcon} className="w-6 h-6" alt="social-icon" /></a>
                    </li>
                    <li>
                      <a href="/"><img src={TwiiterIcon} class="w-6 h-6" alt="social-icon" /></a>
                    </li>
                </ul>
                <div onclick="navbarbtn()" className="z-50 md:hidden cursor-pointer">
                    <span className="block w-6 h-0.5 bg-white mb-1" id="rotates"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1" id="transparent"></span>
                    <span className="block w-6 h-0.5 bg-white" id="rotates-2"></span>
                </div>
            </div>
        </nav>)
}

export default Navbar
