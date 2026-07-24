"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import PrimaryButton from '../ui/PrimaryButton';

const DEFAULT_ITEMS = [
    {
        id: 1,
        tag: '[01] CASE SPOTLIGHT',
        title: 'Enterprise digital transformation, retail operational excellence',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
        buttonText: 'Discover more'
    },
    {
        id: 2,
        tag: '[02] CASE SPOTLIGHT',
        title: 'Boosting performance using very advanced analytics insights',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
        buttonText: 'Discover more'
    },
    {
        id: 3,
        tag: '[03] CASE SPOTLIGHT',
        title: 'Enterprise digital transformation, retail operational excellence',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
        buttonText: 'Discover more'
    },
    {
        id: 4,
        tag: '[04] CASE SPOTLIGHT',
        title: "Boosting performance using very advanced analytics insights",
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
        buttonText: 'Discover more'
    },
    {
        id: 5,
        tag: '[05] CASE SPOTLIGHT',
        title: 'Creating lasting value in communities worldwide',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
        buttonText: 'Discover more'
    }
];

export default function FlipperSlider({ items = DEFAULT_ITEMS, autoPlay = true, autoPlayInterval = 5000 }) {
    const [activeIndex, setActiveIndex] = useState(2); // Start with center item
    const timerRef = useRef(null);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [items.length]);

    const handleCardClick = (index) => {
        if (index === activeIndex) return;
        setActiveIndex(index);
    };

    useEffect(() => {
        if (!autoPlay) return;
        timerRef.current = setInterval(nextSlide, autoPlayInterval);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [autoPlay, autoPlayInterval, nextSlide]);

    const resetTimer = () => {
        if (!autoPlay) return;
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(nextSlide, autoPlayInterval);
    };

    const handlePrevClick = () => {
        prevSlide();
        resetTimer();
    };

    const handleNextClick = () => {
        nextSlide();
        resetTimer();
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
        resetTimer();
    };

    /**
     * Calculates the Coverflow dynamic styling based on relative index offset
     */
    const getCardStyle = (index) => {
        const total = items.length;
        let offset = index - activeIndex;

        if (offset < -Math.floor(total / 2)) {
            offset += total;
        } else if (offset > Math.floor(total / 2)) {
            offset -= total;
        }

        const absOffset = Math.abs(offset);

        if (absOffset > 2) {
            return {
                opacity: 0,
                transform: `translate3d(${offset > 0 ? 150 : -150}%, 0, -250px) rotateY(${offset > 0 ? -45 : 45}deg) scale(0.7)`,
                zIndex: 0,
                pointerEvents: 'none'
            };
        }

        let translateX = 0;
        let rotateY = 0;
        let translateZ = 0;
        let scale = 1;
        let zIndex = 10 - absOffset;
        let opacity = 1;

        if (offset === 0) {
            translateX = 0;
            rotateY = 0;
            translateZ = 100;
            scale = 1.05;
        } else if (offset === -1) {
            translateX = -75;
            rotateY = 22;
            translateZ = -50;
            scale = 0.9;
        } else if (offset === 1) {
            translateX = 75;
            rotateY = -22;
            translateZ = -50;
            scale = 0.9;
        } else if (offset === -2) {
            translateX = -135;
            rotateY = 38;
            translateZ = -150;
            scale = 0.78;
            opacity = 0.6;
        } else if (offset === 2) {
            translateX = 135;
            rotateY = -38;
            translateZ = -150;
            scale = 0.78;
            opacity = 0.6;
        }

        return {
            transform: `translate3d(calc(${translateX}% + ${offset * 15}px), 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
            zIndex,
            opacity,
        };
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-137 w-full py-16 px-5 overflow-hidden font-sans selection:bg-white/20">
            {/* Slider Perspective Container */}
            <div
                className="relative w-full  h-100 flex items-center justify-center"
                style={{ perspective: '1200px', perspectiveOrigin: 'center center' }}
            >
                {items.map((item, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={item.id}
                            className={`absolute w-[260px] h-[380px] cursor-pointer select-none transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group ${isActive ? 'pointer-events-auto' : ''
                                }`}
                            style={{
                                ...getCardStyle(index),
                                transformStyle: 'preserve-3d'
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            {/* Inner Card (Handles Flipping Rotation) */}
                            <div
                                className="relative w-full h-full rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: isActive ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                }}
                            >

                                {/* Front Side: Image */}
                                <div
                                    className="absolute top-0 left-0 w-full h-full rounded-[20px] overflow-hidden"
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover block"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/40 transition-all duration-500 group-hover:to-black/20" />
                                </div>

                                {/* Back Side: Details */}
                                <div
                                    className="absolute top-0 left-0 w-full h-full rounded-[20px] overflow-hidden bg-white p-6 flex flex-col justify-between"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    <div>
                                        <div className="font-mono text-[0.8rem] font-bold text-[#8c96a3] tracking-[1.5px] mb-5 uppercase">
                                            {item.tag}
                                        </div>
                                        <h3 className="text-[1.35rem] text-justify font-semibold leading-normal text-[#1a1e24] m-0">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <PrimaryButton
                                        ctaText={item.buttonText}
                                        className="mb-9 pointer-events-auto group-hover:bg-[#20324f] 
                                       bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
                                        btnTextClass={"text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"}
                                        circelClass={"bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"}
                                    />
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-5 mt-10">
                <button
                    className="bg-white/5 border border-white/10 text-white w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105"
                    onClick={handlePrevClick}
                    aria-label="Previous slide"
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                </button>

                <div className="flex gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white w-6' : 'bg-white/30 w-2'
                                }`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    className="bg-white/5 border border-white/10 text-white w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105"
                    onClick={handleNextClick}
                    aria-label="Next slide"
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                </button>
            </div>
        </section>
    );
}