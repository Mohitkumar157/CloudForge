import React from 'react'
import FlipperSlider from './FliperSlider'
import Reveal from '../animations/Reveal';

import { useTranslations } from "next-intl";


function MeasurableAchievements() {
  const t = useTranslations("AboutPage.MeasurableAchievementsSection");
   const sliderItems = t.raw("flipperSlider");
  return (
    <Reveal>
      <section className='bg-(--bg-slider) py-16'>
        <div className='overflow-hidden'>
          <h2 data-animate="fade-up" className='text-center text-[28px] md:text-[40px] leading-[1.15] font-normal text-(--heading-primary)'>
           {t("title1")} 
           <br /> 
           {t("title2")}
          </h2>
        </div>
        <FlipperSlider items={sliderItems}/>
        <div className='overflow-hidden'>
          <div data-animate="fade-up" className='rounded-lg text-(--heading-primary) flex justify-center items-center gap-6'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-3 bg-[#ffffff0f] p-4 rounded-full'>
            <span className='uppercase font-semibold text-(--paragraph-primary) bg-(--heading-primary) px-2 rounded-full'> {t("trustLabel")}</span>
            <p className='font-semibold pr-5 text-center'> {t("trustDescription")}</p>
          </div>
        </div>
        </div>
      </section>
    </Reveal>
  )
}

export default MeasurableAchievements;
