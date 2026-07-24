import React from 'react'
import AboutCloudForge from './AboutCloudForge';

function AboutHero() {
  return (
    <div className='relative pb-16 flex flex-col justify-end items-center w-full h-screen bg-[url("/about/about-hero.avif")] bg-center bg-cover'>
      <div className='w-full h-screen absolute left-0 top-0 overlay bg-[linear-gradient(#fff0_67%,#0f1e36ab),linear-gradient(#0f1e36b8,#fff0_26%),linear-gradient(#0f1e3652,#0f1e3652)]'></div>
      <AboutCloudForge />
    </div>
  )
}

export default AboutHero;
