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

                const childrens = card.querySelectorAll("[data-animate-child]");
                console.log("CHILDREN", childrens);

                const childTl = gsap.timeline({ paused: true });

                childrens.forEach((child) => {
                    const childConfig = animations[child.dataset.animateChild];

                    if (!childConfig) return;

                    childTl.from(child, {
                        ...childConfig.from,
                        duration: childConfig.duration ?? 1,
                        ease: "power4.out",
                    },
                        0
                    );
                });



                gsap.from(card, {
                    ...config.from,
                    duration: config.duration ?? 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: config.mobileStart ?? "top 80%",
                        invalidateOnRefresh: true,
                        toggleActions: "play none none none",
                        invalidateOnRefresh: true,
                        onEnter: () => {
                            childTl.play();
                            const odometers = card.querySelectorAll("[data-odometer]");
                            odometers.forEach((odometer) => {
                                odometer.dispatchEvent(
                                    new CustomEvent("odometer-start")
                                );
                            });
                        },
                    },
                });
            });


        });


        //  Desktop animation

        mm.add("(min-width: 768px)", () => {
            const cards = wrapperRef.current.querySelectorAll("[data-animate]");



            cards.forEach((card) => {
                const config = animations[card.dataset.animate]
                if (!config) return;



                const childrens = card.querySelectorAll("[data-animate-child]");
                console.log("CHILDREN", childrens);

                const childTl = gsap.timeline({ paused: true });

                childrens.forEach((child) => {
                    const childConfig = animations[child.dataset.animateChild];

                    if (!childConfig) return;

                    childTl.from(child, {
                        ...childConfig.from,
                        duration: childConfig.duration ?? 1,
                        ease: "power4.out",
                    },
                        0
                    );
                });



                gsap.from(card, {
                    ...config.from,
                    duration: config.duration ?? 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: config.desktopStart ?? "top 75%",
                        invalidateOnRefresh: true,
                        onEnter: () => {
                            childTl.play();
                            const odometers = card.querySelectorAll("[data-odometer]");
                            odometers.forEach((odometer) => {
                                odometer.dispatchEvent(
                                    new CustomEvent("odometer-start")
                                );
                            });
                        },
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
        <section ref={wrapperRef} className='w-full'>
            {children}
        </section>
    )
}

export default Reveal;







