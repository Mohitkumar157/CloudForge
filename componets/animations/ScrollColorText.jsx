// components/ScrollColorText.jsx
'use client';

import { useRef } from 'react';
import {gsap , useGSAP , ScrollTrigger} from "../../app/lib/gsap";


export default function ScrollColorLetters({ 
  text = '', 
  className = '',
  startColor = '#bfbfbf',
  endColor = '#212121',
  startTrigger = 'top 80%',
  endTrigger = 'bottom 80%',
  scrubValue = 1,
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const letters = containerRef.current.querySelectorAll('.letter');

    gsap.fromTo(
      letters,
      {
        color: startColor,
      },
      {
        color: endColor,
        stagger: {
          amount: 6, 
          from: 'start', 
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: startTrigger,
          end: endTrigger,
          scrub: scrubValue,
         
        },
      }
    );
  }, {scope : containerRef});

 
  const letters = text.split('');

  return (
    <div ref={containerRef} className={className}>
      {letters.map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
    </div>
  );
}