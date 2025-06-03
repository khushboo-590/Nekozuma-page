import React from 'react'

const Customheading = ({ title, myClass }) => {
  return (
    <div>
      <h4 className={`font-family-franklin text-[43px] leading-[49px] font-normal text-[#3586FF] ${myClass}`}>
        {title}
      </h4>
    </div>
  )
}

export default Customheading
