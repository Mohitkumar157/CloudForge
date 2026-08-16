import React from 'react'
import Image from 'next/image';
import AboutContent from './AboutContent';
function AboutCloudForge() {
    
    return (
        <section className='about-kairo pb-16 md:pb-20 lg:pb-24'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>

                    <div className='relative left w-full aspect-square md:aspect-[1/1.4] lg:aspect-square rounded-2xl overflow-hidden'>
                        <Image
                            src={"/about1.webp"}
                            fill
                            sizes="(max-width: 767px) 100vw, 50vw"
                            className='object-cover object-center'
                            alt='girl reading documents'
                        />
                    </div>

                    <AboutContent />
                </div>
            </div>
        </section>
    )
}

export default AboutCloudForge;
