"use client";
import React, { useState } from 'react'
import ConsultingCard from "../consultingFirm/ConsultingCard";

const consultingCardData = [
    {
        heading: "100%",
        subHeading: "Client success",
        paragraph: "We prioritize measurable outcomes by delivering tailored consulting strategies that enhance performance, and drive sustainable client growth."
    },
    {
        heading: "85+",
        subHeading: "Growth & strategy",
        paragraph: "Our strategic insights and data-driven planning empower organizations to expand operations,competitiveness, and achieve long-term objectives."
    },
    {
        heading: "22x",
        subHeading: "Average ROI",
        paragraph: "We prioritize measurable outcomes by delivering tailored consulting strategies that enhance performance, and drive sustainable client growth."
    },
    {
        heading: "25K",
        subHeading: "Market reach",
        paragraph: "Through innovative strategies and global expertise, we help businesses expand and strengthen industry positioning."
    }
]


function OurConsultingServices() {
    const [activeCard  , setActiveCard] = useState(0);
    return (
        <section className='py-16'>
            <h2 className='text-center mb-12 leading-11'>
                Why leading companies choose our consulting <br /> services worldwide
            </h2>
            <div className="container">
                <div 
                className='grid grid-cols-1 gap-4 md:gap-0 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden'
                >
                    {
                        consultingCardData.map((cardData, index) => 
                        <ConsultingCard 
                        activeCard={activeCard}
                        setActiveCard={setActiveCard}
                        key={index} 
                        data={cardData} 
                        index={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default OurConsultingServices
