import Image from 'next/image'
import React from 'react'

function TeamMemberCard({ card }) {
    return (
        <div data-animate="scale-in" className='group relative rounded-2xl overflow-hidden img-wraper aspect-[1/1.2] flex justify-center items-end'>
            <Image
                src={card?.src}
                alt={card.title}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className='object-cover object-center group-hover:scale-[1.1] transition-all duration-500'
            />
            <div className='absolute w-full flex justify-center p-8'>
                <div className='flex justify-center items-center gap-9 py-4 px-8 group-hover:bg-(--bg-secondry) transition-all duration-500 bg-(--bg-cards) rounded-xl'>
                    <div className='text-(--heading-primary) group-hover:text-(--paragraph-primary) transition-all duration-500'>
                        <h3>{card.title}</h3>
                        <h4 className='whitespace-nowrap'>{card.subTitle}</h4>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='p-3 rounded-full bg-(--paragraph-secondary) group-hover:bg-(--border-secondary) transition-all duration-500'><img src="/about/twitter.svg" alt="twitter" loading='lazy'/></div>
                      <div className='p-3 rounded-full bg-(--paragraph-secondary) group-hover:bg-(--border-secondary) transition-all duration-500'> <img src="/about/linkdin.svg" alt="linkdin" loading='lazy'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard
