"use client";
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';


import { testimonials } from "@/app/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Image from 'next/image';

export default function TestimonialSlider({setActiveIndex , handlerSlideChange}) {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect="fade"
      speed={600}
      fadeEffect={{
        crossFade: true,
      }}
      navigation={{
        prevEl: ".prev-btn",
        nextEl: ".next-btn",
      }}
      onSlideChange={(slide) => {
        handlerSlideChange();
        setActiveIndex(slide.realIndex)
      }}
    >



      {testimonials.map((item, i) => (
        <SwiperSlide className=''>
          <div className='relative aspect-3/2 rounded-xl overflow-hidden flex flex-row! gap-4'>
            <Image
              src={item.companyImage}
              alt={item.alt}
              fill
              className='object-cover object-center'
            />
          </div>
          <div className="flex justify-between items-center mt-5 mb-7">
            <div className="text-[20px] font-semibold">{item.company}</div>
            <div className="font-semibold"><span className='text-(--paragraph-secondary)'>0{1 + i}</span>/{testimonials.length}</div>
          </div>
        </SwiperSlide>
      ))}




      <div className="flex gap-6 justify-end pt-8 border-t border-(--border-secondary)">
        <div className='group'>
          <button className="group-hover:bg-[#59624d] transition-bg-color duration-300 prev-btn cursor-pointer w-10 h-10 border border-(--border-secondary) rounded-full flex justify-center items-center">
          <ArrowLeft className='text-(--subheading-primary) w-4 h-4 group-hover:text-(--heading-primary) transition-all duration-300' />
        </button>
        </div>

        <div className='group'>
          <button className="group-hover:bg-[#59624d] transition-bg-color duration-300 next-btn cursor-pointer w-10 h-10 rounded-full border border-(--border-secondary) flex justify-center items-center">
          <ArrowRight className='text-(--subheading-primary) w-4 h-4 group-hover:text-(--heading-primary) transition-all duration-300' />
        </button>
        </div>
      </div>
    </Swiper>
  );
}











