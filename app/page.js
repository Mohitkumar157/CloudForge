import AboutKairo from '@/componets/home/AboutKairo';
import Carousel3D from '@/componets/home/Carousel3D';
import ConsultingFirm from '@/componets/home/ConsultingFirm';
import Hero from '@/componets/home/hero/Hero';
import WhyUs from '@/componets/home/whyChoseUs/WhyUs';
import React from 'react'

function HomePage() {
  return (
    <>
     <Hero />
     <ConsultingFirm />
     <AboutKairo />
     <WhyUs />
     <Carousel3D />
    </>
  )
}

export default HomePage;
