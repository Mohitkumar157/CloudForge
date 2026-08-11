import React from 'react'
import dynamic from "next/dynamic";

const ServicesHero = dynamic(() => import("@/componets/service/ServicesHero"));
const ServicesAboutCloudForge = dynamic(() => import("@/componets/service/ServicesAboutCloudForge"));
const Achievement = dynamic(() => import("@/componets/service/AchievementsSection/Achievement"));
const PracticalServices = dynamic(() => import("@/componets/service/Practicalservices/PracticalServices"));
const WhyChooseUs = dynamic(() => import("@/componets/service/whychoseUs/WhyChooseUs"));
const OurFeatures = dynamic(() => import("@/componets/home/our-features/OurFeatures"));
const OurTeam = dynamic(() => import("@/componets/about/ourTeam/OurTeam"));

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

export default page;
