"use client";
import PrimaryButton from '@/componets/ui/PrimaryButton'
import React from 'react'
import Image from 'next/image'
import Line from './Line'
import ClientAvatars from '@/componets/ui/ClientAvatars';
import { useTranslations } from 'next-intl';
const happyClients = [
    "/happy-client1.webp",
    "/happy-client2.webp",
    "/happy-client3.webp",
    "/happy-client4.webp",
    "/white-plus-icon.webp"
]

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
    const t = useTranslations("HomePage");
    return (
        <div className='absolute w-full z-50 bottom-50 md:top-[20%] left-0 flex justify-center pointer-events-none'>
            <div className='container relative flex justify-between '>
                <div className='md:w-[50%] text-[#f1f1f1]'>
                    <h1 className='text-5xl md:text-6xl w-fit font-semibold'>
                        <div className='flex gap-5 items-end'>
                            <div className='w-fit'>{t("title1")}</div>
                             <ClientAvatars animationOn='load' animationStart="top 0%" happyClients={happyClients}/>
                        </div>
                        <div>{t("title2")}</div>
                    </h1>
                    <p className='font-semibold my-4 md:my-8 w-fit'>
                        We create modern, user-focused digital
                        experiences that help <br className='hidden lg:block'/> businesses stand out,
                        engage customers, and scale faster.
                    </p>

                    <PrimaryButton
                        ctaText={"lets talk"}
                        className="mb-9 pointer-events-auto group-hover:bg-[#20324f] 
                        bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
                        btnTextClass={"text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"}
                        circelClass={"bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"}
                    />

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

                <div className='md:w-[50%] md:flex justify-end'>
                    <div className='w-55 h-auto'>

                        <div className=' flex flex-col gap-4 items-end relative'>
                            {slideImages.map((slide, index) => <div
                                className='rounded-lg overflow-hidden'
                                key={index}>
                                <Image
                                    style={{ width: "auto", height: "auto" }}
                                    width={200}
                                    height={200}
                                    src={slide.image}
                                    alt="busniess"
                                    className='object-cover ' />
                            </div>
                            )}
                            <Line />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default HeroContent;
