import React from 'react'
import { TeamData } from '../utils/helper'

const Team = () => {
  return (
      <section className='bg-[#1C2430]'>
          <div class="container mx-auto pt-16 max-w-[1140px]">
              <div class="flex items-center justify-center flex-col">
                  <svg width="164" height="1" viewBox="0 0 164 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line y1="0.5" x2="164" y2="0.5" stroke="#3586FF" />
                  </svg>
                  <h4 class="ff-1  text-[43px] leading-[27px] text-[#3586FF] font-normal mt-14">Team</h4>
                  <div className="flex flex-wrap -mx-4 mt-8">
                      {TeamData.map((item, index) => (
                          <div
                              key={index}
                              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4 lg:mb-0">
                              <div className=" p-6  text-center">
                                  <img
                                      src={item.image}
                                      alt={item.title}
                                      className=""
                                  />
                                  <h5 className="text-[24px] leading-[27px] text-[#3586FF] font-normal mt-6 mb-2 ff-1">
                                  {item.title}                                  </h5>
                                  <p className="text-[14px] leading-[18px] text-[#D4E5FF] font-normal mb-2 ff-2">
                                  {item.content}                                  </p>
                                  <p className="text-[14px] leading-[18px] text-[#D4E5FF] font-normal mb-2 ff-2">
                                  {item.discription}                                  </p>
                                  <img src={item.icon}></img>
                                    {/* <div className="flex justify-center mt-4">
                                        {item.socialLinks.map((link, linkIndex) => (
                                            <a
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mx-2 text-gray-600 hover:text-blue-500"
                                            >
                                                <img src={link.icon} alt={link.name} className="w-6 h-6" />
                                            </a>
                                        ))} */}
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
