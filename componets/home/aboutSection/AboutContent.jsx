'use client';

import PrimaryButton from "@/componets/ui/PrimaryButton";
import SecondHeading from "@/componets/ui/SecondHeading";
import SubHeading from "@/componets/ui/SubHeading";
import { ArrowUpRight } from "lucide-react";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../../app/lib/gsap";
const services = [
    "Market expansion strategy",
    "Project management services",
    "Structural design experts",
];


function AboutContent() {
    const sectionRef = useRef();
    const subHeadingRef = useRef();
    const headingRef = useRef();
    console.log("REFS", subHeadingRef.current, headingRef.current);

    useGSAP(() => {


        const mm = gsap.matchMedia();
            // Mobile Animation
        mm.add("(max-width: 767px)", () => {
            const scroller = {
                start: "top 60%",
                trigger: sectionRef.current,
                
            }
            gsap.from(subHeadingRef.current, {
                y: 100,
                duration: .9,
                ease: "power4.out",
                scrollTrigger: scroller
            })
            gsap.from(headingRef.current, {
                y: 100,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: scroller
            })
            gsap.from('[data-animate="tags"]', {
                y: 100,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: scroller
            })
            gsap.from('[data-animate="button"]', {
                y: 100,
                duration: .9,
                ease: "power4.out",
                scrollTrigger: {
                    start: "top 30%",
                    trigger: sectionRef.current,
                }
            })
             gsap.from('[data-animate="list"]', {
                y: 100,
                opacity: 0,
                duration: 0.9,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    start: "top 10%",
                    trigger: sectionRef.current,
                }
            });


        });





        //  Desktop animation

        mm.add("(min-width: 768px)", () => {

            const scroller = {
                start: "top 50%",
                trigger: sectionRef.current,
            }

            gsap.from(subHeadingRef.current, {
                y: 100,
                duration: .9,
                ease: "power4.out",
                scrollTrigger: scroller
            })



            gsap.from(headingRef.current, {
                y: 150,
                duration: .9,
                ease: "power4.out",
                scrollTrigger: scroller
            })
            gsap.from('[data-animate="tags"]', {
                y: 100,
                duration: .9,
                ease: "power4.out",
                scrollTrigger: scroller
            }),
                gsap.from('[data-animate="button"]', {
                    y: 100,
                    duration: .9,
                    ease: "power4.out",
                    scrollTrigger: {
                        start: "top 40%",
                        trigger: sectionRef.current
                    }
                })
            gsap.from('[data-animate="list"]', {
                y: 100,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    start: "top 10%",
                    trigger: sectionRef.current,
                }
            });
        });

    }, { scope: sectionRef.current });



    return (
        <div ref={sectionRef} className='right w-full flex flex-col justify-between'>
            <SubHeading
                ref={subHeadingRef}
                headingText={"about CloudForge"}
            />

            <SecondHeading ref={headingRef}>
                We are strategic partners <br className='hidden lg:block' /> delivering innovation growth
            </SecondHeading>


            <div className='flex items-center gap-5 font-semibold overflow-y-hidden'>
                <div data-animate="tags">[Market analysis]</div>
                <div data-animate="tags">[Growth strategy]</div>
            </div>
            <div className='md:py-16 py-6 overflow-y-hidden'>
                <div className="overflow-y-hidden">
                    <div data-animate="button">
                        <PrimaryButton
                            ctaText={"Get a quote"}
                            className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
                            btnTextClass={"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
                            circelClass={"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
                        />
                    </div>
                </div>
            </div>

            <div className="">
                {services.map((item, index) => (
                    <div key={index} className="overflow-y-hidden">
                        <div data-animate="list"
                            className={`relative cursor-pointer group flex justify-between items-cente w-full ${index === 0 ? "pb-5 md:pb-7" : "py-5 md:py-7"} border-b border-gray-400`}
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

export default AboutContent
