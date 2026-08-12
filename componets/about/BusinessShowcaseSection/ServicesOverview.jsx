import React from 'react'
import ServicesCard from './ServicesCard'
import Image from 'next/image'
import Reveal from '@/componets/animations/Reveal'
import { useTranslations } from 'next-intl'



function ServicesOverview() {
    const t = useTranslations(
        "AboutPage.BusinessShowcaseSection.servicesOverview"
    );

    const cards = t.raw("cards");
    const paragraphs = t.raw("paragraphs");
    return (
        <Reveal>
            <div className='flex flex-col lg:flex-row w-full gap-4 py-4'>
                <div className='lg:w-[55%] grid grid-cols-1 gap-4 md:grid-cols-3 overflow-hidden'>
                    {cards.map((card) => <ServicesCard data={card} key={card.id} />)}
                </div>
                <div className='lg:w-[45%] flex flex-col-reverse md:flex-row items-start justify-between gap-5'>
                    <div className='relative aspect-square lg:aspect-[1/1.2] w-full h-fit rounded-xl overflow-hidden'>
                        <Image
                            src={"/about/About-designer-slaider-3.webp"}
                            fill
                            sizes="(max-width: 767px) 100vw, 50vw"
                            alt='desiner-image'
                            className='object-cover object-center'
                            data-animate="scale-image"
                        />
                    </div>
                    <div className='overflow-hidden'>
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                data-animate="fade-right"
                                className={`md:text-2xl lg:text-[16px] ${index === 1 ? "pt-5" : ""
                                    }`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Reveal>
    )
}

export default ServicesOverview
