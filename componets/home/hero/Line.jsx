"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Line() {
    const lineRef = useRef(null);
    useEffect(() => {
        gsap.to(lineRef.current , {
            y : "250%",
            scrollTrigger : {
                trigger:"body",
                start  :"top 0%",
                end : "+=2200",
                scrub : 1,
            }
        })
    }, [])
  return (
    <div ref={lineRef} className='line w-px h-[28%] absolute -left-3 top-0.5 bg-[#f1f1f1]'></div>
  )
}

export default Line
