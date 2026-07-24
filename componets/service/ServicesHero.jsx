import React from 'react'
import HeroContent from './HeroContent'

function ServicesHero() {
    return (
        <section className=''>
            <div className='relative pb-2 flex flex-col justify-end items-center w-full h-screen bg-[url("/service/Service-banner.avif")] bg-center bg-cover'>
                <div className='w-full h-screen absolute left-0 top-0 overlay bg-[linear-gradient(#fff0_67%,#0f1e36ab),linear-gradient(#0f1e36b8,#fff0_26%),linear-gradient(#0f1e3652,#0f1e3652)]'></div>
                <HeroContent />
            </div>
        </section>
    )
}

export default ServicesHero
