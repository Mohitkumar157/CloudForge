import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import FeatureList from './FeatureList'
import Features from './Features'
const Reveal = dynamic(()=> import('@/componets/animations/Reveal'));
function OurFeatures() {

  return (
    <section className='py-16 md:py-20 lg:py-24'>
      <div className="container">

        <Reveal>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <div className='rounded-xl overflow-hidden'>
              <figure
               data-animate="scale-image"
                className='relative aspect-square md:aspect-[3/4.3] h-full rounded-xl overflow-hidden'>
                <Image
                  src={"/feature-client.webp"}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className='object-cover object-right'
                  alt='client'
                />
              </figure>
            </div>

            <div>
              <FeatureList />
            </div>

            <div>
              <Features />
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default OurFeatures;
