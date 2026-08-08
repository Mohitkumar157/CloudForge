"use client";
import React, { useState } from 'react'
import ConsultingCard from "../consultingFirm/ConsultingCard";
import SecondHeading from '@/componets/ui/SecondHeading';
import Reveal from '@/componets/animations/Reveal';
import Odometer from '@/componets/ui/Odometer';
const consultingCardData = [
    {
        heading: "100",
        suffix: "%",
        subHeading: "Client success",
        paragraph: "We prioritize measurable outcomes by delivering tailored consulting strategies that enhance performance, and drive sustainable client growth."
    },
    {
        heading: "85",
        suffix: "+",
        subHeading: "Growth & strategy",
        paragraph: "Our strategic insights and data-driven planning empower organizations to expand operations,competitiveness, and achieve long-term objectives."
    },
    {
        heading: "22",
        suffix: "x",
        subHeading: "Average ROI",
        paragraph: "We prioritize measurable outcomes by delivering tailored consulting strategies that enhance performance, and drive sustainable client growth."
    },
    {
        heading: "25",
        suffix: "k",
        subHeading: "Market reach",
        paragraph: "Through innovative strategies and global expertise, we help businesses expand and strengthen industry positioning."
    }
]


function OurConsultingServices() {
    const [activeCard, setActiveCard] = useState(0);
    return (
        <section className='py-16 md:py-20 lg:py-24'>

            <div className="container">
                <Reveal>
                    <div className='mb-4 md:mb-6 overflow-hidden'>
                        <SecondHeading className='text-center'>
                            Why leading companies choose our consulting
                            <br className='hidden lg:block' />
                            services worldwide
                        </SecondHeading>
                    </div>
                    <div data-animate="fade-up" className='grid grid-cols-1 gap-4 md:gap-0 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden'>
                        {
                            consultingCardData.map((cardData, index) =>
                                <div key={index} className='overflow-hidden'>
                                    <ConsultingCard
                                        activeCard={activeCard}
                                        setActiveCard={setActiveCard}
                                        data={cardData}
                                        index={index}
                                    >

                                        <Odometer
                                            value={cardData.heading}
                                            suffix={cardData.suffix}
                                            duration={4}
                                            loops={1}
                                            className="text-6xl font-semibold"

                                        />

                                    </ConsultingCard>
                                </div>

                            )
                        }
                    </div>


                </Reveal>

            </div>
        </section>
    )
}

export default OurConsultingServices;
