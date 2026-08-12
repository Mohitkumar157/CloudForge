"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardImages = [
  "/card1.webp",
  "/card2.webp",
  "/card3.webp",
  "/card4.webp",
  "/card5.webp",
];

// Mobile ke liye simple auto-scroll slider
function MobileCardSlider() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-4 w-max animate-marquee mt-4 md:mt-0">
        {[...cardImages, ...cardImages].map((image, index) => (
          <div
            key={index}
            className="relative w-40 h-60 rounded-lg overflow-hidden shrink-0"
          >
            <Image
              src={image}
              alt="card-image"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Desktop ke liye tumhara GSAP scroll-stack wala section
function DesktopCardScroll() {
  const cardRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    cardRef.current.forEach((card, index) => {
      gsap.set(card, {
        x: -index * 250,
        zIndex: cardImages.length - index,
      });
    });

    const anim = gsap.to(cardRef.current, {
      x: 0,
      ease: "none",
      duration: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "+=400",
        scrub: 1,
      },
    });

    // Cleanup - warna component unmount hone par ScrollTrigger memory leak karega
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="slide-section">
      <div className="flex justify-between items-center gap-4">
        {cardImages.map((image, index) => (
          <div
            className="relative w-[20%] h-60 rounded-xl overflow-hidden"
            key={index}
            ref={(el) => (cardRef.current[index] = el)}
          >
            <Image
              src={image}
              alt="card-image"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CardScrollSlider() {
  // null = abhi decide nahi hua, taaki server aur client render mismatch na ho
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);

    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  if (isMobile === null) return null; // ya yahan chaho to ek skeleton/loader daal do

  return isMobile ? <MobileCardSlider /> : <DesktopCardScroll />;
}

export default CardScrollSlider;