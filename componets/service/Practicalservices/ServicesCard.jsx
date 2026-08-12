import Image from 'next/image'
import React from 'react'

function ServicesCard({ data: { description, title, image, tags }, index }) {

    return (
        <section className={`service-card bg-[#3d4753] relative border-t border-(--border-primary)`}>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6!">
                <div className='hidden lg:block'>
                    <div className='flex gap-1'>
                        <img src="/service/white-star.svg" alt="star" loading='lazy' />
                        <img src="/service/white-star.svg" alt="star" loading='lazy' />
                        <img src="/service/white-star.svg" alt="star" loading='lazy' />
                    </div>
                </div>

                <div className='flex flex-col gap-6 md:gap-20'>
                    <h3 className='text-(--heading-primary) mt-4 md:mt-0'>{title}</h3>

                    <div>
                        <article className='text-(--text-primary)'>
                            {description}
                        </article>
                        <div className='pt-4 flex items-center flex-wrap gap-3'>
                            {tags.map((tag, i) => <Tags key={i} text={tag} />)}
                        </div>
                    </div>

                </div>

                <div className='relative aspect-square rounded-xl overflow-hidden'>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className='object-cover object-center'
                    />
                </div>
            </div>
        </section>
    )
}





function Tags({ text }) {
    return (
        <div className='w-fit py-1 px-4 text-(--text-primary) rounded-full bg-transparent border border-(--border-primary) hover:bg-white hover:text-black hover:border-transparent transition-all duration-400'>
            {text}
        </div>
    )
}

export default ServicesCard
