import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const screens = [
  "/imagessFolder/Slide1.jpg",
  "/imagessFolder/Slide2.jpg",
  "/imagessFolder/Slide3.jpg",
  "/imagessFolder/Slide4.jpg",
  "/imagessFolder/Slide5.jpg",
  "/imagessFolder/Slide6.jpg",
];

export default function PhoneSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [centeredIndex, setCenteredIndex] = useState<number | null>(null);

  const screenWidth = 240;
  const scrollSpeed = 1;

  const duplicatedScreens = [...screens, ...screens]; // Double for seamless loop
  const totalWidth = screenWidth * screens.length;

  // Auto-scroll with pause logic
  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        setOffset((prev) => prev + scrollSpeed);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // Smooth scrolling without reset jump
  useEffect(() => {
    if (scrollRef.current) {
      const scrollPosition = offset % totalWidth;
      scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [offset]);

  // Pause logic when a slide is centered
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const centerX = window.innerWidth / 2;

    children.forEach((child, i) => {
      const childLeft = child.offsetLeft - (offset % totalWidth);
      const childCenter = childLeft + screenWidth / 2;
      const isCentered = Math.abs(childCenter - centerX) <= 10;

      if (isCentered && centeredIndex !== i) {
        setIsPaused(true);
        setCenteredIndex(i);
        setTimeout(() => setIsPaused(false), 1200);
      }
    });

    if (centeredIndex !== null) {
      const timeout = setTimeout(() => setCenteredIndex(null), 1500);
      return () => clearTimeout(timeout);
    }
  }, [offset, centeredIndex]);

  return (
    <div className="relative w-full h-[520px] overflow-hidden flex items-center justify-center py-10">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-30 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-30 pointer-events-none"></div>

      {/* Phone mockup frame */}
      <div className="absolute z-20 pointer-events-none">
        <Image
          src="/imagessFolder/middle screen frame.png"
          alt="Frame"
          width={265}
          height={480}
          className="object-contain w-[265px] h-[480px] rounded-2xl lg:ml-5"
        />
      </div>

      {/* Image track */}
      <div
        ref={scrollRef}
        className="absolute left-0 flex"
        style={{
          transition: "transform 0.05s linear",
        }}
      >
        {duplicatedScreens.map((src, i) => (
          <div
            key={i}
            className="w-[240px] h-[480px] flex-shrink-0 bg-transparent flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Screen ${i}`}
              className="w-[220px] h-[460px] object-contain lg:mr-0 mr-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
