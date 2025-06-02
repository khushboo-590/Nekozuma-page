import React from 'react';
import lionImg from '../assets/images/png/cartoon2.png';

const Story = () => {
    return (
        <section className="bg-[#1C2430] text-white py-12">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="flex justify-center items-center mt-12">
                    <h4 className="ff-1 text-[43px] leading-[49px] font-normal text-[#3586FF]">
                        Story
                    </h4>
                </div>
                <div className="max-w-[888px] mx-auto pt-6">
                    <p className="text-center text-[#D4E5FF] ff-2 text-base leading-[21px] pt-3">
                        Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In
                        each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos.
                        <br />
                        <br />
                        <br />
                        <span className="text-sm leading-[18px]">
                            However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated.
                        </span>
                    </p>
                </div>
            </div>
                <div className="flex  justify-center mt-[58px]">
                    <img src={lionImg} className="w-full  object-cover" alt="lion-img" />
                </div>
        </section>
    );
};

export default Story;
