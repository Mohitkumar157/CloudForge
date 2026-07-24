"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger , useGSAP);

const slideImages = [
    {
        id: 1,
        image: "/hero-1.webp",
    },
    {
        id: 2,
        image: "/hero-2.avif",
    },
    {
        id: 3,
        image: "/her-3.avif",
    },
]

function HeroSlides({ children }) {
    const slideRef = useRef([]);
    const heroRef = useRef(null);
    const circelRef = useRef(null);
    const xTo = useRef(null);
    const yTo = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=1800",
                scrub: 1,
                pin: true,
                pinSpacing: true
            }
        })

        tl.to(slideRef.current[0], {
            clipPath: "inset(0 0 100% 0)",
        })
        tl.to(slideRef.current[1], {
            clipPath: "inset(0 0 100% 0)",
        })
        gsap.set(circelRef.current, {
            xPercent: -50,
            yPercent: -50
        })
        xTo.current = gsap.quickTo(circelRef.current, "x", {
            duration: 0.5,
        });

        yTo.current = gsap.quickTo(circelRef.current, "y", {
            duration: 0.5,
        });

        return (()=>{
            tl.kill();
        })

    }, {scope : heroRef})
    function mouseMove(e) {
        xTo.current(e.clientX);
        yTo.current(e.clientY);
    };

    return (
        <div ref={heroRef} className='relative w-full h-screen overflow-hidden'>

            {slideImages.map((slide, index) =>
                <div
                    key={index}
                    style={{ zIndex: slideImages.length - index, }}
                    className={`w-full h-screen absolute inset-0`}

                    ref={(el) => slideRef.current[index] = el}
                >
                    <img
                        src={slide.image}
                        alt='business'
                        className=' w-full h-full object-cover object-center'
                    />

                </div>)}
            {children}
            <div onMouseMove={mouseMove} className="hero-overlay cursor-pointer z-40 absolute inset-0">
                <div style={{
                    background: "#f1f1f1",
                    filter: "blur(250px)",
                }} ref={circelRef} className='circel w-75 h-75  rounded-full absolute'></div>
            </div>
            <h2
                className='absolute -bottom-31 left-15
                 text-[#f1f1f1] font-semibold 
                 text-[220px]! z-40'>
                Resilience
            </h2>
        </div>
    )
}

export default HeroSlides
