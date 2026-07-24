import React from 'react'
import Image from 'next/image';
const logoTik = "/logo-tik.svg";

const featuresList = [
    "Data driven strategies",
    "Operational excellence frameworks",
    "High impact advisory"
]
function FeatureList() {
    console.log(logoTik);
    
    return (
        <div className='flex flex-col justify-between gap-12'>
         <ul className='list-none flex flex-col gap-4'>
            {featuresList.map((item , index) =>
            <li key={index} className='flex items-center gap-2'>
                <img 
                src={logoTik} 
                alt='logo-tik'/>
                {item}
            </li> 
            )}
         </ul>
         <figure className='relative aspect-[2/2.2] rounded-xl overflow-hidden'>
            <Image
             src={"/feature-client2.jpg"}
             alt='feature-client'
             fill
             sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
             className='object-cover object-top'
             />
         </figure>
        </div>
    )
}

export default FeatureList;
