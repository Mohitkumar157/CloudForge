import React from 'react'
import ServicesCard from './ServicesCard'
import Image from 'next/image'

const servicesCardData = [
    {
        title: "Clear positioning and scalable growth planning",
        src: "/about/Process-icon-1.svg",
        id: 1
    },
    {
        title: "Process improvement driving efficiency and profit",
        src: "/about/Process-icon-2.svg",
        id: 2
    },
    {
        title: "Technology-led solutions for modern growth",
        src: "/about/Process-icon-3.svg",
        id: 3
    }
]


function ServicesOverview() {
    return (
        <div className='flex flex-col md:flex-row w-full gap-4 py-4'>
            <div className='md:w-[55%] grid grid-cols-1 gap-4 md:grid-cols-3'>
                {servicesCardData.map((card) => <ServicesCard data={card} key={card.id} />)}
            </div>
            <div className='md:w-[45%] flex flex-col-reverse md:flex-row items-start justify-between gap-5'>
                <div className='relative aspect-[1/1.2] w-full h-fit rounded-xl overflow-hidden'>
                    <Image
                        src={"/about/About-designer-slaider-3.webp"}
                        fill
                        alt='desiner-image'
                        className='object-cover object-center'
                    />
                </div>
                <div>
                    <p className='font-semibold'>
                        Transforming a legacy business system into modern digital powerhouses by
                        data-led strategies and design.
                    </p>
                    <p className='pt-5 font-semibold'>
                        Our consultancy empowers
                        global prime enter prises to run complex market
                        shifts with top scalability.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesOverview
