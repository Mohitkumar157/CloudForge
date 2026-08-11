import React from 'react'
import { useTranslations } from 'next-intl';
function StatCard({ className = "", children , dataAnimate}) {
    const t = useTranslations("ServicesPage.AchievementSection");


    return (
        <article data-animate ={dataAnimate} className='rounded-xl h-full bg-white p-6 overflow-hidden flex flex-col justify-between items-start'>
            <div className='flex items-center justify-between w-full mb-6'>
                
                {children}
                <img src="/service/service.svg" alt="service" loading='lazy'/>
            </div>

            <div>
                <h3 className='text-[20px]! font-semibold'> {t("statCard.title")}</h3>
                <p>
                    {t("statCard.description")}
                </p>
            </div>
        </article>
    )
}

export default StatCard
