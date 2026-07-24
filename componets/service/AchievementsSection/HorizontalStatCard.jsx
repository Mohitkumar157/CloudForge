import ClientAvatars from '@/componets/ui/ClientAvatars'
import React from 'react'


const happyClients = [
    "/happy-client1.webp",
    "/happy-client2.webp",
    "/white-plus-icon.webp"
]
function HorizontalStatCard({className}) {
  return (
    <section className={`bg-white border border-(--border-primary) rounded-xl overflow-hidden p-6 ${className}`}>
        <h3 className='text-[20px]! font-semibold'>Industries supported globally</h3>
        <div className='w-full flex items-center justify-between'>
            <p>Our consulting experience spans sectors with strategies.</p>
             <ClientAvatars happyClients={happyClients}/>
        </div>
    </section>
  )
}

export default HorizontalStatCard
