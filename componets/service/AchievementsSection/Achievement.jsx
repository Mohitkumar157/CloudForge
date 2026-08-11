import React from 'react'
import StatCard from './StatCard'
import HorizontalStatCard from './HorizontalStatCard'
import Odometer from '@/componets/ui/Odometer'
import Reveal from '@/componets/animations/Reveal'

function Achievement() {
  return (
    <section className="pb-16 md:pb-20 lg:pb-24">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
        <Reveal>
          <StatCard dataAnimate = "fade-up">
          <Odometer
            value={76}
            suffix="+"
            duration={4}
            loops={1}
            className="text-8xl font-bold"
          />
        </StatCard>
        </Reveal>
        <div className='grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-4'>
          <div className='flex flex-col md:flex-row gap-4 md:col-span-2'>
            <Reveal>
              <div data-animate = "fade-up" className='flex flex-col gap-4'>
              <HorizontalStatCard />
              <StatCard>
                <Odometer
                  value={56}
                  suffix="+"
                  duration={4}
                  loops={1}
                  className="text-8xl font-bold"
                />
              </StatCard>
            </div>
            </Reveal>

            <Reveal>
              <StatCard dataAnimate={"fade-up"}>
              <Odometer
                value={78}
                suffix="+"
                duration={4}
                loops={1}
                className="text-8xl font-bold"
              />
            </StatCard>
            </Reveal>
          </div>
        
           <HorizontalStatCard className={"col-span-2"} />
         
        </div>

      </div>
    </section>
  )
}

export default Achievement
