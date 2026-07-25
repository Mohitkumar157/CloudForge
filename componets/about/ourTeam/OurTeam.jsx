import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import SubHeading from '@/componets/ui/SubHeading'


const teamData = [
  {
    src : "/about/Team-image-1.webp",
    title : "Noah Walker",
    subTitle : "Strategy Consultant"
  },
   {
    src : "/about/Team-image-2.webp",
    title : "Isabella Reed",
    subTitle : "Process Consultant"
  },
   {
    src : "/about/Team-image-3.webp",
    title : "Ryan Collins",
    subTitle : "Strategy Analyst"
  }
]

function OurTeam() {
  return (
    <section className='py-16 md:py-20 lg:py-24 bg-[#c6bdab]'>
      <div className='flex flex-col justify-center items-center'>
        <SubHeading headingText={"Our team"}/>
        <h2 className='text-[40px] text-center leading-12 font-semibold mb-9'>Meet the other team members</h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
        {teamData.map((card , index) => (
        <TeamMemberCard card={card} key={index}/>
      ))}
      </div>
    </section>
  )
}

export default OurTeam;
