import React from 'react'
import logo from  '../assets/images/png/logo.png'


const Hero = () => {
  return (
      <section className='bg-[#1C2430] h-screen  text-white'>
          <section class="relative mx-auto">
              <img src={logo} class="absolute  object-cover" alt="nav-bg-img" />
            
              <div class="max-w-[1140px] mx-auto px-4">
                  <nav class="w-full py-[30px]">
                      <div class="flex items-center justify-between w-full">
                          <a href="/" class="z-10 no-underline font-sans font-normal text-[21px] leading-[25px] tracking-wide text-white">
                              NEKOZUMA
                          </a>
                          <ul id="name" class="flex items-center gap-8 m-0 list-none justify-center">
                              <li>
                                  <a href="/" class="no-underline font-sans font-normal text-[16px] leading-[21px] text-white">Overview</a>
                              </li>
                              <li>
                                  <a href="/" class="no-underline font-sans font-normal text-[16px] leading-[21px] text-white">Story</a>
                              </li>
                              <li>
                                  <a href="/" class="no-underline font-sans font-normal text-[16px] leading-[21px] text-white">Team</a>
                              </li>
                              <li>
                                  <a href="/"><img src="./assets/images/svg/discord 1.svg" class="w-6 h-6" alt="social-icon" /></a>
                              </li>
                              <li>
                                  <a href="/"><img src="./assets/images/svg/tw 1.svg" class="w-6 h-6" alt="social-icon" /></a>
                              </li>
                          </ul>
                          <div onclick="navbarbtn()" class="z-50 md:hidden cursor-pointer">
                              <span class="block w-6 h-0.5 bg-white mb-1" id="rotates"></span>
                              <span class="block w-6 h-0.5 bg-white mb-1" id="transparent"></span>
                              <span class="block w-6 h-0.5 bg-white" id="rotates-2"></span>
                          </div>
                      </div>
                  </nav>

                  <div class="mt-[164px] z-10 relative">
                      <svg width="164" height="1" viewBox="0 0 164 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line y1="0.5" x2="164" y2="0.5" stroke="#3586FF" />
                      </svg>
                      <h1 class="font-sans text-[#3586FF] text-[64px] leading-[73px] font-normal">NEKOZUMA</h1>
                      <p class="max-w-[502px] font-sans font-normal text-[16px] leading-[21px] text-[#E5E5E5] pt-1 m-0">
                          The collection of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.
                      </p>
                      <button class="mt-[43px] mb-[144px] bg-[#0A0A23] text-white font-sans font-normal text-[16px] leading-[21px] border-0 py-2 px-6 rounded">Connect Wallet</button>
                  </div>
              </div>

              <img src="./assets/images/png/cartoon-1.png" class="z-10 absolute cartoon-img" alt="cartoon-img" />
              <img src="./assets/images/png/lighting.png" class="absolute left-0 bottom-0" alt="light-img" />
              <img src="./assets/images/png/Rectangle.png" class="absolute right-0 bottom-0" alt="light-2-img" />
              <img src="./assets/images/png/light-4.png" class="absolute z-20 right-0 bottom-0" alt="rectangle" />
          </section>
 </section>
  )
}

export default Hero
