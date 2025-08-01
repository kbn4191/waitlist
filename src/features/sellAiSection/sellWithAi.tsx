"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SellWithAI = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-28 bg-white overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center w-full items-center md:items-start"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h2
            className="
              text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center md:text-left 
              text-[#0F172A] leading-snug md:leading-snug lg:leading-tight w-full
            "
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="relative inline-block pb-1">
              Experience
              <Image
                src="/imagessFolder/vector 2.png"
                alt="Underline"
                width={243}
                height={12}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:left-24 lg:transform-none z-0 translate-y-2"
              />
            </span>{" "}
            a cool new way to deliver using
            <span className=""> KUVE Express (API + SaaS)</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="font-poppins text-[#4e5464] w-full text-[16px] leading-[25px] font-[400] mb-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            A logistics engine for SMEs: Features route optimization, order
            matching, delivery tracking, and partner management, accessible via
            API or dashboard with multi-tenant architecture for micro logistic
            partners.
          </motion.p>

          {/* Button */}
          <motion.a
            href="#join"
            className="hidden w-fit mx-auto md:mx-0 md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="relative flex items-center justify-center px-6 py-3 bg-[#000222] text-white rounded-md text-base shadow overflow-hidden group">
              <div className="absolute top-0 left-0 h-full w-full bg-[#FF9D98] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 font-[500]">Join Waitlist</span>
            </button>
          </motion.a>
          <motion.a
            href="#join"
            className="block w-fit mx-auto md:mx-0 md:hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="relative flex items-center justify-center px-6 py-3 bg-[#000222] text-white rounded-t-md text-base shadow overflow-hidden group">
              <div className="absolute top-0 left-0 h-full w-full bg-[#FF9D98] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 font-[500]">Join Waitlist</span>
            </button>
          </motion.a>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          className="flex-1 flex items-center justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/imagessFolder/ell with ai customers.png"
              alt="Sell with AI Illustration"
              width={624}
              height={544}
              className="w-full h-auto object-contain max-w-[624px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SellWithAI;
