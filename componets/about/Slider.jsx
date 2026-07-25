import React from 'react'

import SliderComponent from '../ui/header/SliderComponent'

function Slider() {
    return (
        <section className='py-16 md:py-20 lg:py-24'>
            <div className='container text-center'>
                <div>
                    <div className="flex items-start justify-start md:items-center md:justify-center gap-3 font-semibold text-(--subheading-primary) uppercase mb-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-(--paragraph-primary)"></span>
                        about CloudForge
                    </div>
                    <div className="heading pb-16">
                        <h2 className='font-semibold text-start md:text-center leading-12'>We are strategic partners delivering <br className='hidden md:block'/> innovation growth</h2>
                    </div>
                </div>
            </div>

            <SliderComponent />
        </section>
    )
}

export default Slider
