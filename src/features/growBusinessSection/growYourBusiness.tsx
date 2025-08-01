"use client";

import Image from "next/image";
import { FC } from "react";
import React from "react";
import { PiStorefront, PiCreditCard, PiTruck, PiWallet } from "react-icons/pi";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  isIconCentered?: boolean;
  backgroundColor?: string;
}

const GrowYourBusiness: FC = () => {
  const FeatureCard: FC<FeatureCardProps> = ({
    icon,
    title,
    description,
    isIconCentered = false,
    backgroundColor,
  }) => (
    <div
      className={`
      space-y-4 lg:space-y-[10px] /* Default 16px gap, 10px on desktop */
             /* Default 24px padding, 16px horizontal on desktop, vertical stays 24px */
                    /* Fixed height on desktop */
      w-full /* Full width on small, capped max-width on desktop */
    `}
    >
      {/* Icon alignment: controlled by isIconCentered */}
      <div className=" flex items-center gap-3 md:block ">
        <div
          className={`flex  ${
            isIconCentered ? "justify-center" : "justify-start"
          }`}
        >
          {/* New div for icon styling - apply background color only if provided */}
          <div
            className="w-[70px] h-[70px] p-[20px] rounded-[16px] flex items-center justify-center"
            style={backgroundColor ? { background: backgroundColor } : {}}
          >
            {icon}
          </div>
        </div>
        <span className="block md:hidden">
          <h3 className="text-[20px] font-semibold text-left lg:font-semibold lg:text-[#060619] md:text-center w-full text-[#060619]">
            {title}
          </h3>
        </span>
      </div>
      {/* Heading (h3): Centered for tablet/desktop, left-aligned for mobile */}
      <span className="hidden md:block">
        <h3 className="text-[20px] font-semibold text-left lg:font-semibold lg:text-[#060619] md:text-center w-full text-[#060619]">
          {title}
        </h3>
      </span>
      {/* Paragraph (p): Left-aligned on mobile, centered on other screens */}
      <p
        className={`
        font-poppins  text-[#4e5464] w-full 
       text-[16px] leading-[25px]  font-[400] 
        overflow-hidden                           
        text-left md:text-center 
      `}
      >
        {description}
      </p>
    </div>
  );

  const cardColors = ["#0E9F6E", "#F98080", "#FACA15", "#0DA3AE"];

  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-10 lg:px-28 bg-white text-center w-full py-12 max-w-[1440px] mx-auto scroll-mt-[100px]"
    >
      {/* Heading (remains consistent across all breakpoints) */}
      <div className="w-full h-auto flex flex-col items-center justify-center gap-2 mx-auto text-center">
        <h2 className="text-3xl md:text-3xl lg:text-[48Px] font-semibold leading-snug text-center">
          <span className="relative inline-block">
            <span className="text-black font-bold z-10 ">Grow</span>
            <Image
              src="/imagessFolder/Vector 14.png"
              alt="Underline"
              width={145}
              height={12}
              className="absolute bottom-0 left-0 z-0 translate-y-2"
            />
          </span>{" "}
          <span className="text-[#060619] font-bold text-center">
            Your Business,
          </span>{" "}
          <br />
          <span className="text-bold text-[#060619] text-center">
            Simplified.
          </span>
        </h2>
        <p className="text-[18px] lg:text-[20px] md:text-[20px] leading-[28px] font-normal text-[#060619] mx-auto text-center font-poppins">
          Your Online Storefront, Your Way.
        </p>
      </div>

      {/* DESKTOP LAYOUT (visible ONLY on lg and up) */}
      <div className="hidden lg:block w-full mx-auto  relative overflow-visible mt-5">
        {/* Main Grid for Desktop Layout */}
        <div className="grid grid-cols-3 gap-[30px] relative z-10">
          <FeatureCard
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.6693 36.6654H20.0026C12.1459 36.6654 8.21749 36.6654 5.77671 34.2246C3.33594 31.7838 3.33594 27.8554 3.33594 19.9987V3.33203"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M31.6669 11.668L26.4702 18.212C25.6742 19.2144 25.2762 19.7156 24.8193 19.9598C24.1167 20.3354 23.2772 20.3537 22.559 20.009C22.0919 19.7848 21.6725 19.3014 20.8336 18.3346C19.9947 17.3678 19.5753 16.8844 19.1082 16.6602C18.39 16.3155 17.5505 16.3338 16.8479 16.7094C16.391 16.9536 15.993 17.4548 15.197 18.4572L10 25.0013"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
              </svg>
            }
            title={
              <>
                <span className="text-[20px] font-normal leading-[30px] ">
                  Create an online <br /> presence with
                </span>{" "}
                <span className="font-bold text-[20px]">KUVE Marketplace</span>
              </>
            }
            description="An AI-powered classifieds platform with verified profiles, smart pricing, escrow payments, and premium seller tools like storefronts and intelligent dashboard."
            isIconCentered={true}
          />
          <FeatureCard
            icon={
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.8284 21.3284C36 20.1569 36 18.2712 36 14.5C36 10.7288 36 8.84314 34.8284 7.67157M34.8284 21.3284C33.6569 22.5 31.7712 22.5 28 22.5H20C16.2288 22.5 14.3431 22.5 13.1716 21.3284M34.8284 21.3284C34.8284 21.3284 34.8284 21.3284 34.8284 21.3284ZM34.8284 7.67157C33.6569 6.5 31.7712 6.5 28 6.5L20 6.5C16.2288 6.5 14.3431 6.5 13.1716 7.67157M34.8284 7.67157C34.8284 7.67157 34.8284 7.67157 34.8284 7.67157ZM13.1716 7.67157C12 8.84315 12 10.7288 12 14.5C12 18.2712 12 20.1569 13.1716 21.3284M13.1716 7.67157C13.1716 7.67157 13.1716 7.67157 13.1716 7.67157ZM13.1716 21.3284C13.1716 21.3284 13.1716 21.3284 13.1716 21.3284Z"
                  stroke="#060619"
                  strokeWidth="1.875"
                />
                <path
                  d="M26 14.5C26 15.6046 25.1046 16.5 24 16.5C22.8954 16.5 22 15.6046 22 14.5C22 13.3954 22.8954 12.5 24 12.5C25.1046 12.5 26 13.3954 26 14.5Z"
                  stroke="#060619"
                  strokeWidth="1.875"
                />
                <path
                  d="M36 12.5C32.6863 12.5 30 9.81371 30 6.5"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M36 16.5C32.6863 16.5 30 19.1863 30 22.5"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12.5C15.3137 12.5 18 9.81371 18 6.5"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M12 16.5C15.3137 16.5 18 19.1863 18 22.5"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M10 41.2768H14.5199C16.5416 41.2768 18.5851 41.4874 20.5527 41.8928C24.0331 42.6098 27.6977 42.6967 31.2139 42.1275C32.9476 41.8469 34.6521 41.4178 36.195 40.6731C37.5878 40.0008 39.2939 39.0532 40.4399 37.9918C41.5842 36.932 42.776 35.1974 43.6219 33.8415C44.3472 32.6788 43.9964 31.2524 42.8491 30.3861C41.5746 29.4238 39.6834 29.424 38.4092 30.3865L34.7949 33.1169C33.3941 34.175 31.8639 35.1491 30.0411 35.4398C29.822 35.4748 29.5923 35.5066 29.3527 35.5344M29.3527 35.5344C29.2806 35.5427 29.2075 35.5507 29.1336 35.5583M29.3527 35.5344C29.6443 35.4719 29.9339 35.2921 30.2055 35.055C31.4919 33.9322 31.5733 32.04 30.4571 30.7863C30.1981 30.4954 29.8951 30.2528 29.5581 30.0518C23.9635 26.7149 15.2588 29.2564 10 32.9858M29.3527 35.5344C29.2797 35.55 29.2066 35.5583 29.1336 35.5583M29.1336 35.5583C28.0869 35.6658 26.8623 35.6936 25.5035 35.5653"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <rect
                  x="4"
                  y="28.5"
                  width="6"
                  height="16"
                  rx="1.875"
                  stroke="#060619"
                  strokeWidth="1.875"
                />
              </svg>
            }
            title={
              <>
                <span className="font-normal text-[20px]">
                  Unlock Capital with
                </span>
                <br /> <span className="font-boldtext-[20px]">KUVE LEND</span>
              </>
            }
            description="AI-powered credit scoring based on real-time marketplace, POS, and logistics activity empowering working capital loans for merchants and delivery partners."
            isIconCentered={true}
          />
          <FeatureCard
            icon={
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="32"
                  y="26.5"
                  width="12"
                  height="12"
                  rx="6"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M22 32.5V29.5C22 25.7288 22 23.8431 20.8284 22.6716C19.6569 21.5 17.7712 21.5 14 21.5H12.8C12.0571 21.5 11.6857 21.5 11.3723 21.5247C7.44932 21.8334 4.33341 24.9493 4.02466 28.8723C4 29.1857 4 29.5571 4 30.3C4 30.4857 4 30.5786 4.00617 30.6569C4.08335 31.6377 4.86233 32.4166 5.84308 32.4938C5.92142 32.5 6.01428 32.5 6.2 32.5H22ZM22 32.5H32"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19 32.5C19 35.8137 16.3137 38.5 13 38.5C9.68629 38.5 7 35.8137 7 32.5"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M24 10.5H25.0557C27.4614 10.5 28.6642 10.5 29.6308 11.0974C30.5974 11.6948 31.1353 12.7706 32.2111 14.9223L38 26.5"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M36.2852 22.5L37.6486 21.4956C38.1743 21.1083 38.4372 20.9146 38.6199 20.6622C38.7443 20.4904 38.8406 20.2999 38.9052 20.0978C39 19.8009 39 19.4744 39 18.8214C39 17.5865 39 16.9691 38.7367 16.5081C38.5594 16.1977 38.3023 15.9406 37.9919 15.7633C37.5309 15.5 36.9135 15.5 35.6786 15.5H33"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="38"
                  cy="32.5"
                  r="6"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
              </svg>
            }
            title={
              <>
                <span className="font-normal text-[20px]">
                  Efficient logistics and <br /> deep insights at your
                  fingertips.
                </span>
              </>
            }
            description={
              <p>
                Deliver Smarter, Sell More. With ,<strong>Kuve Express</strong>{" "}
                our AI-powered logistics for fast, reliable deliveries.
              </p>
            }
            isIconCentered={true}
          />

          {/* Fourth Card */}
          <div className="col-start-2 col-span-1 flex justify-center items-center">
            <FeatureCard
              icon={
                <svg
                  width="44"
                  height="40"
                  viewBox="0 0 44 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3359 20C18.3359 16.2288 18.3359 14.3431 19.7028 13.1716C21.0696 12 23.2695 12 27.6693 12H32.3359C36.7357 12 38.9356 12 40.3024 13.1716C41.6693 14.3431 41.6693 16.2288 41.6693 20C41.6693 23.7712 41.6693 25.6569 40.3024 26.8284C38.9356 28 36.7357 28 32.3359 28H27.6693C23.2695 28 21.0696 28 19.7028 26.8284C18.3359 25.6569 18.3359 23.7712 18.3359 20Z"
                    stroke="#060619"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M18.3359 18L41.6693 18"
                    stroke="#060619"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32.3359 23C32.3359 22.0572 32.3359 21.5858 32.6776 21.2929C33.0194 21 33.5693 21 34.6693 21C35.7692 21 36.3192 21 36.6609 21.2929C37.0026 21.5858 37.0026 22.0572 37.0026 23C37.0026 23.9428 37.0026 24.4142 36.6609 24.7071C36.3192 25 35.7692 25 34.6693 25C33.5693 25 33.0194 25 32.6776 24.7071C32.3359 24.4142 32.3359 23.9428 32.3359 23Z"
                    stroke="#060619"
                    strokeWidth="0.7"
                  />
                  <path
                    d="M5.33594 16.6673C5.33594 10.3819 5.33594 7.23923 6.89803 5.28661C8.46013 3.33398 10.9743 3.33398 16.0026 3.33398C21.0309 3.33398 23.5451 3.33398 25.1072 5.28661C26.6693 7.23923 26.6693 10.3819 26.6693 16.6673V23.334C26.6693 29.6194 26.6693 32.7621 25.1072 34.7147C23.5451 36.6673 21.0309 36.6673 16.0026 36.6673C10.9743 36.6673 8.46013 36.6673 6.89803 34.7147C5.33594 32.7621 5.33594 29.6194 5.33594 23.334V16.6673Z"
                    stroke="#060619"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M20 31.666H12"
                    stroke="#060619"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title={
                <>
                  <span className="text-[20px] font-normal text-[#060619}">
                    Seamless Payments <br /> with
                  </span>{" "}
                  <span className="font-bold text-[20px]">KUVE POS</span>
                </>
              }
              description="It unifies online and offline sales for sellers of all sizes, tracks in-store and online transactions, syncs inventory, and delivers real-time sales insights on seller’s dashboard."
              isIconCentered={true}
            />
          </div>

          <div className="col-span-1"></div>
        </div>

        {/* Image shifted left and partially hidden */}
        <div className="absolute -left-28 -bottom-20 z-0">
          <Image
            src="/imagessFolder/phoneimg.png"
            alt="Kuve Mobile Screenshot"
            width={368} // increased from 668
            height={718} // increased from 1340
            className="w-[368px] h-auto object-contain"
          />
        </div>
      </div>

      {/* TABLET LAYOUT (visible ONLY on md, hidden on sm and lg) */}
      <div className="hidden md:flex lg:hidden flex-row items-center max-w-[1212px] mx-auto mt-3">
        {/* Image on the left for Tablet - User provided negative margins */}
        <div className="w-1/3 flex-shrink-0 -ml-10 -mt-30">
          <Image
            src="/imagessFolder/Grow tab img.png"
            alt="Kuve Mobile Screenshot"
            width={369}
            height={820}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* 2x2 Grid of all four cards on the right for Tablet - NO backgroundColor prop passed */}
        <div className="w-2/3 grid grid-cols-1 gap-[20px]">
          <FeatureCard
            icon={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.6693 36.6654H20.0026C12.1459 36.6654 8.21749 36.6654 5.77671 34.2246C3.33594 31.7838 3.33594 27.8554 3.33594 19.9987V3.33203"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M31.6669 11.668L26.4702 18.212C25.6742 19.2144 25.2762 19.7156 24.8193 19.9598C24.1167 20.3354 23.2772 20.3537 22.559 20.009C22.0919 19.7848 21.6725 19.3014 20.8336 18.3346C19.9947 17.3678 19.5753 16.8844 19.1082 16.6602C18.39 16.3155 17.5505 16.3338 16.8479 16.7094C16.391 16.9536 15.993 17.4548 15.197 18.4572L10 25.0013"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
              </svg>
            }
            title={
              <>
                <span className="text-[20px] font-normal ">
                  Create an online <br /> presence with
                </span>{" "}
                <span className="font-bold text-[20px]">KUVE Marketplace</span>
              </>
            }
            description="An AI-powered classifieds platform with verified profiles, smart pricing, escrow payments, and premium seller tools like storefronts and intelligent dashboard."
            isIconCentered={true}
          />
          <FeatureCard
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.8284 20.8284C36 19.6569 36 17.7712 36 14C36 10.2288 36 8.34314 34.8284 7.17157M34.8284 20.8284C33.6569 22 31.7712 22 28 22H20C16.2288 22 14.3431 22 13.1716 20.8284M34.8284 20.8284C34.8284 20.8284 34.8284 20.8284 34.8284 20.8284ZM34.8284 7.17157C33.6569 6 31.7712 6 28 6L20 6C16.2288 6 14.3431 6 13.1716 7.17157M34.8284 7.17157C34.8284 7.17157 34.8284 7.17157 34.8284 7.17157ZM13.1716 7.17157C12 8.34315 12 10.2288 12 14C12 17.7712 12 19.6569 13.1716 20.8284M13.1716 7.17157C13.1716 7.17157 13.1716 7.17157 13.1716 7.17157ZM13.1716 20.8284C13.1716 20.8284 13.1716 20.8284 13.1716 20.8284Z"
                  stroke="#060619"
                  strokeWidth="1.875"
                />
                <path
                  d="M26 14C26 15.1046 25.1046 16 24 16C22.8954 16 22 15.1046 22 14C22 12.8954 22.8954 12 24 12C25.1046 12 26 12.8954 26 14Z"
                  stroke="#060619"
                  strokeWidth="1.875"
                />
                <path
                  d="M36 12C32.6863 12 30 9.31371 30 6"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M36 16C32.6863 16 30 18.6863 30 22"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12C15.3137 12 18 9.31371 18 6"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M12 16C15.3137 16 18 18.6863 18 22"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <path
                  d="M10 40.7768H14.5199C16.5416 40.7768 18.5851 40.9874 20.5527 41.3928C24.0331 42.1098 27.6977 42.1967 31.2139 41.6275C32.9476 41.3469 34.6521 40.9178 36.195 40.1731C37.5878 39.5008 39.2939 38.5532 40.4399 37.4918C41.5842 36.432 42.776 34.6974 43.6219 33.3415C44.3472 32.1788 43.9964 30.7524 42.8491 29.8861C41.5746 28.9238 39.6834 28.924 38.4092 29.8865L34.7949 32.6169C33.3941 33.675 31.8639 34.6491 30.0411 34.9398C29.822 34.9748 29.5923 35.0066 29.3527 35.0344M29.3527 35.0344C29.2806 35.0427 29.2075 35.0507 29.1336 35.0583M29.3527 35.0344C29.6443 34.9719 29.9339 34.7921 30.2055 34.555C31.4919 33.4322 31.5733 31.54 30.4571 30.2863C30.1981 29.9954 29.8951 29.7528 29.5581 29.5518C23.9635 26.2149 15.2588 28.7564 10 32.4858M29.3527 35.0344C29.2797 35.05 29.2066 35.0583 29.1336 35.0583M29.1336 35.0583C28.0869 35.1658 26.8623 35.1936 25.5035 35.0653"
                  stroke="#060619"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                />
                <rect
                  x="4"
                  y="28"
                  width="6"
                  height="16"
                  rx="1.875"
                  stroke="#060619"
                  strokeWidth="1.875"
                />
              </svg>
            }
            title={
              <>
                <span className="font-normal text-[20px]">
                  Unlock Capital with
                </span>
                <br /> <span className="font-boldtext-[20px]">KUVE LEND</span>
              </>
            }
            description="AI-powered credit scoring based on real-time marketplace, POS, and logistics activity empowering working capital loans for merchants and delivery partners."
            isIconCentered={true}
          />
          <FeatureCard
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="32"
                  y="26"
                  width="12"
                  height="12"
                  rx="6"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M22 32V29C22 25.2288 22 23.3431 20.8284 22.1716C19.6569 21 17.7712 21 14 21H12.8C12.0571 21 11.6857 21 11.3723 21.0247C7.44932 21.3334 4.33341 24.4493 4.02466 28.3723C4 28.6857 4 29.0571 4 29.8C4 29.9857 4 30.0786 4.00617 30.1569C4.08335 31.1377 4.86233 31.9166 5.84308 31.9938C5.92142 32 6.01428 32 6.2 32H22ZM22 32H32"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19 32C19 35.3137 16.3137 38 13 38C9.68629 38 7 35.3137 7 32"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M24 10H25.0557C27.4614 10 28.6642 10 29.6308 10.5974C30.5974 11.1948 31.1353 12.2706 32.2111 14.4223L38 26"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M36.2852 22L37.6486 20.9956C38.1743 20.6083 38.4372 20.4146 38.6199 20.1622C38.7443 19.9904 38.8406 19.7999 38.9052 19.5978C39 19.3009 39 18.9744 39 18.3214C39 17.0865 39 16.4691 38.7367 16.0081C38.5594 15.6977 38.3023 15.4406 37.9919 15.2633C37.5309 15 36.9135 15 35.6786 15H33"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="38"
                  cy="32"
                  r="6"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
              </svg>
            }
            title={
              <>
                <span className="font-normal text-[20px]">
                  Efficient logistics and <br /> deep insights at your
                  fingertips.
                </span>
              </>
            }
            description={
              <p>
                Deliver Smarter, Sell More. With ,<strong>Kuve Express</strong>{" "}
                our AI-powered logistics for fast, reliable deliveries.
              </p>
            }
            isIconCentered={true}
          />
          <FeatureCard
            icon={
              <svg
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6641 17.9987C17.6641 14.856 17.6641 13.2847 18.6404 12.3083C19.6167 11.332 21.188 11.332 24.3307 11.332H27.6641C30.8068 11.332 32.3781 11.332 33.3544 12.3083C34.3307 13.2847 34.3307 14.856 34.3307 17.9987C34.3307 21.1414 34.3307 22.7127 33.3544 23.6891C32.3968 24.8422 30.8252 24.8399 27.6641 24.6654H24.3307C21.188 24.6654 19.6167 24.6654 18.6404 23.6891C17.6641 22.7127 17.6641 21.1414 17.6641 17.9987Z"
                  stroke="#060619"
                  strokeWidth="1.4"
                />
                <path
                  d="M17.6641 16.332L34.3307 16.332"
                  stroke="#060619"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M27.6641 20.4987C27.6641 19.713 27.6641 19.3202 27.9081 19.0761C28.1522 18.832 28.5451 18.832 29.3307 18.832C30.1164 18.832 30.5092 18.832 30.7533 19.0761C30.9974 19.3202 30.9974 19.713 30.9974 20.4987C30.9974 21.2844 30.9974 21.6772 30.7533 21.9213C30.5092 22.1654 30.1164 22.1654 29.3307 22.1654C28.5451 22.1654 28.1522 22.1654 27.9081 21.9213C27.6641 21.6772 27.6641 21.2844 27.6641 20.4987Z"
                  stroke="#060619"
                  strokeWidth="0.7"
                />
                <path
                  d="M5.33594 16.6673C5.33594 10.3819 5.33594 7.23923 6.89803 5.28661C8.46013 3.33398 10.9743 3.33398 16.0026 3.33398C21.0309 3.33398 23.5451 3.33398 25.1072 5.28661C26.6693 7.23923 26.6693 10.3819 26.6693 16.6673V23.334C26.6693 29.6194 26.6693 32.7621 25.1072 34.7147C23.5451 36.6673 21.0309 36.6673 16.0026 36.6673C10.9743 36.6673 8.46013 36.6673 6.89803 34.7147C5.33594 32.7621 5.33594 29.6194 5.33594 23.334V16.6673Z"
                  stroke="#060619"
                  strokeWidth="1.4"
                />
                <path
                  d="M20 31.666H12"
                  stroke="#060619"
                  strokeLinecap="round"
                />
              </svg>
            }
            title={
              <>
                <span className="text-[20px] font-normal text-[#060619}">
                  Seamless Payments <br /> with
                </span>{" "}
                <span className="font-bold text-[20px]">KUVE POS</span>
              </>
            }
            description="It unifies online and offline sales for sellers of all sizes, tracks in-store and online transactions, syncs inventory, and delivers real-time sales insights on seller’s dashboard."
            isIconCentered={true}
          />
        </div>
      </div>

      {/* MOBILE LAYOUT (visible ONLY on sm, hidden on md and lg) */}
      <div className="md:hidden w-full  mt-3 flex flex-col opacity-100">
        <div className="w-full h-auto  grid grid-cols-1 gap-[30px]">
          <div className="p-6 rounded-[12px] shadow-md border border-slate-100">
            <FeatureCard
              icon={
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5 27.5H15C9.10744 27.5 6.16117 27.5 4.33058 25.6694C2.5 23.8388 2.5 20.8926 2.5 15V2.5"
                    stroke="white"
                    strokeWidth="1.875"
                    strokeLinecap="round"
                  />
                  <path
                    d="M23.7502 8.75L19.8527 13.658C19.2557 14.4098 18.9572 14.7857 18.6145 14.9689C18.0875 15.2506 17.4579 15.2643 16.9193 15.0058C16.5689 14.8377 16.2543 14.4751 15.6252 13.75C14.9961 13.0249 14.6815 12.6623 14.3311 12.4942C13.7925 12.2357 13.1629 12.2494 12.636 12.5311C12.2933 12.7143 11.9948 13.0901 11.3977 13.8419L7.5 18.75"
                    stroke="white"
                    strokeWidth="1.875"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title={
                <>
                  <span className="text-[20px] font-normal ">
                    Create an online <br /> presence with
                  </span>{" "}
                  <span className="font-bold text-[20px]">
                    KUVE Marketplace
                  </span>
                </>
              }
              description="An AI-powered classifieds platform with verified profiles, smart pricing, escrow payments, and premium seller tools like storefronts and intelligent dashboard."
              isIconCentered={false}
              backgroundColor={cardColors[0]}
            />
          </div>
          <div className="p-6 rounded-[12px] shadow-md border border-slate-100">
            <FeatureCard
              icon={
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.1213 15.6213C27 14.7426 27 13.3284 27 10.5C27 7.67157 27 6.25736 26.1213 5.37868M26.1213 15.6213C25.2426 16.5 23.8284 16.5 21 16.5H15C12.1716 16.5 10.7574 16.5 9.87868 15.6213M26.1213 15.6213C26.1213 15.6213 26.1213 15.6213 26.1213 15.6213ZM26.1213 5.37868C25.2426 4.5 23.8284 4.5 21 4.5L15 4.5C12.1716 4.5 10.7574 4.5 9.87868 5.37868M26.1213 5.37868C26.1213 5.37868 26.1213 5.37868 26.1213 5.37868ZM9.87868 5.37868C9 6.25736 9 7.67157 9 10.5C9 13.3284 9 14.7426 9.87868 15.6213M9.87868 5.37868C9.87868 5.37868 9.87868 5.37868 9.87868 5.37868ZM9.87868 15.6213C9.87868 15.6213 9.87868 15.6213 9.87868 15.6213Z"
                    stroke="white"
                    strokeWidth="1.875"
                  />
                  <path
                    d="M19.5 10.5C19.5 11.3284 18.8284 12 18 12C17.1716 12 16.5 11.3284 16.5 10.5C16.5 9.67157 17.1716 9 18 9C18.8284 9 19.5 9.67157 19.5 10.5Z"
                    stroke="white"
                    strokeWidth="1.875"
                  />
                  <path
                    d="M27 9C24.5147 9 22.5 6.98528 22.5 4.5"
                    stroke="white"
                    strokeWidth="1.875"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27 12C24.5147 12 22.5 14.0147 22.5 16.5"
                    stroke="white"
                    strokeWidth="1.875"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 9C11.4853 9 13.5 6.98528 13.5 4.5"
                    stroke="white"
                    strokeWidth="1.875"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 12C11.4853 12 13.5 14.0147 13.5 16.5"
                    stroke="white"
                    strokeWidth="1.875"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.5 30.5826H10.8899C12.4062 30.5826 13.9388 30.7405 15.4145 31.0446C18.0249 31.5824 20.7733 31.6475 23.4104 31.2206C24.7107 31.0101 25.9891 30.6883 27.1462 30.1298C28.1908 29.6256 29.4704 28.9149 30.3299 28.1189C31.1882 27.324 32.082 26.023 32.7164 25.0061C33.2604 24.1341 32.9973 23.0643 32.1368 22.4146C31.181 21.6928 29.7626 21.693 28.8069 22.4149L26.0961 24.4626C25.0456 25.2563 23.898 25.9868 22.5309 26.2049C22.3665 26.2311 22.1943 26.255 22.0145 26.2758M22.0145 26.2758C21.9604 26.2821 21.9057 26.2881 21.8502 26.2937M22.0145 26.2758C22.2332 26.2289 22.4504 26.0941 22.6541 25.9162C23.6189 25.0742 23.68 23.655 22.8428 22.7147C22.6486 22.4965 22.4213 22.3146 22.1686 22.1638C17.9726 19.6612 11.4441 21.5673 7.5 24.3644M22.0145 26.2758C21.9598 26.2875 21.905 26.2937 21.8502 26.2937M21.8502 26.2937C21.0652 26.3743 20.1467 26.3952 19.1276 26.2989"
                    stroke="white"
                    strokeWidth="1.875"
                    strokeLinecap="round"
                  />
                  <rect
                    x="3"
                    y="21"
                    width="4.5"
                    height="12"
                    rx="1.875"
                    stroke="white"
                    strokeWidth="1.875"
                  />
                </svg>
              }
              title={
                <>
                  <span className="font-normal text-[20px]">
                    Unlock Capital with
                  </span>
                  <br /> <span className="font-boldtext-[20px]">KUVE LEND</span>
                </>
              }
              description="AI-powered credit scoring based on real-time marketplace, POS, and logistics activity empowering working capital loans for merchants and delivery partners."
              isIconCentered={false}
              backgroundColor={cardColors[1]}
            />
          </div>
          <div className="p-6 rounded-[12px] shadow-md border border-slate-100">
            <FeatureCard
              icon={
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="24"
                    y="19.5"
                    width="9"
                    height="9"
                    rx="4.5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.5 24V21.75C16.5 18.9216 16.5 17.5074 15.6213 16.6287C14.7426 15.75 13.3284 15.75 10.5 15.75H9.6C9.04284 15.75 8.76426 15.75 8.52924 15.7685C5.58699 16.0001 3.25006 18.337 3.0185 21.2792C3 21.5143 3 21.7928 3 22.35C3 22.4893 3 22.5589 3.00462 22.6177C3.06251 23.3533 3.64675 23.9375 4.38231 23.9954C4.44106 24 4.51071 24 4.65 24H16.5ZM16.5 24H24"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.25 24C14.25 26.4853 12.2353 28.5 9.75 28.5C7.26472 28.5 5.25 26.4853 5.25 24"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 7.5H18.7918C20.596 7.5 21.4981 7.5 22.2231 7.94805C22.948 8.3961 23.3515 9.20297 24.1584 10.8167L28.5 19.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27.2139 16.5L28.2364 15.7467C28.6307 15.4562 28.8279 15.311 28.965 15.1217C29.0583 14.9928 29.1305 14.8499 29.1789 14.6984C29.25 14.4757 29.25 14.2308 29.25 13.7411C29.25 12.8149 29.25 12.3518 29.0525 12.0061C28.9196 11.7733 28.7267 11.5804 28.4939 11.4475C28.1482 11.25 27.6851 11.25 26.7589 11.25H24.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="28.5"
                    cy="24"
                    r="4.5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              }
              title={
                <>
                  <span className="font-normal text-[20px]">
                    Efficient logistics and <br /> deep insights at your
                    fingertips.
                  </span>
                </>
              }
              description={
                <p>
                  Deliver Smarter, Sell More. With ,
                  <strong>Kuve Express</strong> our AI-powered logistics for
                  fast, reliable deliveries.
                </p>
              }
              isIconCentered={false}
              backgroundColor={cardColors[2]}
            />
          </div>
          <div className="p-6 rounded-[12px] shadow-md border border-slate-100">
            <FeatureCard
              icon={
                <svg
                  width="36"
                  height="32"
                  viewBox="0 0 36 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_44604_27782)">
                    <path
                      d="M14.4609 14.3997C14.4609 11.8856 14.4609 10.6285 15.2597 9.84745C16.0585 9.06641 17.3442 9.06641 19.9155 9.06641H22.6428C25.2141 9.06641 26.4997 9.06641 27.2985 9.84745C28.0973 10.6285 28.0973 11.8856 28.0973 14.3997C28.0973 16.9139 28.0973 18.171 27.2985 18.952C26.515 19.8746 25.2291 19.8727 22.6428 19.7331H19.9155C17.3442 19.7331 16.0585 19.7331 15.2597 18.952C14.4609 18.171 14.4609 16.9139 14.4609 14.3997Z"
                      stroke="white"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M14.4609 13.0664L28.0973 13.0664"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22.6406 16.3997C22.6406 15.7712 22.6406 15.4569 22.8403 15.2617C23.04 15.0664 23.3614 15.0664 24.0043 15.0664C24.6471 15.0664 24.9685 15.0664 25.1682 15.2617C25.3679 15.4569 25.3679 15.7712 25.3679 16.3997C25.3679 17.0283 25.3679 17.3425 25.1682 17.5378C24.9685 17.7331 24.6471 17.7331 24.0043 17.7331C23.3614 17.7331 23.04 17.7331 22.8403 17.5378C22.6406 17.3425 22.6406 17.0283 22.6406 16.3997Z"
                      stroke="white"
                      strokeWidth="0.7"
                    />
                  </g>
                  <path
                    d="M4.36719 13.3327C4.36719 8.30437 4.36719 5.79021 5.64527 4.22811C6.92335 2.66602 8.98038 2.66602 13.0945 2.66602C17.2085 2.66602 19.2656 2.66602 20.5437 4.22811C21.8217 5.79021 21.8217 8.30437 21.8217 13.3327V18.666C21.8217 23.6943 21.8217 26.2085 20.5437 27.7706C19.2656 29.3327 17.2085 29.3327 13.0945 29.3327C8.98038 29.3327 6.92335 29.3327 5.64527 27.7706C4.36719 26.2085 4.36719 23.6943 4.36719 18.666V13.3327Z"
                    stroke="white"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M16.3658 25.334H9.82031"
                    stroke="white"
                    strokeLinecap="round"
                  />
                  <defs>
                    <clipPath id="clip0_44604_27782">
                      <rect
                        width="16.3636"
                        height="16"
                        fill="white"
                        transform="translate(13.0938 6.40039)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
              title={
                <>
                  <span className="text-[20px] font-normal text-[#060619}">
                    Seamless Payments <br /> with
                  </span>{" "}
                  <span className="font-bold text-[20px]">KUVE POS</span>
                </>
              }
              description="It unifies online and offline sales for sellers of all sizes, tracks in-store and online transactions, syncs inventory, and delivers real-time sales insights on seller’s dashboard."
              isIconCentered={false}
              backgroundColor={cardColors[3]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourBusiness;
