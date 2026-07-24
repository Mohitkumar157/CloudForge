import React from 'react'
import FlipperSlider from './FliperSlider'

function MeasurableAchievements() {
  return (
    <section className='bg-(--bg-slider)'>
      <h2 className='text-center leading-12 pt-16 font-semibold text-(--heading-primary)'>
        Measurable achievements across <br /> multiple sectors
      </h2>
      <FlipperSlider />
      <div className='pb-16  rounded-lg text-(--heading-primary) flex justify-center items-center gap-6'>
        <div className='flex justify-center items-center gap-3 bg-[#ffffff0f] px-2 py-2 rounded-full'>
          <span className='uppercase font-semibold text-(--paragraph-primary) bg-(--heading-primary) px-2 rounded-full'>Trust</span>
        <p className='font-semibold pr-5'>Join the 750+ enterprises trusting our expert business consultancy services</p>
        </div>
        </div>
    </section>
  )
}

export default MeasurableAchievements
