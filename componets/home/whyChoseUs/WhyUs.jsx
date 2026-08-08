import React from 'react'
import InfoCard from './InfoCard';
import StatsCard from './StatsCard';
import ImageCard from './ImageCard';
import ChartCard from './ChartCard';
import SecondHeading from '@/componets/ui/SecondHeading';
import Reveal from '@/componets/animations/Reveal';
function WhyUs() {
    return (
        <section className='bg-[#c6bdab] py-16 md:py-20 lg:py-24'>


            <div className="container">
                <div className='mb-4 md:mb-6'>
                    <SecondHeading
                        className={"md:text-center leading-[1.08] text-center!"}
                        children={"Why leading companies choose our consulting"}
                    />
                </div>

                <Reveal>
                    <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                        <div data-animate="scale-in" className='overflow-hidden'>
                            <InfoCard
                                title="Strategic growth partner Results driven success"
                                subtitle=""
                                description="Their team delivered high-impact strategies that helped our revenue grow, optimize operations, and build long-term sustainable value."
                            />
                        </div>

                        <div data-animate="scale-in">
                            <StatsCard
                                label="Proven outcomes"
                                value="80%"
                                img={"/icon.svg"}
                                description="Revenue growth achieved by our clients within the first twelve months of partnership."
                            />
                        </div>

                        <div data-animate="scale-in">
                            <ImageCard />
                        </div>

                        <div data-animate="scale-in" className='lg:col-span-2'>
                            <ChartCard />
                        </div>

                        <div data-animate="scale-in">
                            <StatsCard
                                label="Targeted growth"
                                value="98%"
                                img={"/icon-2.svg"}
                                description="Client retention rate due to our hands-on approach and measurable impact on financial results."
                            />
                        </div>

                    </div>

                </Reveal>


            </div>
        </section>
    )
}

export default WhyUs;
