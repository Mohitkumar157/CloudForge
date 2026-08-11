"use client";
import Link from 'next/link';

import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import PrimaryButton from '../PrimaryButton';
import Humburger from './Humburger';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslations } from "next-intl";
function Header() {
   const t = useTranslations("Header"); 
    
    const [scrollHeight, setScrollHeight] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0)
    useEffect(() => {
        setScreenHeight((window.innerHeight * 2) + 200);
        function handlerScroll() {
            setScrollHeight(window.scrollY);
        }
        window.addEventListener("scroll", handlerScroll);
        return () => {
            window.removeEventListener("scroll", handlerScroll);
        }
    }, [])

    return (
        <>
            <header className={` ${scrollHeight > screenHeight ? "bg-[#20324f] border-b-[0.2px] border-(--border-bottom)" : "bg-transparent border-b-[0.2px] border-(--border-bottom)"} transition-colors duration-500 z-1000 backdrop-blur-[3px] fixed top-0 left-0 w-full py-3.5 hidden md:block`}>
               
                    <div className="container flex justify-between items-center">
                        <Link href={"/"} className="logo">
                            <h2 className='uppercase text-[40px]! text-[#f1f1f1]'>CloudForge</h2>
                        </Link>
                        <Nav />
                        <div className="ctc flex items-center gap-4">

                            <LanguageSwitcher />
                            
                            <PrimaryButton
                                ctaText={t("getQuote")}
                                className="group-hover:bg-[#20324f] 
                        bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
                                btnTextClass={"text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"}
                                circelClass={"bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"}
                            />
                        </div>
                    </div>
                

            </header>
            <div className='block md:hidden'><Humburger /></div>
        </>
    )
}

export default Header;
