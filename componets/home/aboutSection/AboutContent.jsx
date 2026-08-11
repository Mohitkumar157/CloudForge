'use client';

import PrimaryButton from "@/componets/ui/PrimaryButton";
import SecondHeading from "@/componets/ui/SecondHeading";
import SubHeading from "@/componets/ui/SubHeading";
import { ArrowUpRight } from "lucide-react";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, ScrollTrigger, useGSAP } from "../../../app/lib/gsap";

function AboutContent() {
    const sectionRef = useRef();
    const subHeadingRef = useRef();
    const headingRef = useRef();
    const listRef = useRef();

    const t = useTranslations("HomePage.AboutCloudForgeSection");

    const services = t.raw("services");
    const tags = t.raw("tags");

    useGSAP(() => {
        const mm = gsap.matchMedia();

        const tags = sectionRef.current.querySelectorAll('[data-animate="tags"]');
        const lists = sectionRef.current.querySelectorAll('[data-animate="list"]');
        const button = sectionRef.current.querySelector('[data-animate="button"]');

        // -------------------- MOBILE --------------------
        mm.add("(max-width: 767px)", () => {

            gsap.fromTo(
                subHeadingRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: subHeadingRef.current,
                        start: "top 85%",
                        invalidateOnRefresh: true,
                    }
                }
            );

            gsap.fromTo(
                headingRef.current,
                { y: 120, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        invalidateOnRefresh: true,
                    }
                }
            );

            gsap.fromTo(
                tags,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: tags[0],
                        start: "top 90%",
                        invalidateOnRefresh: true,
                    }
                }
            );

            gsap.fromTo(
                button,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: button,
                        start: "top 90%",
                        invalidateOnRefresh: true,
                    }
                }
            );

            lists.forEach((item) => {
                gsap.fromTo(
                    item,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.10,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: listRef.current,
                            start: "top 60%",
                            invalidateOnRefresh: true,
                        }
                    }
                );
            });
        });

        // -------------------- DESKTOP --------------------
        mm.add("(min-width: 768px)", () => {

            const commonTrigger = {
                trigger: sectionRef.current,
                start: "top 55%",
                invalidateOnRefresh: true,
            };

            gsap.fromTo(
                subHeadingRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                    scrollTrigger: commonTrigger,
                }
            );

            gsap.fromTo(
                headingRef.current,
                { y: 120, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: commonTrigger,
                }
            );

            gsap.fromTo(
                tags,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power4.out",
                    scrollTrigger: commonTrigger,
                }
            );

            gsap.fromTo(
                button,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                    scrollTrigger: commonTrigger,
                }
            );

            lists.forEach((item) => {
                gsap.fromTo(
                    item,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: listRef.current,
                            start: "top 60%",
                            invalidateOnRefresh: true,
                        }
                    }
                );
            });
        });

        ScrollTrigger.refresh();

        return () => mm.revert();

    }, { scope: sectionRef });


    return (
        <div
            ref={sectionRef}
            className='right w-full flex flex-col justify-between'
        >

            <SubHeading
                ref={subHeadingRef}
                headingText={t("subHeading")}
            />

            <SecondHeading ref={headingRef}>
                {t("title1")}
                <br className="hidden lg:block" />
                {t("title2")}
            </SecondHeading>


            <div className='flex items-center gap-5 font-semibold overflow-y-hidden'>
                {tags.map((tag, index) => (
                    <div key={index} data-animate="tags">
                        [{tag}]
                    </div>
                ))}
            </div>


            <div className='md:py-10 lg:py-14 py-6 overflow-y-hidden'>
                <div className="overflow-y-hidden">
                    <div data-animate="button">
                        <PrimaryButton
                            ctaText={t("cta")}
                            className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
                            btnTextClass={"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
                            circelClass={"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
                        />
                    </div>
                </div>
            </div>


            <div ref={listRef}>
                {services.map((item, index) => (
                    <div
                        key={index}
                        className={`about-list overflow-hidden `}
                    >
                        <div
                            data-animate="list"
                            className={`relative cursor-pointer group flex justify-between items-cente w-full ${index === 0
                                    ? "pb-4 md:pb-7"
                                    : "py-4 md:py-7"
                                } border-b border-gray-400`}
                        >

                            <div className="flex text-xl items-center gap-2 font-semibold">
                                <span>0{index + 1}.</span>
                                <p>{item}</p>
                            </div>

                            <ArrowUpRight />

                            <div className='line w-0 absolute left-0 -bottom-px bg-black group-hover:w-full transition-all duration-500 h-px'></div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AboutContent;