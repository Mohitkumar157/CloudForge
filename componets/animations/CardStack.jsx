"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../app/lib/gsap";

function CardStack({ children }) {
  const cardStackRef = useRef(null);

  useGSAP(
    () => {
      const stack = cardStackRef.current;

      if (!stack) return;

      const cards = gsap.utils.toArray(".service-card", stack);

      if (!cards.length) return;

      const mm = gsap.matchMedia();

      // ==============================
      // DESKTOP
      // ==============================

      mm.add("(min-width: 768px)", () => {
        cards.forEach((card, index) => {
          gsap.set(card, {
            position: "sticky",
            top: `${20 + index * 15}vh`,
            zIndex: index + 1,
          });
        });

        cards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            scrub :5,
            start: "top 20%",
            end: "bottom 20%",
          });
        });
      });

      // ==============================
      // MOBILE
      // ==============================

      mm.add("(max-width: 767px)", () => {
        cards.forEach((card, index) => {
          gsap.set(card, {
            position: "sticky",
            top: `${12 + index * 10}vh`,
            zIndex: index + 1,
          });
        });

        cards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 12%",
            end: "bottom 12%",
          });
        });
      });

      

      return () => {
        mm.revert();
      };
    },
    {
      scope: cardStackRef,
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  return (
    <div ref={cardStackRef}>
      {children}
    </div>
  );
}

export default CardStack;