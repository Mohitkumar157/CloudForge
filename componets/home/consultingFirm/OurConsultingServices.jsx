"use client";
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import ConsultingCard from "../consultingFirm/ConsultingCard";
import SecondHeading from '@/componets/ui/SecondHeading';
const Reveal = dynamic(()=> import("@/componets/animations/Reveal"));
import Odometer from '@/componets/ui/Odometer';
import { useTranslations } from "next-intl";



function OurConsultingServices() {
    const [activeCard, setActiveCard] = useState(0);
    const t = useTranslations("HomePage.OurConsultingServicesSection");
    const consultingCardData = t.raw("cards");
    return (
        <section className='py-16 md:py-20 lg:py-24'>

            <div className="container md:px-0!">
            <Reveal>
                <div className="mb-4 md:mb-6 overflow-hidden">
                    <SecondHeading className="text-center">
                        {t("title")}
                        <br className="hidden lg:block" />
                        {t("titleLine2")}
                    </SecondHeading>
                </div>

                <div className="grid grid-cols-1 gap-4 md:gap-0 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
                    {consultingCardData.map((cardData, index) => (
                        <div key={index} className="overflow-hidden">
                            <ConsultingCard
                                activeCard={activeCard}
                                setActiveCard={setActiveCard}
                                data={cardData}
                                index={index}
                                dataAnimate="fade-up"
                            >
                                <Odometer
                                    value={Number(cardData.heading)}
                                    suffix={cardData.suffix}
                                    duration={4}
                                    loops={1}
                                    className="text-6xl font-semibold"
                                />
                            </ConsultingCard>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
        </section>
    )
}

export default OurConsultingServices;
