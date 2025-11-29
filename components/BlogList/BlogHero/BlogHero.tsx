"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
    id: string;
    imgSrc: string;
    alt?: string;
};

const slides: Slide[] = [
    { id: "s1", imgSrc: "/images/blogs/slide-1.jpg", alt: "Hero 1" },
    { id: "s2", imgSrc: "/images/blogs/slide-2.jpg", alt: "Hero 2" },
    { id: "s3", imgSrc: "/images/blogs/slide-3.jpg", alt: "Hero 3" },
    { id: "s4", imgSrc: "/images/blogs/slide-4.jpg", alt: "Hero 4" },
    { id: "s5", imgSrc: "/images/blogs/slide-5.jpg", alt: "Hero 5" },
];

export const BlogHero: React.FC = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const resetTimeout = () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        if (isPaused) return;
        resetTimeout();
        // auto advance every 4s
        timeoutRef.current = window.setTimeout(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => resetTimeout();
    }, [index, isPaused]);

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);

    return (
        <section className="py-4 md:py-6">
            <div className="container mx-auto px-4">
                <div
                    className="relative rounded-lg overflow-hidden flex flex-col gap-4"
                >
                    {/* Slides */}
                    <div className="relative w-full h-[220px] md:h-[380px] lg:h-[420px]">
                        {slides.map((s, i) => (
                            <div
                                key={s.id}
                                className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                                aria-hidden={i !== index}
                            >
                                <Image
                                    src={s.imgSrc}
                                    alt={s.alt || "hero"}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="relative flex justify-between p-2">
                        {/* Left / Right nav */}
                        <button
                            aria-label="Previous"
                            onClick={prev}
                            className="bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-50"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-3">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    aria-label={`Slide ${idx + 1}`}
                                    onClick={() => setIndex(idx)}
                                    className={`w-2.5 h-2.5 z-50 md:w-3 md:h-3 rounded-full transition-all ${idx === index ? "bg-black shadow-md w-3 h-3 md:w-4 md:h-4" : "bg-gray-600"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            aria-label="Next"
                            onClick={next}
                            className="bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-50"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogHero;
