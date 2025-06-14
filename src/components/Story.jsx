import React from 'react';
import lionImg from '../assets/images/png/cartoon2.png';
import CustomHeading from './common/CustomHeading';

const Story = () => {
    return (
        <div id="story" className="bg-[#1C2430] text-white pt-8 lg:pt-12">
            <div className="max-w-[1920px] mx-auto ">
                <CustomHeading title="Story" myClass="text-center"/>
                <div className="max-w-[888px] mx-auto pt-6 text-center text-[#D4E5FF] font-family-sarabun p-1">
                    <p className="text-base leading-[21px]">
                        Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos.</p>
                    <p className="text-sm leading-[18px]  mt-3 sm:mt-6 lg:mt-9">
                        However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated.</p></div>
                <div className="  mt-[30px] lg:mt-[58px]">
                    <img src={lionImg} className="w-full object-cover h-[200px] md:h-[250px] lg:h-[357px] pointer-events-none" alt="lion-img" /></div>
            </div>
        </div>
    );
};

export default Story;
