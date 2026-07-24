import React from 'react'

function StatCard({
    number,
    title,
    src,
    description,
    className = "",
}) {
    return (
        <article className='rounded-xl bg-white p-6 overflow-hidden flex flex-col justify-between items-start'>
            <div className='flex items-center justify-between w-full'>
                <h2>250+</h2>
                <img src="/service/service.svg" alt="service" loading='lazy'/>
            </div>

            <div>
                <h3 className='text-[20px]!'>Consulting projects delivered</h3>
                <p>
                    Avorica delivers strategic consulting solutions
                    helping companies scale operations,
                    optimize performance, strengthen leadership
                    decisions to grow.
                </p>
            </div>
        </article>
    )
}

export default StatCard
