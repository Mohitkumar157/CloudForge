"use client";

import React from 'react'
const socialIcons = [
  {
    src: "/facebook.svg",
    name: "facebook"
  },
  {
    src: "/instgram.svg",
    name: "instagram"
  },
  {
    src: "/twitter.svg",
    name: "twitter"
  },
  {
    src: "/linkdin.svg",
    name: "linkdin"
  }
]
function FooterHeader() {
  return (
    <div className='flex flex-col items-start md:flex-row justify-between md:items-center pb-12'>
      <h2 className='uppercase md:text-[80px]! text-[#f1f1f1]'>CloudForge</h2>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <h3 className='font-bold text-[#f1f1f1]'>
            Follow us
          </h3>
          <div className='w-6 h-0.5 bg-white'></div>
        </div>
        <div className="social-icons flex items-center gap-3">

          {socialIcons.map((icon, index) => <div key={index} className='cursor-pointer hover:bg-[#ccccccd7] transition-all duration-300 hover:text-black w-10 h-10 p-2 flex justify-center items-center border border-[#ccc] rounded-full'>
            <img src={icon.src} alt={icon.name} className=''/>
          </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default FooterHeader
