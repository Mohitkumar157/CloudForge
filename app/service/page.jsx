import React from 'react'
import dynamic from 'next/dynamic';
import ServicesAboutCloudForge from '@/componets/service/ServicesAboutCloudForge';
import Achievement from '@/componets/service/AchievementsSection/Achievement';
import PracticalServices from '@/componets/service/Practicalservices/PracticalServices';
import WhyChooseUs from '@/componets/service/whychoseUs/WhyChooseUs';
import OurFeatures from '@/componets/home/our-features/OurFeatures';
import OurTeam from '@/componets/about/ourTeam/OurTeam';
const ServicesHero = dynamic(() => import('@/componets/service/ServicesHero'))
function page() {
  return (
    <section>
      <ServicesHero />
      <ServicesAboutCloudForge />
      <Achievement />
      <PracticalServices />
      <WhyChooseUs />
      <OurFeatures />
      <OurTeam />
    </section>
  )
}

export default page
