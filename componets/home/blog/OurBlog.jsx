import PrimaryButton from '@/componets/ui/PrimaryButton'
import React from 'react'
import BlogCard from './BlogCard'
import SecondHeading from '@/componets/ui/SecondHeading'
import Reveal from '@/componets/animations/Reveal'
import SubHeading from '@/componets/ui/SubHeading'

const blogCardData = [
    {
        cardImage: "/blog-card1.webp",
        date: "20 March 2026",
        content: "Empowering leaders with practical strategy and market intelligence",
        autherImage: "/auther1.webp",
        autherName: "Carla Kenter"
    },
    {
        cardImage: "/blog-card2.webp",
        date: "20 March 2026",
        content: "Transforming organizations through sustainable innovation initiatives",
        autherImage: "/auther2.webp",
        autherName: "Zain Vetrovs"
    },
    {
        cardImage: "/blog-card3.webp",
        date: "20 March 2026",
        content: "Strengthening organizations with data-driven strategy and leadership",
        autherImage: "/auther3.webp",
        autherName: "Roger Levin"
    }
]


function OurBlog() {
    return (
        <section>
           <Reveal>
             <div className='container'>
                <SubHeading headingText={"about CloudForge"}/>
                    
            
                <div className='overflow-hidden w-full flex flex-col items-start gap-4 md:flex-row justify-between md:items-center border-b border-[#0003] pb-10'>
                    <div className='md:w-[60%]'>
                        <SecondHeading>
                            Building smarter solutions for
                            <br className='hidden lg:block' />
                            modern businesses
                        </SecondHeading>
                    </div>
                    
                    <div data-animate="fade-up" className='md:w-[40%] flex justify-end items-center'>
                        <PrimaryButton
                        ctaText={"View More"}
                        className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
                        btnTextClass={"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
                        circelClass={"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
                    />
                    </div>
                </div>

                <div className='grid pt-14 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {blogCardData.map((card, index) => <BlogCard cardData={card} key={index} />)}

                </div>
            </div>
           </Reveal>
        </section>
    )
}

export default OurBlog
