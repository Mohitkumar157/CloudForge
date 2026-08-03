import React from 'react'
import ClientAvatars from '../ui/ClientAvatars'
import PrimaryButton from '../ui/PrimaryButton';
import { Minus } from 'lucide-react';
const happyClients = [
  "/happy-client1.webp",
  "/happy-client2.webp",
  "/happy-client3.webp",
  "/happy-client4.webp",
];
const businessServices = [
  {
    id: "01",
    title: "Business Strategy",
  },
  {
    id: "02",
    title: "Sustainable Growth",
  },
  {
    id: "03",
    title: "Innovation Planning",
  },
  {
    id: "04",
    title: "Market Analysis",
  },
];
function HeroContent() {
  return (
    <div className='absolute z-10 w-full '>
      <div className="container flex flex-col justify-between gap-8 md:gap-16">
        <div>
          <div className='flex items-center'>
            <ClientAvatars happyClients={happyClients} />
            <div>
              <div className='flex items-center gap-3'>
                <img src="/service/Star-service-three.svg" alt="start" loading='lazy' />
                <span className='font-semibold text-(--text-primary)'>4.9/5</span>
              </div>
              <span className='text-(--text-primary)'>Trusted worldwide</span>
            </div>
          </div>
          <h1 className='md:text-6xl text-4xl font-semibold text-(--heading-primary) my-4 md:my-8'>Smart strategies that <br /> drive business growth</h1>
          <PrimaryButton
            ctaText={"lets talk"}
            className="pointer-events-auto group-hover:bg-[#20324f] 
                        bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
            btnTextClass={"text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"}
            circelClass={"bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"}
          />
        </div>

        <div>
          <p className='text-(--text-primary)'>
            We create modern, user-focused digital <br className = "hidden md:block"/>
            experiences that help businesses stand out, <br className = "hidden md:block"/>
            engage customers, and scale faster.
          </p>
        </div>
        <div className='hidden md:block'>
          <ul className='flex justify-between items-center'>
         {businessServices.map((service) => 
         <li 
         key={service.id}
         className='flex items-center gap-2 text-(--text-primary) uppercase font-semibold'
         >
          <span>{service.id}</span>
           <Minus />
           <span>{service.title}</span>
          </li>
        )}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default HeroContent;
