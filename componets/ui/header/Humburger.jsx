"use client";
import Link from "next/link";
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import LanguageSwitcher from "../LanguageSwitcher";
gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

function Humburger() {
    const [open, setOpen] = useState(false);
    const navRef = useRef([]);
    let tl = gsap.timeline();
    useEffect(() => {

        if (open) {
            tl.from(navRef.current, {
                y: -100,
                stagger: 0.08,
                duration: .7,
                ease: "expo.out",
            });
        }
        else {
            tl.reverse();
        }
    }, [open])



    return (
        <div className="relative flex justify-between items-center px-2 py-4 bg-(--bg-primary)">
            <Link href={"/"} className="logo">
                <h2 className='uppercase text-2xl! font-semibold'>CloudForge</h2>
            </Link>

            <div
                onClick={() => setOpen(true)}
                className="humburger flex flex-col gap-2 p-3 bg-(--bg-theme) rounded-md overflow-hidden"
            >
                <span className="inline-block w-7 h-0.5 bg-(--bg-primary) rounded-full"></span>
                <span className={`inline-block h-0.5 bg-(--bg-primary) rounded-full ${open ? "w-7" : "w-4"} transition-all duration-200`}></span>
                <span className="inline-block w-7 h-0.5 bg-(--bg-primary) rounded-full"></span>
            </div>

            <nav
                onClick={() => setOpen(false)}
                aria-label="Mobile navigation"
                className={`fixed top-0 right-0 z-999 w-full h-screen flex justify-end
                ${open ? "translate-x-0 backdrop-blur-[2px]" : "translate-x-full"}
                transition-transform duration-500`}
            >
                <div className="w-[70%] h-screen p-6 bg-(--bg-theme) text-(--text-primary)">

                    <div className="flex justify-between items-center">
                        <Link href={"/"} className="logo">
                            <h2 className='font-semibold uppercase text-[18px]! text-[#f1f1f1]'>
                                CloudForge
                            </h2>
                        </Link>
                        <div onClick={() => setOpen(false)}>
                            <X className="w-9 h-9" strokeWidth={1.25} />
                        </div>
                    </div>
                    <div className="w-full h-[0.5px] bg-(--text-primary) my-5"></div>
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link, i) => (
                            <li

                                key={link.href}
                                className="font-semibold text-[18px] py-2 overflow-hidden"
                            >
                                <Link
                                    className="inline-block"
                                    href={link.href}
                                    ref={(el) => (navRef.current[i] = el)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                    </ul>
                       <div className="w-full h-[0.5px] bg-(--text-primary) my-5"></div>
                    <LanguageSwitcher />
                </div>
            </nav>
        </div>
    )
}

export default Humburger;