import React from 'react'
import CardScrollSlider from '../CardScrollSlider';
function ConsultingFirm() {
    return (
        <div className='container md:py-32!'>
           <div className='w-full md:pb-16 md:text-[40px] leading-11 font-semibold'>
             <p>
                We are a consulting firm that turns ideas into market ecosystems. <br />
                Rooted in data and driven by insight,
                we merge strategy and efficiency  to design
                businesses that perform, evolve and endure.
            </p>
           </div>
         <CardScrollSlider />
        </div>
    )
}

export default ConsultingFirm;
