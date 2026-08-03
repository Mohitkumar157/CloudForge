"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger , useGSAP);



function AnimatedParagraph({ text, className = "" }) {
  const words = text.split("");
  const paraRef = useRef(null);
  const wordRef = useRef([]);
  useGSAP(() => {
   gsap.to(wordRef.current , {
    color : "black",
    duration : 0.02,
    stagger : 0.01,
    ease : "power2.in",
    scrollTrigger : {
      scroller : 'body',
      trigger : paraRef.current,
      start : 'top 80%',
      once : true
    }
   })
   
  }, {scope : paraRef.current})

  return (
    <p
      ref={paraRef}
      className={`${className} text-(--border-primary) leading-[1.40]`}>
      {words.map((word , i) => (
        <span 
        key={i}
        ref={(el) => (wordRef.current[i]) = el}
        >
          {word}
        </span>
      ))}
    </p>
  )
}

export default AnimatedParagraph
