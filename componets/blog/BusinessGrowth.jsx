import React from 'react'
import BlogCardWraper from './BlogCardWraper';
import Reveal from '../animations/Reveal';
import { useTranslations } from 'next-intl';




function BusinessGrowth() {
  const t = useTranslations("BlogPage.BusinessGrowthSection");
  const blogCards = t.raw("blogCards");
  return (
    <Reveal>
      <section>
        <h2 className='text-center text-[28px] md:text-[40px] leading-[1.15] font-normal py-16 md:pt-20 md:pb-12'>
          {t("title")}
          </h2>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogCards.map((card , i) => 
          <div key={i} className={`flex flex-col gap-5`}>
            <BlogCardWraper data = {card}/>
          </div>
        )}
        </div>
    </section>
    </Reveal>
  )
}

export default BusinessGrowth
