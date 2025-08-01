"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PhoneSlider from "./sneakpeak2";

interface SneakPeekSectionProps {
  dotColor?: string;
  frameSrc?: string;
}

const SlideItem: React.FC<{
  src: string;
  alt: string;
  imageWidthPx: number;
  imageHeightPx: number;
  gapPx: number;
}> = ({ src, alt, imageWidthPx, imageHeightPx, gapPx }) => {
  return (
    <div
      className="flex-shrink-0"
      style={{
        width: `${imageWidthPx}px`,
        marginRight: `${gapPx}px`,
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          width: `${imageWidthPx}px`,
          height: `${imageHeightPx}px`,
          borderRadius: "20px",
          border: "1px solid transparent",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default function SneakPeekSection({
  dotColor = "bg-[#FF9D98]",
  frameSrc = "/imagessFolder/middle screen frame.png",
}: SneakPeekSectionProps) {
  return (
    <section
      id="sneakPeak"
      className="relative overflow-hidden bg-white py-16 px-4 lg:px-0 md:scroll-mt-[100px] scroll-mt-[250px]"
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl lg:text-[48px] font-semibold relative inline-block pb-2 text-[#060619]">
          Sneak Peak
          <Image
            src="/imagessFolder/vector 2.png"
            alt="Underline"
            width={243}
            height={12}
            className="absolute bottom-0 left-0 z-0 translate-y-2"
          />
        </h2>
        <p className="mt-2 text-gray-600">
          Check out what to expect when KUVE is launched
        </p>
      </div>

      <PhoneSlider />
    </section>
  );
}
