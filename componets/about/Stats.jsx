import React from 'react'
import StatsCard from './StatsCard'
import Reveal from '../animations/Reveal';
import Odometer from '../ui/Odometer';
import { useTranslations } from "next-intl";




function Stats() {
  const t = useTranslations("AboutPage.StatsSection");
   const stats = t.raw("cards");
  return (
    <section className='pb-16 md:pb-20 lg:pb-24'>
      <div className="container">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((item, i) =>
              <div key={i} className='overflow-hidden'>

                <StatsCard data={item} index = {i}>
                  <Odometer
                    value={item.percentage}
                    suffix={item.suffix}
                    duration={4}
                    loops={1}
                  />
                </StatsCard>

              </div>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Stats
