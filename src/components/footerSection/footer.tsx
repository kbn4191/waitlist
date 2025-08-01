"use client";

import Image from "next/image";
import FooterSocialIcons from "./socialFooterIcons";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#000222] text-white 
                      py-5
                      px-4 sm:px-6 md:px-10 lg:px-30 /* Adjusted md:px from 10 to 6 for tighter tablet fit */
                      flex flex-col items-center
                      md:flex-row md:justify-between md:flex-nowrap
                      h-auto scroll-m-96 "
    >
      {/* DESKTOP & TABLET LAYOUT (visible on md and up, hidden on sm) */}
      <div className="hidden md:flex flex-row justify-between items-center w-full">
        {/* Logo (Desktop/Tablet) */}
        <div className="mr-4 lg:mr-8">
          {" "}
          {/* md:mr-4 for tablet, lg:mr-8 for desktop */}
          <Image
            src="/imagessFolder/Logo1.svg"
            alt="Kuve Logo"
            width={127}
            height={27.73}
          />
        </div>

        {/* Center Group: Nav Links + Copyright (Desktop/Tablet) */}
        <div className="flex flex-col items-center text-sm text-white">
          {/* Nav Links (horizontal row on desktop/tablet) */}
          <div className="flex flex-row space-x-2 lg:space-x-4 mb-1">
            {" "}
            {/* md:space-x-2 for tablet, lg:space-x-4 for desktop */}
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#features" className="hover:text-gray-400">
              Features
            </a>
            <a href="#contact" className="hover:text-gray-400">
              How it works
            </a>
            <a href="#sneakPeak" className="hover:text-gray-400">
              Sneak Peak
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact us
            </a>
          </div>
          {/* Copyright */}
          <p className="text-xs mt-1 text-[#F7F9FB]">Copyright.KUVE</p>
        </div>

        {/* Icons (Desktop/Tablet) */}
        <div className="ml-4 lg:ml-8">
          {" "}
          {/* md:ml-4 for tablet, lg:ml-8 for desktop */}
          <FooterSocialIcons />
        </div>
      </div>

      {/* MOBILE LAYOUT (visible only on sm, hidden on md and lg) */}
      <div className="md:hidden flex flex-col items-center w-full h-[340px]">
        {/* Logo (Mobile) */}
        <div className="mb-4">
          <Image
            src="/imagessFolder/Logo footer.png"
            alt="Kuve Logo"
            width={127}
            height={27.73}
          />
        </div>

        {/* Nav Links (Mobile: stacked vertically) */}
        <div className="flex flex-col text-center space-y-2 mb-4">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#features" className="hover:text-gray-400">
            Features
          </a>
          <a href="#contact" className="hover:text-gray-400">
            How it works
          </a>
          <a href="#sneakPeak" className="hover:text-gray-400">
            sneak Peak
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact us
          </a>
        </div>

        <div className="mb-4">
          <FooterSocialIcons />
        </div>

        {/* Copyright (Mobile) */}
        <p className="text-xs mt-1 text-[#F7F9FB]">Copyright.KUVE</p>
      </div>
    </footer>
  );
};

export default Footer;
