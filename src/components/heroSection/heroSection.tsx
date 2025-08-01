"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative max-w-full overflow-hidden w-full px-4 sm:px-6 md:px-10 py-12">
      {/* Blurred Circle Background Shapes */}
      <div className="absolute inset-0 z-0">
        {/* Top-left circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] rounded-full"
          style={{
            background: "rgba(255,157,152,0.2)",
            filter: "blur(100px)",
          }}
        />
        {/* Bottom-right circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] rounded-full"
          style={{
            background: "rgba(255,255,255,0.25)",
            filter: "blur(120px)",
          }}
        />
        {/* Center faint circle */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full"
          style={{
            background: "rgba(255,157,152,0.15)",
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="mx-auto flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-medium pt-10
             text-[30px] md:text-[40px] lg:text-[40px]
             leading-[120%] md:leading-[110%] lg:leading-[110%] 
             text-[#1a1a1a]
             sm:w-[348px] md:w-[734px] lg:w-[874px]"
        >
          <span className="text-[#FF9D98]">AI-Powered</span> Classifieds
          Marketplace for{" "}
          <span className="text-[#FF9D98]">Trusted & Secure</span> Transactions
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-[#44445F] font-light
                      text-[16px] md:text-[20px] lg:text-[21px]
                      leading-normal tracking-normal text-center
                      w-full sm:w-[348px] md:w-[620px] lg:w-[620px]
                      h-auto"
        >
          Buy and sell confidently with AI-powered security, escrow payments,
          and verified sellers.
        </motion.p>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mt-10 md:mt-[60px] mb-4 md:mb-0
                     w-full max-w-[450px] md:max-w-[400px] lg:max-w-[534px] lg:-mb-14 mx-auto"
        >
          <Image
            src="/imagessFolder/middle screen.png"
            alt="Desktop Preview"
            width={534}
            height={478}
            className="rounded-lg w-full h-auto object-contain"
          />

          {/* Overlapping Phone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/3
                          md:w-[90px] md:h-[210px] md:-bottom-2 md:left-[10%] md:translate-y-[30px]
                          lg:w-[130px] lg:h-[308px] lg:bottom-20 lg:left-1/9 lg:translate-y-12 lg:-mb-14"
          >
            <Image
              src="/imagessFolder/hero section middle phone.png"
              alt="Small Phone Preview"
              width={130}
              height={508}
              className="rounded-xl w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Left Floating Phone */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="absolute z-20 left-4 bottom-10 w-[200px] h-auto 
                   md:w-[200px] md:h-[300px] md:left-40 md:bottom-13 md:block
                   lg:w-[300px] lg:h-[297px] lg:left-5 lg:bottom-65"
      >
        <Image
          src="/imagessFolder/Hero section phone img left.png"
          alt="Floating Phone Left"
          width={462}
          height={497}
          className="rounded-xl w-full h-auto"
        />
      </motion.div>

      {/* Right Floating Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="hidden md:block absolute top-30 right-20 translate-x-1/4 -translate-y-6 z-0
                   md:w-[200px] md:h-[180px] md:top-50 md:right-45 md:translate-x-1/4 md:-translate-y-4
                   lg:w-[320.68px] lg:h-[299.15px] lg:top-30 lg:right-20 lg:translate-x-1/4 lg:-translate-y-6"
      >
        <Image
          src="/imagessFolder/Landing Page 1.png"
          alt="Floating Phone Right"
          width={420.68}
          height={399.15}
          className="rounded-xl"
        />
      </motion.div>

      {/* Black Bottom Shapes */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full ">
        <Image
          src="/imagessFolder/black.png"
          alt="Background Shape"
          width={1586}
          height={187}
          className="w-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full md:hidden -px-6">
        <Image
          src="/imagessFolder/black mobile.png"
          alt="Mobile Background Shape"
          width={607}
          height={95}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
