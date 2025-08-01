"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ExclusiveWaitlist = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section className="flex flex-col relative lg:h-[690px] h-[460px] md:h-[500px] bg-gradient-to-b from-white to-[#f3fafa] px-4 py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[20px] opacity-100 text-center">
        {/* Heading */}
        <h2 className="font-semibold leading-snug text-3xl md:text-[40px] lg:text-[48px] text-[#060619]">
          Be Among The First 1,000
          <br className="md:block hidden" />
          And Enjoy{" "}
          <span className="relative inline-block">
            Exclusive
            <Image
              src="/imagessFolder/vector 2.png"
              alt="Underline"
              width={243}
              height={12}
              className="absolute bottom-0 left-0 z-0 translate-y-2"
            />
          </span>{" "}
          Waitlist Perks
        </h2>

        {/* Features */}
        <div className="flex gap-3 flex-col md:flex-row text-sm text-[#696f81] justify-center">
          {[
            "Waitlist-only discounts",
            "Premium trial at launch",
            "Priority verified seller spots.",
          ].map((text, i) => (
            <div key={i} className="flex gap-3 items-center">
              <Image
                src="/imagessFolder/Gift.png"
                alt="Feature icon"
                width={18}
                height={18}
                className="shrink-0"
              />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Scroll-triggered animated image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center pt-3 bottom-0 absolute right-6"
        >
          <Image
            src="/imagessFolder/4th half laptop frame.png"
            alt="Marketplace Preview"
            width={1440}
            height={380}
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveWaitlist;
