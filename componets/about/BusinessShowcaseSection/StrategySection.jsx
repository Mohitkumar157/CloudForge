import PrimaryButton from '@/componets/ui/PrimaryButton'
import Image from 'next/image'
import React from 'react'

function StrategySection() {
    return (
        <div className='flex flex-col md:flex-row justify-between items-start gap-4 w-full'>
            <div className='md:w-[55%] w-full relative aspect-1/0.5 rounded-2xl overflow-hidden'>
                <Image
                    src={"/about/About-designer-image.webp"}
                    fill
                    className='object-cover object-center'
                    alt='designer-image'
                />
            </div>
            <div className='md:w-[45%] w-full'>
                <h2 className='leading-12 font-semibold'>
                    Designed to help businesses navigate complexity with confidence and clarity
                </h2>
                <div class="flex items-center gap-5 py-6 font-semibold">
                    <div>[Market analysis]</div>
                    <div>[Growth strategy]</div>
                </div>
                <PrimaryButton
                    ctaText={"Let's Talk"}
                    className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
                    btnTextClass={"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
                    circelClass={"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
                />
            </div>
        </div>
    )
}

export default StrategySection
