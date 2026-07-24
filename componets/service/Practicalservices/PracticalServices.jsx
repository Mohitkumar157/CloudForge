import PrimaryButton from '@/componets/ui/PrimaryButton'
import React from 'react'
import ServicesCard from './ServicesCard'
import {strategies} from "../../../app/data/services";




function PracticalServices() {
    return (
        <section className='bg-[#3d4753] py-16'>
            <div className='container flex justify-between items-center'>
                <h2 className='leading-11 font-semibold text-(--heading-primary)'>Practical services focused on real <br /> business outcomes</h2>
                <PrimaryButton
                    ctaText={"Discover more"}
                    className="group-hover:bg-[#20324f] 
                        bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
                    btnTextClass={"text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"}
                    circelClass={"bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"}
                />
            </div>
           <div className='py-16'>
            {
                strategies.map((strategy) => <ServicesCard  key={strategy.id} data={strategy}/>)
            }
             </div>
        </section>
    )
}

export default PracticalServices
