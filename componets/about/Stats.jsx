import React from 'react'
import StatsCard from './StatsCard'
import dynamic from 'next/dynamic';
const ClientAvatars = dynamic(() => import("@/componets/ui/ClientAvatars"));
const happyClients = [
  "/happy-client1.webp",
  "/about/author-green.png",
]
const stats = [
  {
    title: "Client success",
    percentage: "96%",
    description: "Strategic growth for your business.",
    clientAvatar : <ClientAvatars happyClients={happyClients}/>
  },
  {
    title: "Market expansion",
    percentage: "85.6%",
    description: "Scalable results for every client.",
    src : "/about/Market-expansion-image-1.webp"
  },
  {
    title: "Asset efficiency",
    percentage: "99%",
    description: "Optimizing value through smart data.",
    src : "/about/Asset-efficiency-image-1.webp"
  },
];


function Stats() {
  return (
    <section className='mt-4 pb-26'>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((item , i) => <StatsCard key={i} data = {item}/>)}
        </div>
      </div>
    </section>
  )
}

export default Stats
