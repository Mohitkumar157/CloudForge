import Reveal from '@/componets/animations/Reveal'
import ScrollColorText from '@/componets/animations/ScrollColorText'
import PrimaryButton from '@/componets/ui/PrimaryButton'
import Image from 'next/image'
import React from 'react'
import { useTranslations } from "next-intl";

function StrategySection() {
    const t = useTranslations("AboutPage.BusinessShowcaseSection.strategy");
    const tags = t.raw("tags");
    return (
        <Reveal>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-start gap-4 h-full w-full'>
                <div className='lg:w-[55%] w-full relative aspect-1/0.5 rounded-2xl overflow-hidden'>
                    <Image
                        src={"/about/About-designer-image.webp"}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className='object-cover object-center'
                        alt='designer-image'
                        data-animate="scale-in"
                    />
                </div>
                <div data-animate="fade-up" className='lg:w-[45%] w-full flex flex-col justify-between'>
                    <ScrollColorText
                        text={t("text")}
                        className='text-[28px] md:text-[40px] leading-[1.15] font-semibold'
                    />


                    <div className="flex items-center gap-5 font-semibold my-6 overflow-hidden">
                        {tags.map((tag, index) => (
                            <div key={index} data-animate-child="child-fade-up">
                                [{tag}]
                            </div>
                        ))}
                    </div>
                    <div className='overflow-hidden'>
                        <div data-animate-child="child-fade-up">
                            <PrimaryButton
                                ctaText={t("cta")}
                                className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
                                btnTextClass={"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
                                circelClass={"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}

export default StrategySection
