'use client';
import React, { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from "../../app/lib/gsap";


import animations from './animations';


function Reveal({ children }) {
    const wrapperRef = useRef();
    useGSAP(() => {

        const mm = gsap.matchMedia();


        // Mobile Animation
        mm.add("(max-width: 767px)", () => {

            const cards = wrapperRef.current.querySelectorAll("[data-animate]");
            
            cards.forEach((card) => {

                const config = animations[card.dataset.animate]
                if (!config) return;
                gsap.from(card, {
                    ...config.from,
                    duration: config.duration ?? 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: config.mobileStart ?? "top 70%",
                        invalidateOnRefresh: true,
                        toggleActions: "play none none none",
                    },
                });
            });


        });


        //  Desktop animation

        mm.add("(min-width: 768px)", () => {
            const cards = wrapperRef.current.querySelectorAll("[data-animate]");
            console.log("Cards",cards);
            
           
            cards.forEach((card) => {
                const config = animations[card.dataset.animate]
                if (!config) return;
                gsap.from(card, {
                    ...config.from,
                    duration: config.duration ?? 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: config.desktopStart ?? "top 75%",
                        invalidateOnRefresh: true,
                    },

                })
            })
        });


        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });

        return () => mm.revert();


    }, { scope: wrapperRef })
    return (
        <section ref={wrapperRef}>
            {children}
        </section>
    )
}

export default Reveal
