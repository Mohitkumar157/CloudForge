
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


function Marquee({ imageArray }) {
  console.log(imageArray);

  return (
    <section className='relative group1 test overflow-hidden '>

      <div className='flex animate-marquee hover:[animation-play-state:paused]!
       justify-start w-max items-center gap-6'>
        {imageArray?.map((imageObj, index) =>
          <div key={index} className='group cursor-pointer rounded-xl
         overflow-hidden relative'>
            <Image
              src={imageObj?.src}
              alt={"solution-image"}
              width={380}
              quality={100}
              height={350}
              className='object-cover group-hover:scale-115 
            transition-all duration-500 ease-in-out'
            />
            <div className='w-full px-6 flex justify-between items-center
           min-h-11 text-[#f1f1f1] absolute left-0 bottom-8'>
              <h3>{imageObj.heading}</h3>
              <div className={
                `group-hover:w-10 group-hover:h-10 bg-[#ccc]/30 
            group-hover:overflow-auto transition-all duration-300 ease-in border-0
           group-hover:border-[#f1f1f1] group-hover:border flex justify-center
           -translate-x-12 group-hover:translate-x-0 items-center w-0 h-0 rounded-full
            overflow-hidden`
              }
              >
                <ArrowRight className='h-0 w-0  group-hover:w-4
            group-hover:h-4  transition-all duration-300 text-[#f1f1f1]' />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute left-0 top-0 z-10 h-full w-15 bg-linear-to-r
       from-[#f1f1f1] to-transparent pointer-events-none"></div>
       <div className="absolute right-0 top-0 z-10 h-full w-15 bg-linear-to-l
       from-[#f1f1f1] to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Marquee
