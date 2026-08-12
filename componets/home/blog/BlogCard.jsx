import Image from 'next/image'
import React from 'react'
import { Calendar } from 'lucide-react';





function BlogCard({cardData}) {

   
    return (
        <div data-animate="fade-up" className='blog-card bg-(--bg-primary) rounded-2xl overflow-hidden group'>
            <div className={`top relative overflow-hidden ${[4,5].includes(cardData.id) ? "aspect-3/2.5" : "aspect-3/2"}`}>
                <Image
                    src={cardData?.cardImage}
                    alt='blog-image'
                    fill
                    loading='lazy'
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className='object-cover object-center group-hover:scale-110 transition-all duration-500'
                />
                <div className='absolute h-20 w-[200%] bg-[#f1f1f1] top-[50%] opacity-0 -rotate-45 right-[200%] group-hover:right-[-200%] group-hover:opacity-50 transition-all duration-900'></div>
            </div>

            <div className="bottom p-4 pb-8">
                <div className="date flex items-center gap-3">
                    <Calendar className='text-[14px] text-[#524f4f]'/>
                    <span>{cardData?.date}</span>
                </div>

                <p className='text-[22px] leading-7 mt-4 font-semibold min-h-20'>
                    {cardData?.content}
                </p>

                <div className='border-div relative h-px w-full bg-[#0003] my-9'>
                    <div className='absolute h-px rounded-full w-0 bg-black left-0 group-hover:w-full transition-all duration-500'></div>
                </div>
                <div className="card-footer flex gap-4 items-center">
                    <img src={cardData?.authorImage} alt="auther" className='w-8 h-8 rounded-full object-cover' />
                    <span className='auther-name'>{cardData?.autherName}</span>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;
