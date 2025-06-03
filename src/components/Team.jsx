import React from 'react'
import { TeamData } from '../utils/helper'
import { Link } from 'react-router-dom';
import line2 from '../assets/images/svg/Line 2.svg' 
import Customheading from './common/Customheading';


const Team = () => {
  return (
      <section id="team" className='bg-[#1C2430]'>
          <div class="container mx-auto py-[61px] max-w-[1140px] ">
              <div class="flex items-center justify-center flex-col">
                  <img src={line2} alt="line" className='mb-14' />
                  <Customheading heading="Team" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                      {TeamData.map((item, index) => (
                          <div key={index} className=" p-1">
                              <div className="text-center">
                                  <img src={item.image} alt={item.title}
                                      className=" w-[290px] sm:w-[202px]  h-[198px] sm:h[202px]  object-cover mx-auto mt-[20px] sm:mt-[36px] "/>
                                  <h5 className="text-[24px] leading-[27px] text-[#3586FF] font-normal mt-6 mb-2 ff-1">
                                      {item.title}</h5>
                                  <p className="text-[14px] leading-[18px] text-[#D4E5FF] font-normal mb-2 ff-2">
                                      {item.content}</p>
                                  <p className="text-[14px] leading-[18px] text-[#D4E5FF] font-normal mb-2 ff-2  max-w-[202px] mx-auto">
                                      {item.discription}</p>
                                 <Link to ="/" ><img src={item.icon} alt="social" className="mx-auto cursor-pointer" /></Link>
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
