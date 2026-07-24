import Image from 'next/image';
import React from 'react'

function StatsCard({ data }) {
    console.log(data);

    return (
        data && (<div className='bg-(--bg-primary) px-6 py-10 stats-card flex flex-col justify-between gap-15 rounded-xl overflow-hidden'>
            <div className='flex justify-between items-start'>
                <h2 className='text-[20px]! font-semibold whitespace-nowrap'>{data?.title}</h2>
                {data.src && <div className='relative aspect-square w-25 h-auto'>
                    {data?.src &&
                        <Image
                            src={data.src}
                            fill
                            alt={data.title}
                            className='object-cover object-center'
                        />
                    }
                </div>}
                {data?.clientAvatar && data.clientAvatar}
            </div>

            <div className='flex gap-8 items-center'>
                <p className='text-6xl'>{data.percentage}</p>
                <p className='font-semibold'>{data.description}</p>
            </div>
        </div>)
    )
}

export default StatsCard;
