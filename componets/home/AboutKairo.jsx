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
        <section className='about-kairo pb-16 md:pb-20 lg:pb-24'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>

                    <div className='relative left w-full aspect-square rounded-2xl overflow-hidden'>
                     <Image
                      src={"/about1.webp"}
                      fill
                      className='object-cover'
                      alt='about-img'
                      />
                    </div>

                    <div className='right w-full flex flex-col justify-between'>
                        <h6 className='flex items-center gap-3 text-[#3D4753] uppercase mb-2'>
                            <span className='inline-block w-2 h-2 rounded-full bg-[#000000]'></span>
                            about CloudForge
                        </h6>
                        <h2 className='md:text-[40px] font-semibold leading-10 mb-5'>
                            We are strategic partners <br className='hidden lg:block'/> delivering innovation growth
                        </h2>
                        <div className='flex items-center gap-5 font-semibold'>
                            <div>[Market analysis]</div>
                            <div>[Growth strategy]</div>
                        </div>
                        <div className='md:py-16 py-6'>
                            <PrimaryButton 
                            ctaText={"Get a quote"} 
                            className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
                            btnTextClass = {"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
                            circelClass = {"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
                            />
                        </div>

                        <div className="">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex justify-between items-cente w-full ${index === 0 ? "pb-7" : "py-7"} border-b border-gray-400`}
                                >
                                    <div className="flex text-xl items-center gap-2 font-semibold">
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
        </section>
    )
}

export default AboutKairo
