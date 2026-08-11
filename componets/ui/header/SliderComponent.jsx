"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import TestimonialSlider from '@/componets/Sliders/TestimonialSlider'
import { useTranslations } from "next-intl";
function SliderComponent() {
    const t = useTranslations("AboutPage.SliderSection");

    const [activeIndex, setActiveIndex] = useState(0);
    const testimonials = t.raw("testimonials");

    const currentTestimonial = testimonials[activeIndex];
    const [flash, setFlash] = useState(false);

    function handlerSlideChange() {
        setFlash(true);
        setTimeout(() => {
            setFlash(false);
        }, 200)
    }
    return (
        <div className="container">
            <div className="slider">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full">
                    <div className='bg-[url("/about/client-review-bg.webp")] w-full h-full col-span-2 bg-(--bg-primary) flex flex-col md:flex-row justify-center gap-6 rounded-2xl py-6 px-7'>

                        <div className='flex flex-col justify-between gap-4 md:w-[60%]'>
                            <img
                                src="/about/review-icon.svg"
                                alt="review-icon"
                                loading='lazy'
                                className='w-8 h-7'
                            />
                            <div>
                                <p className='font-semibold'>
                                    {t(`testimonials.${activeIndex}.review`)}
                                </p>
                                <div className='flex items-center gap-4'>
                                    <img src="/about/star-grup.svg" alt="rating-icon" loading='lazy' />
                                    <span>----------------</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <div>
                                    <img src="/about/icon-2.svg" alt="Earth-icon" />
                                </div>
                                <div className='font-semibold'>
                                    <p>{t("globalReach.line1")}</p>
                                    <p>{t("globalReach.line2")}</p>
                                </div>
                            </div>

                        </div>

                        <div className='relative aspect-square md:w-[40%] rounded-xl overflow-hidden'>
                            <Image
                                src={currentTestimonial.founderImage}
                                fill
                                alt={currentTestimonial.alt.founder}
                                className='object-center object-cover'
                            />
                            <div className={`absolute inset-0 bg-white transition-opacity duration-300 w-full h-full ${flash ? "opacity-100" : "opacity-0"}`}></div>
                        </div>
                    </div>

                    <div className='bg-(--bg-secondry) rounded-2xl py-6 px-7'>
                        <TestimonialSlider
                            setActiveIndex={setActiveIndex}
                            handlerSlideChange={handlerSlideChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderComponent
