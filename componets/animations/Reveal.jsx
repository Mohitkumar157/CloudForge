"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../app/lib/gsap";
import animations from "./animations";

function Reveal({ children }) {
    const wrapperRef = useRef(null);

    useGSAP(
        () => {
            const wrapper = wrapperRef.current;

            if (!wrapper) return;

            const mm = gsap.matchMedia();

            const createAnimations = (isMobile) => {
                const cards = wrapper.querySelectorAll("[data-animate]");

                cards.forEach((card) => {
                    const animationName = card.dataset.animate;
                    const config = animations[animationName];

                    if (!config) return;

                    const children = card.querySelectorAll(
                        "[data-animate-child]"
                    );

                    const childTl = gsap.timeline({
                        paused: true,
                    });

                    children.forEach((child) => {
                        const childConfig =
                            animations[child.dataset.animateChild];

                        if (!childConfig) return;

                        childTl.from(
                            child,
                            {
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
                            start: isMobile
                                ? config.mobileStart ?? "top 80%"
                                : config.desktopStart ?? "top 75%",

                            toggleActions: "play none none none",

                            onEnter: () => {
                                childTl.play();

                                const odometers =
                                    card.querySelectorAll("[data-odometer]");

                                odometers.forEach((odometer) => {
                                    odometer.dispatchEvent(
                                        new CustomEvent("odometer-start")
                                    );
                                });
                            },
                        },
                    });
                });
            };

            // Mobile
            mm.add("(max-width: 767px)", () => {
                createAnimations(true);
            });

            // Desktop
            mm.add("(min-width: 768px)", () => {
                createAnimations(false);
            });

            return () => {
                mm.revert();
            };
        },
        {
            scope: wrapperRef,
        }
    );

    return (
        <section ref={wrapperRef} className="w-full">
            {children}
        </section>
    );
}

export default Reveal;