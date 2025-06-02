import React from 'react'
import { TeamData } from '../utils/helper'

const Team = () => {
  return (
      <section className='bg-[#1C2430]'>
          <div class="container mx-auto py-16 max-w-[1140px]">
              <div class="flex items-center justify-center flex-col">
                  <svg width="164" height="1" viewBox="0 0 164 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line y1="0.5" x2="164" y2="0.5" stroke="#3586FF" />
                  </svg>
                  <h4 class="ff-1  text-[43px] leading-[27px] text-[#3586FF] font-normal mt-14">Team</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[20px] sm:mt-[36px]">
                      {TeamData.map((item, index) => (
                          <div key={index} className=" p-2 sm:p-4">
                              <div className=" p-2 sm:p-6 text-center">
                                  <img
                                      src={item.image}
                                      alt={item.title}
                                      className="mx-auto w-[290px] sm:w-[202px]  h-[198px] sm:h[202px]  object-cover "
                                  />
                                  <h5 className="text-[24px] leading-[27px] text-[#3586FF] font-normal mt-6 mb-2 ff-1">
                                      {item.title}
                                  </h5>
                                  <p className="text-[14px] leading-[18px] text-[#D4E5FF] font-normal mb-2 ff-2">
                                      {item.content}
                                  </p>
                                  <p className="text-[14px] leading-[18px] text-[#D4E5FF] font-normal mb-2 ff-2 max-w-[202px] mx-auto">
                                      {item.discription}
                                  </p>
                                  <img src={item.img} alt="social" className="mx-auto cursor-pointer" />
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
