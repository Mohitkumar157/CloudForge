"use client";
import React, { useRef } from 'react'

import { gsap, ScrollTrigger, useGSAP } from '@/app/lib/gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

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
  const footterHeadingRef = useRef(null);
  const sectionRef = useRef(null);
  const followHeadingRef = useRef(null);
  useGSAP(() => {
    const splitText = new SplitText(footterHeadingRef.current, {
      type: "chars"
    });


    const socialIcons = sectionRef.current.querySelectorAll(".media-icons");


    gsap.from(splitText.chars, {
      y: -100,
      stagger: 0.9,
      opacity: 0,
      duration: 3,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "top 40%",
        scrub: 3,

      }
    });

    gsap.from(followHeadingRef.current, {
      y: -100,
      duration: 1,
      opacity: 0,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%"
      }
    });

    gsap.from(socialIcons, {
      y: -100,
      stagger: 0.15,
      duration: 1,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      }
    })

  }, { scope: sectionRef })
  return (
    <div ref={sectionRef} className='flex flex-col gap-4 md:gap-0 items-start md:flex-row justify-between md:items-center pb-12'>
      <div className='overflow-hidden'>
        <h2
          ref={footterHeadingRef}
          className='uppercase text-[40px] md:text-[80px]! text-[#f1f1f1]'>
          CloudForge
        </h2>
      </div>
      <div className='flex flex-col gap-4 overflow-hidden'>
        <div ref={followHeadingRef} className='flex items-center gap-4'>
          <h3 className='font-bold text-[#f1f1f1]'>
            Follow us
          </h3>
          <div className='w-6 h-0.5 bg-white'></div>
        </div>
        <div className="overflow-hidden flex items-center gap-3">

          {socialIcons.map((icon, index) =>
            <div key={index} className=' cursor-pointer hover:bg-[#ccccccd7] transition-all duration-300 overflow-hidden rounded-full'>
              <div className='media-icons border border-[#ccc] rounded-full w-10 h-10 p-2 flex justify-center items-center '>
                <img src={icon.src} alt={icon.name} className='inline-block' />
              </div>
            </div>
          )}



        </div>
      </div>
    </div>
  )
}

export default FooterHeader
