import React from 'react'
import Navbar from '../components/Navbar'
import cartoon from '../assets/images/png/cartoon.png'
import logo from '../assets/images/png/logo.png'
import layer1 from '../assets/images/png/layer1.png'
import rectangle from '../assets/images/png/Rectangle.png'
import layer2 from '../assets/images/png/layer2.png'



const Hero = () => {
  return (
      <section className='bg-[#1C2430]   text-white'>
          <section class="relative mx-auto">
              <img src={logo} className="absolute  object-cover" alt="nav-bg-img" />
            
              <div class="max-w-[1140px] mx-auto px-4">
                  {/* <Navbar/> */}

                  <div className="mt-[164px] z-10 relative">
                      <svg width="164" height="1" viewBox="0 0 164 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line y1="0.5" x2="164" y2="0.5" stroke="#3586FF" />
                      </svg>
                      <h1 class="ff-1 text-[#3586FF] text-[64px] leading-[73px] font-normal ">NEKOZUMA</h1>
                      <p class="max-w-[502px] ff-2 font-normal text-[16px] leading-[21px] text-[#E5E5E5] pt-1 m-0">
                          The collection of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.
                      </p>
                      <button className="mt-[43px] mb-[144px] bg-[#245AAB] text-white ff-2 font-normal text-[16px] leading-[21px] border-0 py-2 px-6 rounded-[9px]">Connect Wallet</button>
                  </div>
              </div>

              <img src={cartoon} className="z-10 relative cartoon-img right-0 bottom-0 lg:absolute" alt="cartoon-img" />
              <img src={layer1} className="absolute left-0 bottom-0" alt="light-img" />
              <img src={rectangle} class="absolute right-0 bottom-0" alt="light-2-img" />
              <img src={layer2} className="absolute z-20 right-0 bottom-0" alt="rectangle" />
          </section>
 </section>
  )
}

export default Hero
