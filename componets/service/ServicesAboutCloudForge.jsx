import React from 'react'
import SubHeading from '../ui/SubHeading'
import AnimatedParagraph from '../ui/AnimatedParagraph';

function ServicesAboutCloudForge() {
  return (
    <section className='py-16'>
        <div className='container'>
         <div className='flex justify-center items-start gap-20'>
            <SubHeading headingText={"about CloudForge"}/>
            <AnimatedParagraph
            className = {"text-4xl font-semibold"}
            text={"We are a consulting firm that turns ideas into market ecosystems.Rooted in data and driven by insight, we merge strategy and efficiency"}/>
         </div>
    </div>
    </section>
  )
}

export default ServicesAboutCloudForge;
