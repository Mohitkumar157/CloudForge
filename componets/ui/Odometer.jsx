"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Odometer = ({
  value = 0,
  suffix = "",
  prefix = "",
  duration = 4,
  loops = 2,
  className = "",
}) => {
  const containerRef = useRef(null);

  const digits = String(value).split("");

  useGSAP(
    () => {
      const container = containerRef.current;

      if (!container) return;

      const digitElements = gsap.utils.toArray(
        ".odometer-digit",
        container
      );

      // Sab digits ko starting position par rakho
      gsap.set(digitElements, {
        y: "0em",
      });

      const playOdometer = () => {
        digitElements.forEach((digit, index) => {
          const target = Number(digits[index]);

          // 0th, 2nd, 4th = UP
          // 1st, 3rd = DOWN
          const isUp = index % 2 === 0;

          const movement = isUp
            ? loops * 10 + target
            : loops * 10 + (9 - target);

          gsap.to(digit, {
            y: `-${movement}em`,
            duration: duration + index * 0.35,
            delay: index * 0.08,
            ease: "expo.out",
          });
        });
      };

      // Reveal se trigger hoga
      container.addEventListener(
        "odometer-start",
        playOdometer
      );

      return () => {
        container.removeEventListener(
          "odometer-start",
          playOdometer
        );
      };
    },
    {
      scope: containerRef,
  });

  return (
    <div
      ref={containerRef}
      data-odometer
      className={`inline-flex items-center overflow-hidden ${className}`}
    >
      {prefix && <span>{prefix}</span>}

      {digits.map((digit, index) => {
        const target = Number(digit);

        const isUp = index % 2 === 0;

        const movement = isUp
          ? loops * 10 + target
          : loops * 10 + (9 - target);

        const numbers = Array.from(
          { length: movement + 1 },
          (_, i) => {
            const normalDigit = i % 10;

            return isUp
              ? normalDigit
              : 9 - normalDigit;
          }
        );

        return (
          <div
            key={`${digit}-${index}`}
            className="h-[1em] overflow-hidden"
          >
            <div className="odometer-digit flex flex-col">
              {numbers.map((num, i) => (
                <span
                  key={i}
                  className="flex h-[1em] shrink-0 items-center justify-center"
                >
                  {num}
                </span>
              ))}
            </div>
          </div>
        );
      })}

      {suffix && <span>{suffix}</span>}
    </div>
  );
};

export default Odometer;