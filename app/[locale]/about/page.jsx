import React from 'react'
import dynamic from 'next/dynamic';

const OurFeatures = dynamic(() => import('@/componets/about/OurFeatures'))
const OurTeam = dynamic(() => import('@/componets/about/ourTeam/OurTeam'))
const BusinessShowcase = dynamic(() => import('@/componets/about/BusinessShowcaseSection/BusinessShowcase'));
const OurBlog = dynamic(() => import('@/componets/home/blog/OurBlog'));
const Stats = dynamic(() => import('@/componets/about/Stats'));
const AboutHero = dynamic(() => import("@/componets/about/AboutHero"));
const Slider = dynamic(() => import("@/componets/about/Slider"));
const MeasurableAchievements = dynamic(() => import('@/componets/about/MeasurableAchievements'));

function page() {
  return (
    <section>
      <AboutHero />
      <Slider />
      <Stats />
      <MeasurableAchievements />
      <OurFeatures />
      <OurTeam />
      <BusinessShowcase />
      <OurBlog />
    </section>
  )
}

export default page;
