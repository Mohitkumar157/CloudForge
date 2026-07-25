"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardImages = [
    "/card1.webp",
    "/card2.webp",
    "/card3.webp",
    "/card4.webp",
    "/card5.webp"
]

function CardScrollSlider() {
    const cardRef = useRef([]);
    const sectionRef = useRef(null);
    useEffect(() => {
  cardRef.current.forEach((card, index) => {
    gsap.set(card, {
      x: -index * 250, // initial stack
      zIndex: cardImages.length - index,
    });
  });
  gsap.to(cardRef.current, {
    x: 0,
    ease: "none",
    duration : .3,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 99%",
      end: "+=400",
      scrub: 1,
    },
  });
}, []);
    return (
        <div ref={sectionRef} className="slide-section">
            <div className="flex justify-between flex-wrap md:flex-nowrap items-center gap-4">
                {cardImages.map((image, index) =>
                    <div
                        className="relative w-full md:w-[20%] h-60 rounded-xl overflow-hidden"
                        key={index}
                        ref={(el) => (cardRef.current[index] = el)}
                    >
                        <Image
                            src={image}
                            alt="card-image"
                            fill
                            className="object-cover object-top"
                        />
                    </div>)}
            </div>
        </div>
    )
}

export default CardScrollSlider;
