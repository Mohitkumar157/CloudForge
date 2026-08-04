'use client';
import React, { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from "../../app/lib/gsap";

function Reveal({ children }) {
    const wrapperRef = useRef();

    useGSAP(() => {


        const mm = gsap.matchMedia();

        // Mobile Animation
        mm.add("(max-width: 767px)", () => {

            const cards = gsap.utils.toArray('[data-animate="scale-in"]');

            cards.forEach((card) => {
                gsap.from(card, {
                    scale: 0.25,
                    y : 80,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                });
            });


        });





        //  Desktop animation

        mm.add("(min-width: 768px)", () => {
             const cards = gsap.utils.toArray('[data-animate="scale-in"]');
             cards.forEach((card)=>{
                gsap.from(card, {
                scale: 0.25,
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 70%",
                   
                },

            })
             })



           

        });





    }, { scope: wrapperRef.current })
    return (
        <section ref={wrapperRef}>
            {children}
        </section>
    )
}

export default Reveal
