'use client';
import React from 'react'
import { gsap, ScrollTrigger, useGSAP } from "../../app/lib/gsap";
import { useRef } from 'react';
function ClientAvatars({
    happyClients,
    animationStart = "top 0%",
    animationOn = "load"
}) {
    const sectionRef = useRef();
    useGSAP(() => {

        const animation = {
            x: -250,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power4.out"
        }

        if (animationOn === "load") {
            gsap.from('[data-animate="icon"]', animation)
        }
        if (animationOn === "scroll") {
            gsap.from('[data-animate="icon"]', {
                ...animation,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: animationStart,
                }
            })
        }
     
     


    }, { scope: sectionRef })
    return (
        <div ref={sectionRef} className='happy-client overflow-hidden flex items-center justify-start' >
            {
                happyClients?.map((clientPhoto, index) =>
                    <img
                        src={clientPhoto}
                        alt="happy-client-image"
                        width={50}
                        height={50}
                        key={index}
                        className={`max-w-12.5 h-auto relative top-0`}
                        style={{
                            left: `${index * -12}px`,
                        }}
                        data-animate="icon"
                    />
                )
            }
        </div >
    )
}

export default ClientAvatars;
