import React from 'react'
import StatCard from './StatCard'
import HorizontalStatCard from './HorizontalStatCard'

function Achievement() {
  return (
    <section className = "pb-16 md:pb-20 lg:pb-24">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard />
        <div className='grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-4'>
          <div className='flex flex-col md:flex-row gap-4 md:col-span-2'>
            <div className='flex flex-col gap-4'>
              <HorizontalStatCard />
              <StatCard />
            </div>
            <StatCard />
          </div>
          <HorizontalStatCard className={"col-span-2"} />
        </div>
        
      </div>
    </section>
  )
}

export default Achievement
