import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import FooterHeader from './FooterHeader'
import Link from 'next/link';
function Footer() {
  return (
    <footer className="footer bg-[url('/footer-bg.avif')] py-16 bg-cover bg-center mt-25">
      <div className="container">
        <FooterHeader />
      </div>
      <div className='w-full h-px bg-[#ccc]'></div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className='flex flex-col gap-8 md:gap-18'>
            <h4 className='text-[#f1f1f1] text-[40px] mt-4 md:mt-0 leading-12'>Subscribe to our <br /> newsletter</h4>
            <form
              className='flex flex-col gap-9'
            >
              <input
                type="text"
                placeholder='Your name'
                name='userName'
                className='border-b border-white text-[18px] outline-0 pb-4 w-full text-white'
              />
              <div className='flex pb-4 items-center border-b border-white '>
                <input
                  type="email"
                  placeholder='Your email'
                  name='email'
                  className='text-[18px] outline-0 w-full text-white'
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
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

            <div className='flex flex-col gap-5'>
              <h2 className='text-[#f1f1f1] text-[20px]!'>Quick links</h2>
              <ul className='list-none'>
                <li className="mb-2">
                  <Link href="/">Home</Link>
                </li>

                <li className="mb-2">
                  <Link href="/about">About</Link>
                </li>

                <li className="mb-2">
                  <Link href="/pricing">Services</Link>
                </li>

                <li className="mb-2">
                  <Link href="/blog">Blog</Link>
                </li>

                <li className="mb-2">
                  <Link href="/contact">Contact</Link>
                </li>

              </ul>
            </div>


            <div className='flex flex-col gap-5'>
              <h2 className='text-[#f1f1f1] text-[20px]!'>Quick links</h2>
              <ul className='list-none'>
                <li className='mb-2'>Password protected</li>
                <li className='mb-2'>License</li>
                <li className='mb-2'>404</li>


              </ul>
            </div>

            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-5'>
                <h2 className='text-[#f1f1f1] text-[20px]!'>Address</h2>
                <ul className='list-none'>
                  <li className='mb-2'>410 Sandtown,</li>
                  <li className='mb-2'>Noida 203207 , India</li>
                </ul>
              </div>

              <div className='flex flex-col gap-5'>
                <h2 className='text-[#f1f1f1] text-[20px]!'>Contact</h2>
                <ul className='list-none'>
                  <li className='mb-2'>(888) 456 7890</li>
                  <li className='mb-2'>info@example.com</li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
