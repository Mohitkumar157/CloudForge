import Image from 'next/image';
import React from 'react'
import dynamic from 'next/dynamic';
const ClientAvatars = dynamic(() => import("@/componets/ui/ClientAvatars"));
const happyClients = [
  "/happy-client1.webp",
  "/about/author-green.png",
]
function StatsCard({ data , children , index }) {
    

    return (
        data && (<div  data-animate="fade-up" className='bg-(--bg-primary) h-full px-6 py-10 stats-card flex flex-col justify-between gap-15 rounded-xl overflow-hidden'>
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
                {index === 0 && <ClientAvatars happyClients={happyClients} />}
            </div>

            <div className='flex gap-8 items-center'>
                <h3 className='text-6xl'>{children}</h3>
                <p className='font-semibold'>{data.description}</p>
            </div>
        </div>)
    )
}

export default StatsCard;
