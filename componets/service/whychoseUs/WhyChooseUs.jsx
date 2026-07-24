import React from 'react'
import ConsultingCard from './ConsultingCard'
import Image from 'next/image'
import PrimaryButton from '@/componets/ui/PrimaryButton';
import ClientAvatars from '@/componets/ui/ClientAvatars';

const keyBenefits = [
  "Data driven strategies",
  "High impact advisory",
  "Operational excellence frameworks",
  "Process excellence management frameworks",
];
const happyClients = [
  "/happy-client1.webp",
  "/happy-client2.webp",
  "/happy-client3.webp",
  "/happy-client4.webp",
];
const businessMetrics = [
  {
    id: 1,
    title: "Strategic solutions",
    icon: "/service/icon-strategic.svg",
  },
  {
    id: 2,
    title: "Creates impact",
    icon: "/service/icon-creates.svg",
  },
  {
    id: 3,
    title: "Drives growth",
    icon: "/service/icon-drives.svg",
  },
  {
    id: 4,
    title: "Data driven",
    icon: "/service/icon-data.svg",
  },
];

function WhyChooseUs() {
  return (
    <section className='bg-(--bg-section) py-16'>
      <div className="container">
        <h2 className='text-center leading-12 font-semibold mb-12'>Why leading companies choose <br /> our consulting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ConsultingCard>
            <div className='relative aspect-[1.2/1.7] rounded-lg overflow-hidden h-full'>
              <Image
                src={"/service/consulting-image.webp"}
                alt='Consulting-image'
                fill
                className='object-cover object-center'
              />
            </div>
          </ConsultingCard>

          <ConsultingCard>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-4 bg-(--bg-primary) p-6 rounded-2xl overflow-hidden'>

                <div className='flex items-center gap-4 mb-12'>
                  <div className='p-3 rounded-md overflow-hidden bg-(--bg-icon)'>
                    <img
                      src="/service/Businesses-focus-success.svg"
                      alt="Businesses-focus-success"
                      loading='lazy'
                    />
                  </div>
                  <h3>Businesses focus success rate</h3>
                </div>
                <ul className='flex flex-col gap-8'>
                  {keyBenefits.slice(0, 2).map((item, index) =>
                    <li
                      key={index}
                      className='flex items-center gap-4'
                    >
                      <img src="/logo-tik.svg" alt="tick-icon" />
                      {item}
                    </li>
                  )
                  }
                </ul>

                <div className='flex items-center relative mt-12'>
                  <PrimaryButton
                    ctaText={"Get a quote"}
                    className="group-hover:bg-[#20324f] 
                        bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
                    btnTextClass={"text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"}
                    circelClass={"bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"}
                  />

                  <img
                    src={"/service/graph.webp"}
                    alt='graph-image'
                    className='object-cover object-center w-[50%] h-auto absolute bottom-0 right-0'
                  />
                </div>
              </div>

              <div className='bg-(--bg-primary) rounded-2xl overflow-hidden p-6'>
                <div className='flex items-center gap-4 mb-12'>
                  <ClientAvatars happyClients={happyClients} />
                  <h3 className='text-[16px]! font-semibold'>Trusted by 200+ businesses worldwide since</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {businessMetrics.map((item) =>
                    <div key={item.id} className='flex items-center gap-4'>
                      <img src={item.icon} alt={item.title} />
                      <span>{item.title}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ConsultingCard>

          <ConsultingCard>
            <div className='p-10  bg-(--bg-primary) overflow-hidden h-full'>
              <h3 className='font-semibold'>Discover your 90% efficiency potential</h3>
              <p className='mt-3 text-justify'>
                Build strategic marketing plans that
                strengthen brand visibility.
                Turn market insights
                into campaigns that drive
                engagement and sustainable growth.
              </p>
              <ul className='flex flex-col gap-8 my-10'>
                {keyBenefits.map((item, index) =>
                  <li
                    key={index}
                    className='flex items-center gap-4'
                  >
                    <img src="/logo-tik.svg" alt="tick-icon" />
                    {item}
                  </li>
                )
                }
              </ul>
              <PrimaryButton
                ctaText={"Get a quote"}
                className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
                btnTextClass={"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
                circelClass={"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
              />
            </div>
          </ConsultingCard>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
