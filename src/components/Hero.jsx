import React from 'react'
import line1 from '../assets/images/svg/line2.svg'
import cartoon from '../assets/images/png/cartoon.png'
import logo from '../assets/images/png/logo-bg.png'
import layer1 from '../assets/images/png/layer1.png'
import rectangle from '../assets/images/png/rectangle.png'
import layer2 from '../assets/images/png/layer2.png'
import Header from './Header'

const Hero = () => {
    return (
        <section className='bg-[#1C2430]   text-white'>
            <div class="relative mx-auto  max-w-[1920px] overflow-hidden w-full ">
                <img src={logo} className="absolute  object-cover  w-full max-w-[200px] max-h-[150px] lg:max-w-[300px] xl:max-w-[570px]  start-0 top-0 whitespace-nowrap " alt="nav-bg-img" />
                <div className="max-w-[888px] mx-auto px-4">
                    <Header/>
                    <div className="mt-[80px] md:mt-[100px] lg:mt-[164px] z-10 relative">
                        <div className="flex justify-center lg:justify-start">
                            <img src={line1} alt="line" /></div>
                        <h1 className="font-family-franklin text-[#3586FF] text-[55px] sm:text-[64px] leading-[73px] font-normal  text-center lg:text-left">NEKOZUMA</h1>
                        <p className="lg:max-w-[502px] font-family-sarabun font-normal text-base leading-[21px] text-[#D4E5FF] pt-1 m-0 text-center lg:text-left">
                            The collection of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.</p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="mt-[43px] mb-[30px] md:mb-[40px] lg:mb-[144px] bg-[#245AAB] text-white font-family-sarabun font-normal text-base leading-[21px] border-0 py-2 px-6 rounded-[9px] hover:bg-white hover:text-[#245AAB] cursor-pointer">
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                </div>
                <img src={cartoon} className="z-10 relative cartoon-img right-0 bottom-0 lg:absolute mx-auto pointer-events-none" alt="cartoon-img" />
                <img src={layer1} className="absolute left-0 bottom-0 hidden lg:block pointer-events-none" alt="light-img" />
                <img src={rectangle} className="absolute right-0 bottom-0  hidden lg:block pointer-events-none" alt="light-2-img" />
                <img src={layer2} className="absolute z-20 right-0 bottom-0 hidden lg:block pointer-events-none" alt="rectangle" />
            </div>
        </section>
    )
}
export default Hero
