"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import React, { useEffect, useRef, useState } from "react";

type HeroSectionProps = {
    bgImage: string;
    centerImage: string;
    scrollTargetId: string;
};

export default function HeroSection({
    bgImage,
    centerImage,
    scrollTargetId,
}: HeroSectionProps) {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section
            ref={elementRef}
            style={{ backgroundImage: `url(${bgImage})` }}
            className="
              relative
              w-screen
              h-screen
              bg-contain
              bg-center
              bg-no-repeat"
        >
            {/* 中央の画像 */}
            <img
                src={centerImage}
                alt=""
                className={`
          absolute
          left-1/2
          top-[70%]
          -translate-x-1/2
          -translate-y-1/2
          w-[40%]
          h-auto
          pointer-events-none

          md:top-[70%]
          md:w-[60%]

          lg:top-[60%]
          lg:w-[25%] 
          ${isVisible ? "fade-in is-title" : "opacity-0"}
        `}
            />

            {/* 下の矢印 */}
            <button
                onClick={() => {
                    document.getElementById(scrollTargetId)?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                className={`
          absolute top-[75%] left-1/2 -translate-x-1/2
          text-amber-900/15 text-5xl animate-bounce ${isVisible ? "fade-in is-motion" : "opacity-0"}`}
            >
                ▼
            </button>
        </section>
    );
}
