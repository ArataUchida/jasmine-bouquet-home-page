"use client";

import React from "react";

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
    return (
        <section
            style={{ backgroundImage: `url(${bgImage})` }}
            className="
        relative
        w-screen
        h-screen
        bg-contain
        bg-center
        bg-no-repeat
      "
        >
            {/* 中央の画像 */}
            <img
                src={centerImage}
                alt=""
                className="
          absolute
          left-1/2
          top-[70%]
          -translate-x-1/2
          -translate-y-1/2
          w-[80%]
          h-auto
          pointer-events-none

          md:top-[70%]
          md:w-[60%]

          lg:top-[70%]
          lg:w-[25%]
        "
            />

            {/* 下の矢印 */}
            <button
                onClick={() => {
                    document.getElementById(scrollTargetId)?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                className="
          absolute top-[80%] left-1/2 -translate-x-1/2
          text-gray-500/40 text-5xl animate-bounce
        "
            >
                ▼
            </button>
        </section>
    );
}
