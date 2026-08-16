import React from 'react'
import dynamic from 'next/dynamic';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
const FooterHeader = dynamic(()=> import('./FooterHeader'));
const Reveal = dynamic(()=> import('@/componets/animations/Reveal'));
import { useTranslations } from "next-intl";
function Footer() {
    const t = useTranslations("Footer");
  return (
    <footer className="footer bg-[url('/footer-bg.avif')] py-16 bg-cover bg-center mt-16 md:mt-25">
      <div className="container">
        <FooterHeader />
      </div>
      <div className='w-full h-px bg-[#ccc]'></div>
      <div className="container py-14!">
        <Reveal>
          <div data-animate="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-16 overflow-hidden">
            <div data-animate-child="child-fade-up" className='flex flex-col gap-8 md:gap-18'>
              <h3 className='text-[#f1f1f1] text-[40px] mt-4 md:mt-0 leading-12'>
                {t("newsletter.title1")}
                <br /> 
               {t("newsletter.title2")}
                </h3>
              <form
                className='flex flex-col gap-9'
              >
                <input
                  type="text"
                  placeholder={t("newsletter.namePlaceholder")}
                  name='userName'
                  className='border-b border-white text-[18px] outline-0 pb-4 w-full text-white'
                />
                <div className='flex pb-4 items-center border-b border-white '>
                  <input
                    type="email"
                     placeholder={t("newsletter.emailPlaceholder")}
                    name='email'
                    className='text-[18px] outline-0 w-full text-white'
                  />
                  <button
                    type="submit"
                     aria-label={t("newsletter.subscribe")}
                    className='group w-12 h-11 relative flex justify-center items-center overflow-hidden cursor-pointer rounded-full bg-[#f1f1f1]'>

                    <ArrowUpRight
                      className='w-5 h-5 text-[#303030] absolute group-hover:translate-x-2 group-hover:scale-0 group-hover:-translate-y-3 duration-700' />

                    <ArrowUpRight
                      className='w-5 h-5 absolute text-[#303030] -translate-x-3 translate-y-7 scale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 duration-700'
                    />
                  </button>
                </div>
              </form>
            </div>

            <div className='important-links text-[#f1f1f1] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>

              <div data-animate-child="child-fade-up" className='flex flex-col gap-5'>
                <h2 className='text-[#f1f1f1] text-[20px]!'>
                  {t("quickLinks.title")}
                </h2>
                <ul className='list-none'>
                  <li className="mb-2 relative pb-1 cursor-pointer group overflow-hidden w-fit">
                    <Link href="/"> {t("quickLinks.home")} </Link>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </li>

                  <li className="mb-2 relative pb-1 cursor-pointer group overflow-hidden w-fit">
                   <Link href="/about"> {t("quickLinks.about")} </Link>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </li>

                  <li className="mb-2 relative pb-1 cursor-pointer group overflow-hidden w-fit">
                    <Link href="/service"> {t("quickLinks.services")} </Link>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </li>

                  <li className="mb-2 relative pb-1 cursor-pointer group overflow-hidden w-fit">
                    <Link href="/blog"> {t("quickLinks.blog")} </Link>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </li>

                  <li className="mb-2 relative pb-1 cursor-pointer group overflow-hidden w-fit">
                   <Link href="/contact"> {t("quickLinks.contact")} </Link>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </li>
                </ul>
              </div>


              <div data-animate-child="child-fade-up" className='flex flex-col gap-5'>
                <h2 className='text-[#f1f1f1] text-[20px]!'>
                  {t("otherLinks.title")}
                </h2>
                
                <ul className='list-none'>
                  <li className='mb-2 relative pb-1 cursor-pointer group w-fit overflow-hidden'>
                   {t("otherLinks.passwordProtected")}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </li>

                  <li className='mb-2 relative pb-1 cursor-pointer group w-fit overflow-hidden'>
                  {t("otherLinks.license")}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </li>

                  <li className='mb-2 relative pb-1 cursor-pointer group w-fit overflow-hidden'>
                   {t("otherLinks.notFound")}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                  </li>
                </ul>
              </div>

              <div data-animate-child="child-fade-up" className='flex flex-col gap-5'>
                <div className='flex flex-col gap-5'>
                  <h2 className='text-[#f1f1f1] text-[20px]!'>
                    {t("address.title")}
                    </h2>
                  <ul className='list-none'>
                    <li className='mb-2 relative pb-1 cursor-pointer group w-fit overflow-hidden'>
                      {t("address.line1")}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className='mb-2 relative pb-1 cursor-pointer group w-fit overflow-hidden'>
                     {t("address.line2")}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                    </li>
                  </ul>
                </div>

                <div className='flex flex-col gap-5'>
                  <h2 className='text-[#f1f1f1] text-[20px]!'>
                  {t("contact.title")}
                    </h2>
                  <ul className='list-none'>
                    <li className='mb-2 relative pb-1 cursor-pointer group w-fit overflow-hidden'>
                      {t("contact.phone")}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className='mb-2 relative pb-1 cursor-pointer group w-fit overflow-hidden'>
                     {t("contact.email")}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

export default Footer;
