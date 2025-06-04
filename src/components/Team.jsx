import React from 'react'
import { teamData,twitter } from '../utils/helper'
import line1 from '../assets/images/svg/line2.svg'
import Customheading from './common/Customheading';

const Team = () => {
    return (
        <section id="team" className='bg-[#1C2430]'>
            <div class="container mx-auto py-[30px] lg:py-[61px] max-w-[888px] ">
                <div class="flex items-center justify-center flex-col ">
                    <img src={line1} alt="line" className='mb-4 md:mb-8 lg:mb-14'/>
                    <Customheading title="Team" />
                    <div className="flex flex-wrap justify-center gap-4  mx-auto">
                        {teamData.map((item, index) => (
                            <div key={index} className="p-1 flex-grow-0">
                                <div className="text-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-[290px] sm:w-[202px] h-[198px] sm:h-[202px] object-cover mx-auto mt-[20px] sm:mt-[36px] pointer-events-none"
                                    />
                                    <h5 className="text-[24px] leading-[27px] text-[#3586FF] font-normal mt-6 mb-2 font-family-franklin">
                                        {item.title}
                                    </h5>
                                    <p className="text-[14px] leading-[18px] text-[#D4E5FF] font-normal mb-2 font-family-sarabun">
                                        {item.content}
                                    </p>
                                    <p className="text-[14px] leading-[18px] text-[#D4E5FF] font-normal mb-2 font-family-sarabun max-w-[202px] mx-auto">
                                        {item.description}
                                    </p>
                                    <a
                                        href="https://twitter.com/YOUR_TWITTER_HANDLE"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={twitter}
                                            alt="social"
                                            className="mx-auto transform hover:scale-110 transition duration-500 ease-in-out"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Team
