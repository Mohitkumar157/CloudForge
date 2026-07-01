"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

function HeroSlides({children}) {
    const slideRef = useRef([]);
    const heroRef = useRef(null);
    useEffect(() => {
        const tl = gsap.timeline({
             
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=5000",
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


    }, [])
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
                    <div className="hero-overlay absolute inset-0"></div>
                </div>)}
                {children}
           
        </div>
    )
}

export default HeroSlides
