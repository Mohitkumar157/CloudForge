import React from 'react'
import PrimaryButton from '../ui/PrimaryButton'
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
function AboutKairo() {
    const services = [
    "Market expansion strategy",
    "Project management services",
    "Structural design experts",
  ];
    return (
        <div className='about-kairo'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>

                    <div className='relative left w-full md:min-h-162.5 h-auto rounded-2xl overflow-hidden'>
                     <Image
                      src={"/about1.webp"}
                      fill
                      className='object-cover'
                      alt='about-img'
                      />
                    </div>

                    <div className='right w-full flex flex-col justify-center'>
                        <h6 className='flex items-center gap-3 text-[#3D4753] uppercase mb-2'>
                            <span className='inline-block w-2 h-2 rounded-full bg-[#000000]'></span>
                            about Avorica
                        </h6>
                        <h2 className='md:text-[40px] font-semibold leading-10 mb-5'>
                            We are strategic partners <br /> delivering innovation growth
                        </h2>
                        <div className='flex items-center gap-5 font-semibold'>
                            <div>[Market analysis]</div>
                            <div>[Growth strategy]</div>
                        </div>
                        <div className='md:py-16'>
                            <PrimaryButton ctaText={"Get a quote"} className={"bg-[#20324f]"}/>
                        </div>

                        <div className="">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative flex justify-between items-cente w-[60%] py-4 border-b border-gray-400"
                                >
                                    <div className="flex items-center gap-2 font-semibold">
                                        <span>0{index + 1}.</span>
                                        <p>{item}</p>
                                    </div>

                                    <ArrowUpRight />
                                    <div className='line absolute left-0 -bottom-px bg-black w-[50%] h-px'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutKairo
