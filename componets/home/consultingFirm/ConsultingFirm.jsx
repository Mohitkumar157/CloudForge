import React from 'react'
import CardScrollSlider from '../CardScrollSlider';
import AnimatedParagraph from '@/componets/ui/AnimatedParagraph';
function ConsultingFirm() {
    return (
        <section className='py-16 md:py-20 lg:py-24'>
            <div className='container'>
                <div className='w-full text-2xl md:pb-16 md:text-[40px] leading-11 font-semibold'>
                    <AnimatedParagraph text={"We are a consulting firm that turns ideas into market ecosystems. Rooted in data and driven by insight, we merge strategy and efficiency to design businesses that perform, evolve and endure."} />  
                </div>
                <CardScrollSlider />
            </div>
        </section>
    )
}

export default ConsultingFirm;
