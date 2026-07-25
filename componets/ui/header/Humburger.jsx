"use client";
import Link from "next/link";
import { X } from 'lucide-react';
import { useState } from "react";
function Humburger() {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative  flex justify-between items-center px-2 py-4 bg-(--bg-primary)">
            <Link href={"/"} className="logo">
                <h2 className='uppercase text-2xl! font-semibold'>CloudForge</h2>
            </Link>

            <div 
            onClick={() => setOpen(true)}
            className={`humburger flex flex-col gap-2 p-3 bg-(--bg-theme) rounded-md overflow-hidden`}>
                <span className="inline-block w-7 h-0.5 bg-(--bg-primary) rounded-full"></span>
                <span className={`inline-block w-4 h-0.5 bg-(--bg-primary) rounded-full ${open ? "w-7" : "w-4"} transition-all duration-200`}></span>
                <span className="inline-block w-7 h-0.5 bg-(--bg-primary) rounded-full"></span>
            </div>

            <nav aria-label="Mobile navigation" className={`flex justify-end absolute top-0 z-50 w-full h-screen ${open ? "left-0 backdrop-blur-[2px]" : "left-full"} transition-all duration-800`}>
                <div className="w-[70%] h-screen p-6 bg-(--bg-theme) text-(--text-primary)">
                    <div className="flex justify-between items-center mb-8">
                    <Link href={"/"} className="logo">
                        <h2 className='uppercase text-[18px]! text-[#f1f1f1]'>CloudForge</h2>
                    </Link>
                    <div onClick={() => setOpen(false)}>
                        <X className="w-9 h-9" strokeWidth={1.25}/>
                    </div>
                </div>
                <ul className="flex flex-col gap-6">

                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/about">About</Link>
                    </li>

                    <li>
                        <Link href="/service">Services</Link>
                    </li>

                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>

                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Humburger
