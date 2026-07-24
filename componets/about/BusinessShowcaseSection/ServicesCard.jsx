import React from 'react'
import ExploreMoreBtn from './ExploreMoreBtn'

function ServicesCard({data}) {
  return (
    <div className='p-6 hover:shadow-xl hover:border-transparent transition-all duration-500 flex flex-col gap-10 justify-between items-start rounded-xl border border-(--border-primary)'>
      <img src={data.src} alt={data.title} loading='lazy'/>
      <p className='font-semibold'>{data.title}</p>
      <ExploreMoreBtn />
    </div>
  )
}

export default ServicesCard
