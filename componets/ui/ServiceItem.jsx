import React from 'react'
import {ArrowUpRight} from 'lucide-react'
function ServiceItem({index , item}) {
    return (
        <div
            key={index}
            className="relative flex justify-between items-cente w-full py-8 border-b border-gray-400">
            <div className="flex items-center gap-2 font-semibold">
                <span>{index}.</span>
                <p>{item}</p>
            </div>

            <ArrowUpRight />
            <div className='line absolute left-0 -bottom-px bg-black w-[50%] h-px'></div>
        </div>
    )
}

export default ServiceItem ;
