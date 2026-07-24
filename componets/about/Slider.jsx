import React from 'react'

import SliderComponent from '../ui/header/SliderComponent'

function Slider() {
    return (
        <section >
            <div className='container text-center'>
                <div className='pt-26 pb-10'>
                    <div className="flex items-center justify-center gap-3 font-semibold text-(--subheading-primary) uppercase mb-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-(--paragraph-primary)"></span>
                        about Avorica
                    </div>
                    <div className="heading">
                        <h2 className='font-semibold leading-12'>We are strategic partners delivering <br /> innovation growth</h2>
                    </div>
                </div>
            </div>

            <SliderComponent />
        </section>
    )
}

export default Slider
