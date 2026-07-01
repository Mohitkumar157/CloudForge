import PrimaryButton from '@/componets/ui/PrimaryButton'
import React from 'react'
import Image from 'next/image'
const slideImages = [
    {
        id: 1,
        image: "/hero-1.webp",
    },
    {
        id: 2,
        image: "/hero-2.avif",
    },
    {
        id: 3,
        image: "/her-3.avif",
    },
]

function HeroContent() {
    return (
        <div className='fixed w-full z-50 top-[20%] left-0 flex justify-center'>
            <div className='container relative flex justify-between px-4!'>
                <div className='md:w-[50%] text-[#f1f1f1]'>
                    <h1 className='text-6xl w-fit font-semibold'>Design <br /> that drives growth</h1>
                    <p className='font-semibold my-8 w-fit'>
                        We create modern, user-focused digital
                        experiences that help <br /> businesses stand out,
                        engage customers, and scale faster.
                    </p>
                    <PrimaryButton ctaText={"lets talk"} className="mb-9" />

                    <div className='pt-7 flex items-center gap-5 border-t border-[#ccc] w-fit'>
                        <div className='flex gap-4 items-center'>
                            <p className='text-[40px] font-semibold'>25+</p>
                            <p className='text-[#f1f1f1] font-semibold'>Years of work <br /> experience</p>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <p className='text-[40px] font-semibold'>98%</p>
                            <p className='text-[#f1f1f1] font-semibold'>Rated 4.9/5 from <br /> over 1200 reviews</p>
                        </div>

                    </div>
                </div>

                <div className='md:w-[50%] flex justify-end'>
                    <div className='w-55 h-auto'>

                        <div className=' flex flex-col gap-4 '>
                            {slideImages.map((slide, index) => <div
                                className='rounded-lg overflow-hidden'
                                key={index}>
                                <Image width={250} height={250} src={slide.image} alt="busniess" className='object-cover ' />
                            </div>
                            )}
                        </div>

                    </div>
                </div>
                <h2 className='absolute -bottom-81 left-0 text-[#f1f1f1] font-semibold text-[220px] z-40'>
                    Resilience
                </h2>
            </div>
        </div>
    )
}

export default HeroContent;
