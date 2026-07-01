import React from 'react'
import Card from './Card';
import InfoCard from './InfoCard';
import StatsCard from './StatsCard';
import ImageCard from './ImageCard';
import ChartCard from './ChartCard';
function WhyUs() {
    return (
        <div className='bg-[#c6bdab] py-16'>
            <h2 className='text-2xl md:text-[40px] md:mb-8 text-center font-semibold'>
                Why leading companies choose our consulting
            </h2>
            <div className="container">
                <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    <InfoCard
                        title="Strategic growth partner Results driven success"
                        subtitle=""
                        description="Their team delivered high-impact strategies that helped our revenue grow, optimize operations, and build long-term sustainable value."
                    />

                    <StatsCard
                        label="Proven outcomes"
                        value="80%"
                        img={"/icon.svg"}
                        description="Revenue growth achieved by our clients within the first twelve months of partnership."
                    />

                    <ImageCard />

                    <ChartCard />

                    <StatsCard
                        label="Targeted growth"
                        value="98%"
                        img={"/icon-2.svg"}
                        description="Client retention rate due to our hands-on approach and measurable impact on financial results."
                    />

                </div>
            </div>
        </div>
    )
}

export default WhyUs;
