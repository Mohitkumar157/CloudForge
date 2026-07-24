import dynamic from 'next/dynamic';

import Hero from '@/componets/home/hero/Hero';
const Marquee = dynamic(() => import("@/componets/ui/Marquee"))
const AboutKairo = dynamic(() => import("@/componets/home/AboutKairo"))
const ConsultingFirm = dynamic(() => import("@/componets/home/consultingFirm/ConsultingFirm"));
const OurFeatures = dynamic(() => import('@/componets/home/our-features/OurFeatures'));
const OurConsultingServices = dynamic(() => import("@/componets/home/consultingFirm/OurConsultingServices"))
const WhyUs = dynamic(() => import('@/componets/home/whyChoseUs/WhyUs'))
const OurBlog = dynamic(() => import("@/componets/home/blog/OurBlog"))





const imageArray = [
  {
    src: "/Solutions-image-1.webp",
    heading: "Market analysis"
  },
  {
    src: "/Solutions-image-2.webp",
    heading: "Process optimization"
  },
  {
    src: "/Solutions-image-3.webp",
    heading: "Risk management"
  },
  {
    src: "/Solutions-image-4.webp",
    heading: "Strategic planning"
  },
  {
    src: "/Solutions-image-5.webp",
    heading: "Growth strategy"
  },
  {
    src: "/Solutions-image-1.webp",
    heading: "Market analysis"
  },

  {
    src: "/Solutions-image-2.webp",
    heading: "Process optimization"
  },
  {
    src: "/Solutions-image-3.webp",
    heading: "Risk management"
  },
  {
    src: "/Solutions-image-4.webp",
    heading: "Strategic planning"
  },
  {
    src: "/Solutions-image-5.webp",
    heading: "Growth strategy"
  },
]



function HomePage() {
  return (
    <>
      <Hero />
      <ConsultingFirm />
      <AboutKairo />
      <WhyUs />
      <OurFeatures />
      <Marquee imageArray={imageArray} />
      <OurConsultingServices />
      <OurBlog />
    </>
  )
}

export default HomePage;
