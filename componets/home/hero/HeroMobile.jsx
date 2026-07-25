import React from 'react'
import Image from 'next/image'
import PrimaryButton from '@/componets/ui/PrimaryButton'
import ClientAvatars from '@/componets/ui/ClientAvatars'
const happyClients = [
    "/happy-client1.webp",
    "/happy-client2.webp",
    "/happy-client3.webp",
    "/happy-client4.webp",
    "/white-plus-icon.webp"
]

function HeroMobile() {
    return (
        <section className='relative w-full h-screen overflow-hidden'>
            <div className='w-full h-screen absolute inset-0'>
                <div className='relative aspect-square w-full h-screen'>
                    <Image
                    src={"/hero-1.webp"}
                    alt='hero-image'
                    fill
                    className='object-cover object-center'
                />
                </div>
            </div>

             <div className=' w-full h-screen absolute left-0 top-0 overlay bg-[linear-gradient(#fff0_67%,#0f1e36ab),linear-gradient(#0f1e36b8,#fff0_26%),linear-gradient(#0f1e3652,#0f1e3652)]'></div>
             <div className='container text-[#f1f1f1] absolute z-50 bottom-0'>
                    <h1 className='text-5xl w-fit font-semibold'>
                        <div className='flex gap-5 items-end'>
                            <div className='w-fit'>Design</div>
                             <ClientAvatars happyClients={happyClients}/>
                        </div>
                        <div>that drives growth</div>
                    </h1>
                    <p className='font-semibold my-4 w-fit'>
                        We create modern, user-focused digital
                        experiences that help businesses stand out,
                        engage customers, and scale faster.
                    </p>

                    <PrimaryButton
                        ctaText={"lets talk"}
                        className="mb-4 pointer-events-auto group-hover:bg-[#20324f] 
                        bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
                        btnTextClass={"text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"}
                        circelClass={"bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"}
                    />

                    <div className='pt-7 flex items-center gap-5 border-t border-[#ccc] w-fit'>
                        <div className='flex gap-4 items-center'>
                            <p className='text-[40px] font-semibold'>25+</p>
                            <p className='text-[#f1f1f1] font-semibold'>Years of work <br /> experience</p>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <p className='text-[40px] font-semibold'>98%</p>
                            <p className='text-[#f1f1f1] font-semibold'>Rated 4.9/5 from <br /> over 1200 reviews</p>
                        </div>

                    </div>
                </div>
        </section>
    )
}

export default HeroMobile
