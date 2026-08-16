import React from 'react'
import dynamic from 'next/dynamic';
const CardScrollSlider = dynamic(()=> import('../CardScrollSlider'))
const AnimatedParagraph = dynamic(()=> import('@/componets/ui/AnimatedParagraph'));
import { useTranslations } from "next-intl";
function ConsultingFirm() {
    const t = useTranslations("HomePage.ConsultingSection");
    return (
        <section className='py-16 md:py-20 lg:py-24'>
            <div className='container'>
                <div className='w-full text-2xl md:pb-16 md:text-[40px] leading-11 font-semibold'>
                    <AnimatedParagraph 
                    text={t("description")} 
                    />  
                </div>
                <CardScrollSlider />
            </div>
        </section>
    )
}

export default ConsultingFirm;
