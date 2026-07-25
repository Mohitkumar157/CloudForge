import React from 'react'
import Image from 'next/image'
import FeatureList from './FeatureList'
import Features from './Features'

function OurFeatures() {
  return (
    <section className='py-16 md:py-20 lg:py-24'>
     <div className="container">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
       <figure className='relative aspect-3/4.3 rounded-xl overflow-hidden'>
        <Image
         src={"/feature-client.webp"}
         fill
         sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
         className='object-cover  object-right'
         alt='client'
        />
       </figure>

       <FeatureList />
       <Features />
      </div>
     </div>
    </section>
  )
}

export default OurFeatures
