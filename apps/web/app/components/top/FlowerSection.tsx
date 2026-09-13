"use client";
import Link from "next/link";

type FlowerSectionProps = {
    titleImg: string;
    text: string;
    images: string[];
    buttonLabel?: string;
    buttonHref: string;
};

export default function FlowerSection({
    titleImg,
    text,
    images,
    buttonLabel = "作品一覧・料金",
    buttonHref,
}: FlowerSectionProps) {
    return (
        <section
            id="next"
            className="
        min-h-screen
        bg-[linear-gradient(to_bottom,#fce4ec_0%,#fce4ec_40%,#ffffff_40%,#ffffff_100%)]
        flex flex-col items-center
      "
        >
            <img src={titleImg} alt="" className="w-[80%] animate-fadeIn delay-200" />

            <p className="font-kaisei text-[#786449] text-center text-base md:text-lg lg:text-xl leading-relaxed px-2 mt-2 animate-fadeIn delay-200">
                {text.split("\n").map((line, i) => (
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10 w-[90%] animate-fadeIn delay-200">
                {images.map((src, i) => (
                    <img key={i} src={src} alt="" className="w-full h-auto rounded-lg" />
                ))}
            </div>

            <Link href={buttonHref}>
                <button
                    className="
            px-8 py-3 rounded-full
            border-1 border-[#d8c7a3]
            outline outline-1 outline-[#d8c7a3]
            bg-white text-[#5a4a3a] text-lg mt-4 font-kaisei
            transition-all duration-150
            active:scale-95 active:translate-y-[2px] active:bg-[#f5f0e6]
          "
                >
                    {buttonLabel}
                </button>
            </Link>
        </section>
    );
}