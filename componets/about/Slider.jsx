import React from 'react'

import SliderComponent from '../ui/header/SliderComponent'
import SubHeading from '../ui/SubHeading'
import { useTranslations } from "next-intl";
function Slider() {
     const t = useTranslations("AboutPage.SliderSection");
    return (
        <section className='py-16 md:py-20 lg:py-24'>
            <div className='container text-center'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <SubHeading headingText={"about CloudForge"}/>
                    <div className="heading pb-16">
                        <h2 className='text-[28px] md:text-[40px] leading-[1.15] font-normal '>
                             {t("title1")} 
                            <br className='hidden md:block'/> 
                             {t("title2")}
                            </h2>
                    </div>
                </div>
            </div>

            <SliderComponent />
        </section>
    )
}

export default Slider
