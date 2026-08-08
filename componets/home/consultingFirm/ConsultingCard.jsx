"use client";
import React from 'react'

function ConsultingCard(
    { data: { heading, subHeading, paragraph },
        index,
        activeCard,
        setActiveCard,
        children
    }) {

    return (
            <div
            onMouseEnter={() => setActiveCard(index)}
            className={`h-full consulting-card p-10 transition-all duration-500 ease-in
         ${index === activeCard ? "bg-[#59624d] text-[#f1f1f1]" : " bg-[#f8f8f8] text-[#212121]"}
         ${index !== 3 && "border-r border-[#0003]"}
         `}>
            {children}
            <div className='border-line w-full h-px bg-[#0003] mx-auto my-10 md:my-12 lg:my-16'></div>
            <div>
                <h3 className='mb-4 text-2xl font-semibold'>{subHeading}</h3>
                <p className='text-start'>
                    {paragraph}
                </p>
            </div>
        </div>
    )
}

export default ConsultingCard
