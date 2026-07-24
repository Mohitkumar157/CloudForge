import React from 'react'
import FeatureCard from './ourFeatures/FeatureCard'
import SubHeading from '../ui/SubHeading'
import Image from 'next/image'
import PrimaryButton from '../ui/PrimaryButton'
import ClientAvatars from '../ui/ClientAvatars'
import ServicesSection from '../ui/ServicesSection'
import ServiceItem from '../ui/ServiceItem'

const happyClients = [
  "/happy-client1.webp",
  "/happy-client2.webp",
  "/about/author-green.png"
]

const services = [
  {
    number: "01",
    title: "Residential design solutions",
  },
  {
    number: "02",
    title: "Project management services",
  },
  {
    number: "03",
    title: "Structural design experts",
  },
];
function OurFeatures() {

  return (
    <section className='py-26'>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard>

            <div className='flex flex-col gap-4 justify-between h-full'>
              <SubHeading headingText={"our features"} />
              <h2 className='leading-11 font-semibold'>We are strategic partners delivering innovation growth</h2>

              <div className="flex items-center gap-5 font-semibold">
                <div>
                  [Market analysis]
                </div>
                <div>
                  [Growth strategy]
                </div>
              </div>
              <div className='relative aspect-5/3 rounded-xl overflow-hidden'>
                <Image
                  src={"/about/features-image-1.webp"}
                  alt='features image'
                  fill
                  className='object-cover object-center'
                />
              </div>

              <div className='p-6 bg-[#f8f8f8] rounded-xl flex flex-col gap-6' >
                <div>
                  <h3 className='font-semibold'>Scale your revenue</h3>
                  <p className='pt-4 font-semibold text-(--paragraph-secondary)'>Whether it's a merger or a lean pivot,and scaling has never been this quick.</p>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#59624d] p-4 rounded-full w-fit'>
                    <img src="/about/Plus-waves.svg" alt="plus-icon" className='w-5 h-5' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>We delivered 6 growth strategies</h4>
                    <span className='text-(--paragraph-secondary)'>18 milestones achieved</span>
                  </div>
                </div>
              </div>
            </div>

          </FeatureCard>

          <FeatureCard>
            <div className='relative'>
              <div className='relative aspect-[1/1.8] rounded-2xl overflow-hidden'>
                <Image
                  src={"/about/feature-image-2.webp"}
                  fill
                  alt='fature-image'
                  className='object-cover object-center w-full h-full'
                />

              </div>

              {/* <div className='bg-(--bg-primary) p-4 rounded-2xl overflow-hidden'>
                <div className='p-4 bg-[#c6bdab] rounded-2xl overflow-hidden'>
                  <PrimaryButton
                    ctaText={"let's talk"}
                    className=" pointer-events-auto group-hover:bg-[#20324f] 
                                       bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
                    btnTextClass={"text-[#212121] text-[12px]! captalize group-hover:text-[#f1f1f1] transition-all duration-300"}
                    circelClass={"bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"}
                  />
                  <p className='text-[14px] font-semibold'>Consulting that creates lasting advantage</p>
                </div>
              </div> */}
            </div>
          </FeatureCard>

          <FeatureCard>
            <div className='flex flex-col gap-8'>

              <div className='p-8 rounded-2xl flex flex-col gap-6 bg-(--bg-secondry)'>
                <div className='flex justify-between items-center'>
                  <ClientAvatars happyClients={happyClients} />
                  <h3 className='text-[18px]! '>+24% quarterly growth avg</h3>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='p-3 rounded-md bg-(--bg-cards)'>
                    <img src="/about/About-sture.svg" alt="star" loading='lazy' />
                  </div>
                  <p className='font-semibold'>Rated 4.9/5 from over 600 review</p>
                </div>

              </div>

              <div className='flex items-center justify-center gap-4 bg-(--bg-cards) p-4 text-(--heading-primary) rounded-full'>
                <div><img src="/about/About-sture.svg" alt="star" loading='lazy' /></div>
                <p className='text-[20px] font-semibold'>1300 Projects completed</p>
              </div>

              <div className='mt-12'>
                <ServicesSection>
                {services.map((item) => (
                  <ServiceItem
                    item={item.title}
                    index={item.number}
                    key={item.number}
                  />
                ))}
              </ServicesSection>
              </div>

            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

export default OurFeatures;
