import React from 'react'
import FeatureCard from './ourFeatures/FeatureCard'
import SubHeading from '../ui/SubHeading'
import Image from 'next/image'
import ClientAvatars from '../ui/ClientAvatars'
import ServicesSection from '../ui/ServicesSection'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../animations/Reveal'
import { useTranslations } from 'next-intl'

const happyClients = [
  "/happy-client1.webp",
  "/happy-client2.webp",
  "/about/author-green.png"
]


function OurFeatures() {
  const t = useTranslations("AboutPage.OurFeaturesSection");
  const services = t.raw("services");
  const tags = t.raw("tags");

  return (
    <section className='py-16 md:py-20 lg:py-24'>
      <div className="container">

        <Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard>

              <div data-animate="fade-up" className='flex flex-col gap-4 justify-between h-full'>
               
                 <SubHeading headingText={t("subHeading")} />
               

                <div className='overflow-hidden'>
                  <h2
                    data-animate-child="child-fade-up"
                    className='text-[28px] md:text-[40px] leading-[1.15] font-normal'>

                    {t("title")}
                  </h2>
                </div>


                <div className="flex items-center gap-5 font-semibold overflow-hidden">
                  {tags.map((tag, index) => (
                    <div key={index} data-animate-child="child-fade-up">
                      [{tag}]
                    </div>
                  ))}
                </div>
                <div className='relative aspect-5/3 rounded-xl overflow-hidden'>
                  <Image
                    src={"/about/features-image-1.webp"}
                    alt='features image'
                    sizes="(max-width: 768px) 100vw, 380px"
                    fill
                    className='object-cover object-center rounded-xl'
                    data-animate-child="child-scale-in"
                  />
                </div>

                <div className='overflow-hidden'>
                  <div data-animate-child="child-fade-up" className='p-6 bg-[#f8f8f8] rounded-xl flex flex-col gap-6' >
                    <div>
                      <h3 className='font-semibold'>{t("revenueCard.title")}</h3>
                      <p className='pt-4 font-semibold text-(--paragraph-secondary)'>
                        {t("revenueCard.description")}
                      </p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div className='bg-[#59624d] p-4 rounded-full w-fit'>
                        <img src="/about/Plus-waves.svg" alt="plus-icon" className='w-5 h-5' />
                      </div>
                      <div>
                        <h4 className='font-semibold'>
                          {t("revenueCard.strategyTitle")}
                        </h4>
                        <span className='text-(--paragraph-secondary)'>
                          {t("revenueCard.milestones")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

            </FeatureCard>

            <FeatureCard>
              <div data-animate="fade-up" className='relative'>
                <div className='relative aspect-square md:aspect-[1/1.8] rounded-2xl overflow-hidden'>
                  <Image
                    src={"/about/feature-image-2.webp"}
                    fill
                    alt='fature-image'
                    className='object-cover md:object-center object-top'
                    data-animate-child="child-scale-image"
                  />

                </div>
              </div>
            </FeatureCard>

            <div className='md:col-span-2 lg:col-span-1 h-full'>
              <FeatureCard>
                <div data-animate="fade-up" className='flex h-full flex-col gap-8 md:justify-between'>

                  <div data-animate-child = "child-fade-up" className='p-8 rounded-2xl flex flex-col gap-6 bg-(--bg-secondry)'>
                    <div className='flex justify-between items-center'>
                      <ClientAvatars happyClients={happyClients} />
                      <h3 className='text-[18px]! '>
                        {t("growthStats.quarterlyGrowth")}
                      </h3>
                    </div>

                    <div className='flex items-center gap-4'>
                      <div className='p-3 rounded-md bg-(--bg-cards)'>
                        <img src="/about/About-sture.svg" alt="star" loading='lazy' />
                      </div>
                      <p className='font-semibold'>
                        {t("growthStats.rating")}
                      </p>
                    </div>

                  </div>

                  <div className='flex items-center justify-center gap-4 bg-(--bg-cards) p-4 text-(--heading-primary) rounded-full'>
                    <div>
                      <img src="/about/About-sture.svg" alt="star" loading='lazy' />
                    </div>

                    <p className='text-[20px] font-semibold'>
                      {t("growthStats.projects")}
                    </p>

                  </div>

                  <div className=''>
                    <ServicesSection>
                      {services.map((item, index) => (
                        <div key={index} className={`about-list overflow-hidden `}>
                          <div data-animate-child="child-fade-up"
                            className={`relative cursor-pointer group flex justify-between items-cente w-full ${index === 0 ? "pb-4 md:pb-7" : "py-4 md:py-7"} border-b border-gray-400`}
                          >
                            <div className="flex text-xl items-center gap-2 font-semibold">
                              <span>0{index + 1}.</span>
                              <p className='whitespace-nowrap text-[16px]'>{item}</p>
                            </div>

                            <ArrowUpRight />
                            <div className='line w-0 absolute left-0 -bottom-px bg-black group-hover:w-full transition-all duration-500 h-px'></div>
                          </div>
                        </div>
                      ))}
                    </ServicesSection>
                  </div>

                </div>
              </FeatureCard>
            </div>
          </div>
        </Reveal>

      </div>

    </section>
  )
}

export default OurFeatures;
