"use client";

import Image from "next/image";
import { FiShoppingCart, FiMessageSquare, FiShoppingBag } from "react-icons/fi";
import { MdAccountBalanceWallet } from "react-icons/md";
import React from "react"; // Ensure React is imported

// Helper component for individual feature cards, consistent with GrowYourBusiness
interface FeatureCardItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  isIconCentered?: boolean; // Controls icon's horizontal alignment
  iconBgColorMobile?: string; // New prop for icon background color on mobile
}

const FeatureCardItem: React.FC<FeatureCardItemProps> = ({
  icon,
  title,
  description,
  isIconCentered = false,
  iconBgColorMobile,
}) => {
  return (
    // Default to px-6 py-4 for mobile. Override to p-4 for md/lg
    <div className="bg-white rounded-[8px] px-2 py-4 md:p-4">
      {/* Icon wrapper: Apply mobile-specific dimensions, padding, border-radius, and background color */}
      <div className=" flex gap-3 items-center">
        <div
          className={`
        text-4xl mb-3 flex
        w-[66px] h-[66px] rounded-[16px] p-[15px] /* Mobile specific icon wrapper dimensions/padding */
        ${
          iconBgColorMobile ? iconBgColorMobile : ""
        } /* Mobile background color */
        md:w-auto md:h-auto md:p-0 md:rounded-none md:bg-transparent /* Remove mobile styles on tablet/desktop */
        ${
          isIconCentered
            ? "justify-center items-center"
            : "justify-start items-center"
        } /* Icon alignment, added items-center */
      `}
        >
          {icon}
        </div>
        <span className=" md:hidden">
          <h3
            className={`font-medium text-[20px] leading-[28px] tracking-normal text-[#060619CC] mb-2
                      text-left md:text-center
                      md:font-poppins md:font-[500] md:text-xl md:leading-[28px] md:tracking-normal`} /* Tablet specific styles, text-xl for 20px, md:font-bold */
          >
            {title}
          </h3>
        </span>
      </div>
      {/* Heading alignment: left on mobile, centered on tablet/desktop */}
      {/* Reduced font size for tablet (md:text-xl) and made bold (md:font-bold) */}
      <span className=" md:block hidden">
        <h3
          className={`font-medium text-[20px] leading-[28px] tracking-normal text-[#060619CC] mb-2
                      text-left md:text-center
                      md:font-poppins md:font-[500] md:text-xl md:leading-[28px] md:tracking-normal`} /* Tablet specific styles, text-xl for 20px, md:font-bold */
        >
          {title}
        </h3>
      </span>

      {/* Paragraph alignment: now text-left on mobile, text-center on tablet (md), and then text-justify on desktop (lg) */}
      <p className="text-[#4e5464] text-left md:text-center lg:text-justify">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative bg-white text-center w-full py-12 max-w-[1440px] mx-auto scroll-mt-[100px]
                                  px-4 sm:px-6 md:px-10 lg:px-28"
    >
      {" "}
      {/* Consistent responsive padding */}
      {/* Header Text */}
      <div className="text-center mb-10 relative max-w-[1216px] w-full h-auto mx-auto gap-2">
        {/* Adjusted h2 font size for mobile to text-[24px] */}
        <h2 className="text-3xl md:text-3xl lg:text-[48px] font-semibold text-[#060619] leading-tight">
          <span className="relative inline-block pb-1">
            Shop
            {/* Corrected underline positioning to always be centered under "Shop" */}
            <Image
              src="/imagessFolder/vector 2.png"
              alt="Underline"
              width={126}
              height={12}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 translate-y-2" // Centered underline
            />
          </span>{" "}
          Smarter, Safer
          <br />
          And Instantly.
        </h2>
        <p className="text-[#060619] mt-2 text-[18px] md:text-[20px]">
          Shop with Unmatched Security & Peace of Mind.
        </p>
      </div>
      {/* DESKTOP LAYOUT (visible ONLY on lg) - Reverted to original structure */}
      <div className="hidden lg:block">
        {" "}
        {/* This div ensures this block is only for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center relative z-10 max-w-[1212px] mx-auto gap-10">
          {/* Feature 1 (Original Desktop Styling) */}
          <div className="bg-white rounded-[8px]">
            <div className="text-2xl mb-3 text-left md:text-center flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 36C16.6569 36 18 37.3431 18 39C18 40.6569 16.6569 42 15 42C13.3431 42 12 40.6569 12 39C12 37.3431 13.3431 36 15 36Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M33 36.0001C34.6569 36.0001 36 37.3433 36 39.0001C36 40.657 34.6569 42.0001 33 42.0001C31.3431 42.0001 30 40.657 30 39.0001C30 37.3433 31.3431 36.0001 33 36.0001Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M4.52242 6.18367L4.77118 5.47613H4.77118L4.52242 6.18367ZM4.24876 5.29246C3.85799 5.15507 3.42984 5.36048 3.29246 5.75124C3.15507 6.14201 3.36048 6.57016 3.75124 6.70754L4.24876 5.29246ZM9.17168 8.64596L9.79091 8.22281L9.79091 8.22281L9.17168 8.64596ZM11.7754 29.1723L11.2312 29.6884L11.7754 29.1723ZM41.3155 19.7655L42.0501 19.9169L42.051 19.9123L41.3155 19.7655ZM40.316 24.6149L41.0506 24.7663L40.316 24.6149ZM41.469 13.3942L40.8746 13.8515L41.469 13.3942ZM38.2672 30.1008L37.7934 29.5194L38.2672 30.1008ZM9.91616 19.52H10.6662V14.0767H9.91616H9.16616V19.52H9.91616ZM4.52242 6.18367L4.77118 5.47613L4.24876 5.29246L4 6L3.75124 6.70754L4.27366 6.89122L4.52242 6.18367ZM21.875 31V31.75H32.4807V31V30.25H21.875V31ZM9.91616 14.0767H10.6662C10.6662 12.646 10.6672 11.5132 10.5687 10.6038C10.4685 9.6776 10.259 8.90782 9.79091 8.22281L9.17168 8.64596L8.55245 9.06911C8.82883 9.47356 8.99159 9.97205 9.07745 10.7653C9.16514 11.5753 9.16616 12.6132 9.16616 14.0767H9.91616ZM4.52242 6.18367L4.27366 6.89122C5.59207 7.35474 6.51892 7.68189 7.21369 8.0228C7.88884 8.35408 8.27827 8.66789 8.55245 9.06911L9.17168 8.64596L9.79091 8.22281C9.3206 7.53459 8.687 7.07487 7.87444 6.67617C7.0815 6.2871 6.05596 5.92783 4.77118 5.47613L4.52242 6.18367ZM9.91616 19.52H9.16616C9.16616 22.4433 9.19559 24.4688 9.45676 25.9936C9.72719 27.5725 10.2517 28.6553 11.2312 29.6884L11.7754 29.1723L12.3197 28.6563C11.5663 27.8617 11.1612 27.0599 10.9352 25.7404C10.7 24.3667 10.6662 22.4798 10.6662 19.52H9.91616ZM21.875 31V30.25C19.0637 30.25 17.0348 30.2482 15.4886 30.029C13.9683 29.8134 13.0254 29.4007 12.3197 28.6563L11.7754 29.1723L11.2312 29.6884C12.2582 30.7716 13.5762 31.2728 15.278 31.5141C16.9539 31.7518 19.1084 31.75 21.875 31.75V31ZM9.91616 12.24V12.99H34.1777V12.24V11.49H9.91616V12.24ZM41.3155 19.7655L40.581 19.6141L39.5815 24.4635L40.316 24.6149L41.0506 24.7663L42.0501 19.9169L41.3155 19.7655ZM34.1777 12.24V12.99C35.8765 12.99 37.4306 12.991 38.6708 13.1296C39.289 13.1987 39.794 13.2987 40.1804 13.4345C40.5728 13.5724 40.7766 13.7241 40.8746 13.8515L41.469 13.3942L42.0635 12.9369C41.7175 12.4872 41.2091 12.2061 40.6777 12.0193C40.1402 11.8305 39.5098 11.7141 38.8374 11.6389C37.4963 11.489 35.8487 11.49 34.1777 11.49V12.24ZM41.3155 19.7655L42.051 19.9123C42.3938 18.1949 42.6677 16.8313 42.7341 15.7546C42.8016 14.6615 42.6673 13.7218 42.0635 12.9369L41.469 13.3942L40.8746 13.8515C41.1586 14.2207 41.2947 14.7276 41.237 15.6621C41.1783 16.613 40.9315 17.858 40.58 19.6187L41.3155 19.7655ZM32.4807 31V31.75C34.023 31.75 35.2475 31.7513 36.2221 31.632C37.217 31.5103 38.0387 31.2546 38.741 30.6822L38.2672 30.1008L37.7934 29.5194C37.3924 29.8462 36.8818 30.0401 36.0398 30.1432C35.1775 30.2487 34.0605 30.25 32.4807 30.25V31ZM40.316 24.6149L39.5815 24.4635C39.2626 26.0108 39.0358 27.1045 38.7584 27.9278C38.4875 28.7316 38.1945 29.1926 37.7934 29.5194L38.2672 30.1008L38.741 30.6822C39.4434 30.1098 39.8597 29.3567 40.1798 28.4068C40.4933 27.4765 40.7393 26.2768 41.0506 24.7663L40.316 24.6149Z"
                  fill="#060619"
                />
                <path
                  d="M28.5 21.5V20.5H27.5V19.5C27.4992 19.235 27.3936 18.9811 27.2062 18.7938C27.0189 18.6064 26.765 18.5008 26.5 18.5H25.5V17.5H24.5V18.5H23.5V17.5H22.5V18.5H21.5C21.235 18.5008 20.9811 18.6064 20.7938 18.7938C20.6064 18.9811 20.5008 19.235 20.5 19.5V20.5H19.5V21.5H20.5V22.5H19.5V23.5H20.5V24.5C20.5008 24.765 20.6064 25.0189 20.7938 25.2062C20.9811 25.3936 21.235 25.4992 21.5 25.5H22.5V26.5H23.5V25.5H24.5V26.5H25.5V25.5H26.5C26.765 25.4992 27.0189 25.3936 27.2062 25.2062C27.3936 25.0189 27.4992 24.765 27.5 24.5V23.5H28.5V22.5H27.5V21.5H28.5ZM26.5 24.5H21.5V19.5H26.5V24.5Z"
                  fill="#060619"
                />
                <path
                  d="M23.6775 20H23.005L22 24H22.5135L22.7455 23.0625H23.9035L24.1295 24H24.6605L23.6775 20ZM22.813 22.662L23.322 20.475H23.345L23.8365 22.662H22.813ZM25.119 20H25.619V24H25.119V20Z"
                  fill="#060619"
                />
              </svg>
            </div>
            <h3 className="font-medium text-[20px] leading-[30px] tracking-normal text-left md:text-center text-[#060619CC] mb-2">
              Experience the Future <br /> of Shopping using AI.
            </h3>
            <p className="text-[#4e5464] text-left md:text-center">
              Discover the new way of shopping with{" "}
              <strong>AI smart assistant</strong> . Shop effortlessly using
              voice, text or image.
            </p>
          </div>

          {/* Feature 2 (Original Desktop Styling) */}
          <div className="bg-white rounded-[8px]">
            <div className="text-2xl mb-3 text-left md:text-center flex justify-center">
              <svg
                width="40"
                height="43"
                viewBox="0 0 40 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 18.6638C5 12.9348 5 10.0703 5.62919 9.10663C6.25839 8.14295 8.76387 7.22099 13.7749 5.37707L14.7295 5.02577C17.3416 4.06458 18.6477 3.58398 20 3.58398C21.3523 3.58398 22.6584 4.06458 25.2705 5.02577L26.2251 5.37707C31.2361 7.22099 33.7416 8.14295 34.3708 9.10663C35 10.0703 35 12.9348 35 18.6638C35 19.5292 35 20.4676 35 21.4852C35 31.5867 27.9351 36.4888 23.5024 38.5704C22.3 39.135 21.6988 39.4173 20 39.4173C18.3012 39.4173 17.7 39.135 16.4976 38.5703C12.0649 36.4888 5 31.5867 5 21.4852C5 20.4676 5 19.5292 5 18.6638Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.6641 21.9987C11.6641 18.856 11.6641 17.2847 12.6404 16.3083C13.6167 15.332 15.188 15.332 18.3307 15.332H21.6641C24.8068 15.332 26.3781 15.332 27.3544 16.3083C28.3307 17.2847 28.3307 18.856 28.3307 21.9987C28.3307 25.1414 28.3307 26.7127 27.3544 27.6891C26.3968 28.8422 24.8252 28.8399 21.6641 28.6654H18.3307C15.188 28.6654 13.6167 28.6654 12.6404 27.6891C11.6641 26.7127 11.6641 25.1414 11.6641 21.9987Z"
                  stroke="#060619"
                  strokeWidth="0.8"
                />
                <path
                  d="M11.6641 20.332L28.3307 20.332"
                  stroke="#060619"
                  strokeWidth="0.6"
                  stroke-linecap="round"
                />
                <path
                  d="M21.6641 24.4987C21.6641 23.713 21.6641 23.3202 21.9081 23.0761C22.1522 22.832 22.5451 22.832 23.3307 22.832C24.1164 22.832 24.5092 22.832 24.7533 23.0761C24.9974 23.3202 24.9974 23.713 24.9974 24.4987C24.9974 25.2844 24.9974 25.6772 24.7533 25.9213C24.5092 26.1654 24.1164 26.1654 23.3307 26.1654C22.5451 26.1654 22.1522 26.1654 21.9081 25.9213C21.6641 25.6772 21.6641 25.2844 21.6641 24.4987Z"
                  stroke="#060619"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <h3 className="font-medium text-[060619] text-[20px] leading-[26px] tracking-normal text-left md:text-center mb-2">
              Your money is always safe, your purchases always guaranteed.
            </h3>
            <p className="text-[#4e5464]  text-left md:text-center">
              Shop securely with <strong>AI-powered Escrow payment</strong>. Our
              platform is constantly monitored to ensure verified sellers.
            </p>
          </div>

          {/* Feature 3 (Original Desktop Styling) */}
          <div className="bg-white rounded-[8px]">
            <div className="text-2xl mb-3 text-left md:text-center flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.8284 20.8284C36 19.6569 36 17.7712 36 14C36 10.2288 36 8.34315 34.8284 7.17157M34.8284 20.8284C33.6569 22 31.7712 22 28 22H20C16.2288 22 14.3431 22 13.1716 20.8284M34.8284 20.8284C34.8284 20.8284 34.8284 20.8284 34.8284 20.8284ZM34.8284 7.17157C33.6569 6 31.7712 6 28 6L20 6C16.2288 6 14.3431 6 13.1716 7.17157M34.8284 7.17157C34.8284 7.17157 34.8284 7.17157 34.8284 7.17157ZM13.1716 7.17157C12 8.34315 12 10.2288 12 14C12 17.7712 12 19.6569 13.1716 20.8284M13.1716 7.17157C13.1716 7.17157 13.1716 7.17157 13.1716 7.17157ZM13.1716 20.8284C13.1716 20.8284 13.1716 20.8284 13.1716 20.8284Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M26 14C26 15.1046 25.1046 16 24 16C22.8954 16 22 15.1046 22 14C22 12.8954 22.8954 12 24 12C25.1046 12 26 12.8954 26 14Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M36 12C32.6863 12 30 9.31371 30 6"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M36 16C32.6863 16 30 18.6863 30 22"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12C15.3137 12 18 9.31371 18 6"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 16C15.3137 16 18 18.6863 18 22"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 40.7768H14.5199C16.5416 40.7768 18.5851 40.9874 20.5527 41.3928C24.0331 42.1098 27.6977 42.1967 31.2139 41.6275C32.9476 41.3469 34.6521 40.9178 36.195 40.1731C37.5878 39.5008 39.2939 38.5532 40.4399 37.4918C41.5842 36.432 42.776 34.6974 43.6219 33.3415C44.3472 32.1788 43.9964 30.7524 42.8491 29.8861C41.5746 28.9238 39.6834 28.924 38.4092 29.8865L34.7949 32.6169C33.3941 33.675 31.8639 34.6491 30.0411 34.9398C29.822 34.9748 29.5923 35.0066 29.3527 35.0344M29.3527 35.0344C29.2806 35.0427 29.2075 35.0507 29.1336 35.0583M29.3527 35.0344C29.6443 34.9719 29.9339 34.7921 30.2055 34.555C31.4919 33.4322 31.5733 31.54 30.4571 30.2863C30.1981 29.9954 29.8951 29.7528 29.5581 29.5518C23.9635 26.2149 15.2588 28.7564 10 32.4858M29.3527 35.0344C29.2797 35.05 29.2066 35.0583 29.1336 35.0583M29.1336 35.0583C28.0869 35.1658 26.8623 35.1936 25.5035 35.0653"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <rect
                  x="4"
                  y="28"
                  width="6"
                  height="16"
                  rx="1.5"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h3 className="font-medium text-[060619] text-[20px] leading-[33px] tracking-normal text-left md:text-center mb-2">
              Instant Support & Flexible Payments.
            </h3>
            <p className="text-[#4e5464]  text-left md:text-center">
              Enjoy the flexibility to get what you need today and pay over time
              using our <strong>Buy Now Pay Later offer</strong>.
            </p>
          </div>

          {/* Feature 4 (Original Desktop Styling and Positioning) */}
          <div className="bg-white rounded-[8px] h-[286px] p-5 col-span-full lg:col-span-1 lg:col-start-2">
            <div className="text-3xl mb-3 text-left md:text-center flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 44C28.8366 44 36 36.8366 36 28C36 19.1634 28.8366 12 20 12C11.1634 12 4 19.1634 4 28C4 30.471 4.56015 32.8112 5.5604 34.9005C5.90419 35.6186 6.02489 36.4321 5.81911 37.2012L5.16302 39.6533C4.64591 41.586 6.41403 43.3541 8.3467 42.837L10.7988 42.1809C11.5679 41.9751 12.3814 42.0958 13.0995 42.4396C15.1888 43.4398 17.529 44 20 44Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M36 29.0037C36.1329 28.9482 36.2648 28.8906 36.3955 28.831C37.1196 28.5002 37.9321 28.3765 38.7012 28.5822L39.6533 28.837C41.586 29.3541 43.3541 27.586 42.837 25.6533L42.5822 24.7012C42.3765 23.9321 42.5002 23.1196 42.831 22.3954C43.5817 20.752 44 18.9248 44 17C44 9.8203 38.1797 4 31 4C25.5955 4 20.9612 7.29797 19 11.9912"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M13.0395 28H13.0575M20.0209 28H20.0389M27.0029 28H27.0209"
                  stroke="#060619"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-[20px] font-medium text-[#060619] mb-2 text-left md:text-center">
              Instant Support with our AI Chatbot.
            </h3>
            <p className="text-[#4e5464]  text-left md:text-center">
              Get instant answers to your questions and 24/7 support. No long
              waits, just quick solutions.
            </p>
          </div>
        </div>
        {/* Positioned Phone Image (Desktop) - Reverted to original code */}
        <div className="overflow-hidden">
          <div className="absolute bottom-[30px] right-[-30px] rotate-[11deg] z-[1]">
            <Image
              src="/imagessFolder/featuresFrame.png"
              alt="Phone UI"
              width={368} // increased from 668
              height={718} // increased from 1340
              className="w-[368px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
      {/* TABLET LAYOUT (visible ONLY on md, hidden on sm and lg) */}
      {/* Changed justify-center to justify-between, items-center to items-start, added negative margin to image */}
      <div className="hidden md:flex lg:hidden flex-row items-start justify-between gap-10 lg:gap-20 relative z-10 max-w-[1212px] mx-auto">
        {/* Left Side: 2x2 Grid of Feature Cards */}
        {/* Adjusted width to md:w-2/3 to make cards section wider */}
        <div className="md:w-2/3 grid grid-cols-1 gap-x-8 gap-y-10">
          <FeatureCardItem
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 36C16.6569 36 18 37.3431 18 39C18 40.6569 16.6569 42 15 42C13.3431 42 12 40.6569 12 39C12 37.3431 13.3431 36 15 36Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M33 36.0001C34.6569 36.0001 36 37.3433 36 39.0001C36 40.657 34.6569 42.0001 33 42.0001C31.3431 42.0001 30 40.657 30 39.0001C30 37.3433 31.3431 36.0001 33 36.0001Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M4.52242 6.18367L4.77118 5.47613H4.77118L4.52242 6.18367ZM4.24876 5.29246C3.85799 5.15507 3.42984 5.36048 3.29246 5.75124C3.15507 6.14201 3.36048 6.57016 3.75124 6.70754L4.24876 5.29246ZM9.17168 8.64596L9.79091 8.22281L9.79091 8.22281L9.17168 8.64596ZM11.7754 29.1723L11.2312 29.6884L11.7754 29.1723ZM41.3155 19.7655L42.0501 19.9169L42.051 19.9123L41.3155 19.7655ZM40.316 24.6149L41.0506 24.7663L40.316 24.6149ZM41.469 13.3942L40.8746 13.8515L41.469 13.3942ZM38.2672 30.1008L37.7934 29.5194L38.2672 30.1008ZM9.91616 19.52H10.6662V14.0767H9.91616H9.16616V19.52H9.91616ZM4.52242 6.18367L4.77118 5.47613L4.24876 5.29246L4 6L3.75124 6.70754L4.27366 6.89122L4.52242 6.18367ZM21.875 31V31.75H32.4807V31V30.25H21.875V31ZM9.91616 14.0767H10.6662C10.6662 12.646 10.6672 11.5132 10.5687 10.6038C10.4685 9.6776 10.259 8.90782 9.79091 8.22281L9.17168 8.64596L8.55245 9.06911C8.82883 9.47356 8.99159 9.97205 9.07745 10.7653C9.16514 11.5753 9.16616 12.6132 9.16616 14.0767H9.91616ZM4.52242 6.18367L4.27366 6.89122C5.59207 7.35474 6.51892 7.68189 7.21369 8.0228C7.88884 8.35408 8.27827 8.66789 8.55245 9.06911L9.17168 8.64596L9.79091 8.22281C9.3206 7.53459 8.687 7.07487 7.87444 6.67617C7.0815 6.2871 6.05596 5.92783 4.77118 5.47613L4.52242 6.18367ZM9.91616 19.52H9.16616C9.16616 22.4433 9.19559 24.4688 9.45676 25.9936C9.72719 27.5725 10.2517 28.6553 11.2312 29.6884L11.7754 29.1723L12.3197 28.6563C11.5663 27.8617 11.1612 27.0599 10.9352 25.7404C10.7 24.3667 10.6662 22.4798 10.6662 19.52H9.91616ZM21.875 31V30.25C19.0637 30.25 17.0348 30.2482 15.4886 30.029C13.9683 29.8134 13.0254 29.4007 12.3197 28.6563L11.7754 29.1723L11.2312 29.6884C12.2582 30.7716 13.5762 31.2728 15.278 31.5141C16.9539 31.7518 19.1084 31.75 21.875 31.75V31ZM9.91616 12.24V12.99H34.1777V12.24V11.49H9.91616V12.24ZM41.3155 19.7655L40.581 19.6141L39.5815 24.4635L40.316 24.6149L41.0506 24.7663L42.0501 19.9169L41.3155 19.7655ZM34.1777 12.24V12.99C35.8765 12.99 37.4306 12.991 38.6708 13.1296C39.289 13.1987 39.794 13.2987 40.1804 13.4345C40.5728 13.5724 40.7766 13.7241 40.8746 13.8515L41.469 13.3942L42.0635 12.9369C41.7175 12.4872 41.2091 12.2061 40.6777 12.0193C40.1402 11.8305 39.5098 11.7141 38.8374 11.6389C37.4963 11.489 35.8487 11.49 34.1777 11.49V12.24ZM41.3155 19.7655L42.051 19.9123C42.3938 18.1949 42.6677 16.8313 42.7341 15.7546C42.8016 14.6615 42.6673 13.7218 42.0635 12.9369L41.469 13.3942L40.8746 13.8515C41.1586 14.2207 41.2947 14.7276 41.237 15.6621C41.1783 16.613 40.9315 17.858 40.58 19.6187L41.3155 19.7655ZM32.4807 31V31.75C34.023 31.75 35.2475 31.7513 36.2221 31.632C37.217 31.5103 38.0387 31.2546 38.741 30.6822L38.2672 30.1008L37.7934 29.5194C37.3924 29.8462 36.8818 30.0401 36.0398 30.1432C35.1775 30.2487 34.0605 30.25 32.4807 30.25V31ZM40.316 24.6149L39.5815 24.4635C39.2626 26.0108 39.0358 27.1045 38.7584 27.9278C38.4875 28.7316 38.1945 29.1926 37.7934 29.5194L38.2672 30.1008L38.741 30.6822C39.4434 30.1098 39.8597 29.3567 40.1798 28.4068C40.4933 27.4765 40.7393 26.2768 41.0506 24.7663L40.316 24.6149Z"
                  fill="#060619"
                />
                <path
                  d="M28.5 21.5V20.5H27.5V19.5C27.4992 19.235 27.3936 18.9811 27.2062 18.7938C27.0189 18.6064 26.765 18.5008 26.5 18.5H25.5V17.5H24.5V18.5H23.5V17.5H22.5V18.5H21.5C21.235 18.5008 20.9811 18.6064 20.7938 18.7938C20.6064 18.9811 20.5008 19.235 20.5 19.5V20.5H19.5V21.5H20.5V22.5H19.5V23.5H20.5V24.5C20.5008 24.765 20.6064 25.0189 20.7938 25.2062C20.9811 25.3936 21.235 25.4992 21.5 25.5H22.5V26.5H23.5V25.5H24.5V26.5H25.5V25.5H26.5C26.765 25.4992 27.0189 25.3936 27.2062 25.2062C27.3936 25.0189 27.4992 24.765 27.5 24.5V23.5H28.5V22.5H27.5V21.5H28.5ZM26.5 24.5H21.5V19.5H26.5V24.5Z"
                  fill="#060619"
                />
                <path
                  d="M23.6775 20H23.005L22 24H22.5135L22.7455 23.0625H23.9035L24.1295 24H24.6605L23.6775 20ZM22.813 22.662L23.322 20.475H23.345L23.8365 22.662H22.813ZM25.119 20H25.619V24H25.119V20Z"
                  fill="#060619"
                />
              </svg>
            }
            title="Experience the Future of Shopping using AI."
            description={
              <p>
                Discover the new way of shopping with{" "}
                <strong>AI smart assistant</strong> . Shop effortlessly using
                voice, text or image.
              </p>
            }
            isIconCentered={true} // Centered icons/headings for tablet/desktop
            iconBgColorMobile="bg-green-100" // Added mobile icon background
          />
          <FeatureCardItem
            icon={
              <svg
                width="40"
                height="43"
                viewBox="0 0 40 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 18.6638C5 12.9348 5 10.0703 5.62919 9.10663C6.25839 8.14295 8.76387 7.22099 13.7749 5.37707L14.7295 5.02577C17.3416 4.06458 18.6477 3.58398 20 3.58398C21.3523 3.58398 22.6584 4.06458 25.2705 5.02577L26.2251 5.37707C31.2361 7.22099 33.7416 8.14295 34.3708 9.10663C35 10.0703 35 12.9348 35 18.6638C35 19.5292 35 20.4676 35 21.4852C35 31.5867 27.9351 36.4888 23.5024 38.5704C22.3 39.135 21.6988 39.4173 20 39.4173C18.3012 39.4173 17.7 39.135 16.4976 38.5703C12.0649 36.4888 5 31.5867 5 21.4852C5 20.4676 5 19.5292 5 18.6638Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.6641 21.9987C11.6641 18.856 11.6641 17.2847 12.6404 16.3083C13.6167 15.332 15.188 15.332 18.3307 15.332H21.6641C24.8068 15.332 26.3781 15.332 27.3544 16.3083C28.3307 17.2847 28.3307 18.856 28.3307 21.9987C28.3307 25.1414 28.3307 26.7127 27.3544 27.6891C26.3968 28.8422 24.8252 28.8399 21.6641 28.6654H18.3307C15.188 28.6654 13.6167 28.6654 12.6404 27.6891C11.6641 26.7127 11.6641 25.1414 11.6641 21.9987Z"
                  stroke="#060619"
                  strokeWidth="0.8"
                />
                <path
                  d="M11.6641 20.332L28.3307 20.332"
                  stroke="#060619"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                />
                <path
                  d="M21.6641 24.4987C21.6641 23.713 21.6641 23.3202 21.9081 23.0761C22.1522 22.832 22.5451 22.832 23.3307 22.832C24.1164 22.832 24.5092 22.832 24.7533 23.0761C24.9974 23.3202 24.9974 23.713 24.9974 24.4987C24.9974 25.2844 24.9974 25.6772 24.7533 25.9213C24.5092 26.1654 24.1164 26.1654 23.3307 26.1654C22.5451 26.1654 22.1522 26.1654 21.9081 25.9213C21.6641 25.6772 21.6641 25.2844 21.6641 24.4987Z"
                  stroke="#060619"
                  strokeWidth="0.5"
                />
              </svg>
            }
            title="Your money is always safe, your purchases always guaranteed."
            description={
              <p>
                Shop securely with <strong>AI-powered Escrow payment</strong> .
                Our platform is constantly monitored to ensure verified sellers.
              </p>
            }
            isIconCentered={true} // Centered icons/headings for tablet/desktop
            iconBgColorMobile="bg-red-100" // Added mobile icon background
          />
          <FeatureCardItem
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.8284 20.8284C36 19.6569 36 17.7712 36 14C36 10.2288 36 8.34315 34.8284 7.17157M34.8284 20.8284C33.6569 22 31.7712 22 28 22H20C16.2288 22 14.3431 22 13.1716 20.8284M34.8284 20.8284C34.8284 20.8284 34.8284 20.8284 34.8284 20.8284ZM34.8284 7.17157C33.6569 6 31.7712 6 28 6L20 6C16.2288 6 14.3431 6 13.1716 7.17157M34.8284 7.17157C34.8284 7.17157 34.8284 7.17157 34.8284 7.17157ZM13.1716 7.17157C12 8.34315 12 10.2288 12 14C12 17.7712 12 19.6569 13.1716 20.8284M13.1716 7.17157C13.1716 7.17157 13.1716 7.17157 13.1716 7.17157ZM13.1716 20.8284C13.1716 20.8284 13.1716 20.8284 13.1716 20.8284Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M26 14C26 15.1046 25.1046 16 24 16C22.8954 16 22 15.1046 22 14C22 12.8954 22.8954 12 24 12C25.1046 12 26 12.8954 26 14Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M36 12C32.6863 12 30 9.31371 30 6"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M36 16C32.6863 16 30 18.6863 30 22"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12C15.3137 12 18 9.31371 18 6"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 16C15.3137 16 18 18.6863 18 22"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 40.7768H14.5199C16.5416 40.7768 18.5851 40.9874 20.5527 41.3928C24.0331 42.1098 27.6977 42.1967 31.2139 41.6275C32.9476 41.3469 34.6521 40.9178 36.195 40.1731C37.5878 39.5008 39.2939 38.5532 40.4399 37.4918C41.5842 36.432 42.776 34.6974 43.6219 33.3415C44.3472 32.1788 43.9964 30.7524 42.8491 29.8861C41.5746 28.9238 39.6834 28.924 38.4092 29.8865L34.7949 32.6169C33.3941 33.675 31.8639 34.6491 30.0411 34.9398C29.822 34.9748 29.5923 35.0066 29.3527 35.0344M29.3527 35.0344C29.2806 35.0427 29.2075 35.0507 29.1336 35.0583M29.3527 35.0344C29.6443 34.9719 29.9339 34.7921 30.2055 34.555C31.4919 33.4322 31.5733 31.54 30.4571 30.2863C30.1981 29.9954 29.8951 29.7528 29.5581 29.5518C23.9635 26.2149 15.2588 28.7564 10 32.4858M29.3527 35.0344C29.2797 35.05 29.2066 35.0583 29.1336 35.0583M29.1336 35.0583C28.0869 35.1658 26.8623 35.1936 25.5035 35.0653"
                  stroke="#060619"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <rect
                  x="4"
                  y="28"
                  width="6"
                  height="16"
                  rx="1.5"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
              </svg>
            }
            title="Instant Support & Flexible Payments."
            description={
              <p>
                "Enjoy the flexibility to get what you need today and pay over
                time using our <strong>Buy Now Pay Later offer</strong>.
              </p>
            }
            isIconCentered={true} // Centered icons/headings for tablet/desktop
            iconBgColorMobile="bg-orange-100" // Added mobile icon background
          />
          <FeatureCardItem
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 44C28.8366 44 36 36.8366 36 28C36 19.1634 28.8366 12 20 12C11.1634 12 4 19.1634 4 28C4 30.471 4.56015 32.8112 5.5604 34.9005C5.90419 35.6186 6.02489 36.4321 5.81911 37.2012L5.16302 39.6533C4.64591 41.586 6.41403 43.3541 8.3467 42.837L10.7988 42.1809C11.5679 41.9751 12.3814 42.0958 13.0995 42.4396C15.1888 43.4398 17.529 44 20 44Z"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M36 29.0037C36.1329 28.9482 36.2648 28.8906 36.3955 28.831C37.1196 28.5002 37.9321 28.3765 38.7012 28.5822L39.6533 28.837C41.586 29.3541 43.3541 27.586 42.837 25.6533L42.5822 24.7012C42.3765 23.9321 42.5002 23.1196 42.831 22.3954C43.5817 20.752 44 18.9248 44 17C44 9.8203 38.1797 4 31 4C25.5955 4 20.9612 7.29797 19 11.9912"
                  stroke="#060619"
                  strokeWidth="1.5"
                />
                <path
                  d="M13.0395 28H13.0575M20.0209 28H20.0389M27.0029 28H27.0209"
                  stroke="#060619"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Instant Support with our AI Chatbot."
            description="Get instant answers to your questions and 24/7 support. No long waits, just quick solutions."
            isIconCentered={true} // Centered icons/headings for tablet/desktop
            iconBgColorMobile="bg-teal-100" // Added mobile icon background
          />
        </div>

        {/* Right Side: Positioned Phone Image */}
        {/* Removed rotation, align to top, added negative margin to move it up */}
        <div className="md:w-1/3 flex justify-center items-start -mt-4 -mr-8">
          {" "}
          {/* Added md:pr-4 for inset */}
          <Image
            src="/imagessFolder/right tab frame.png"
            alt="Phone UI"
            width={369}
            height={720}
            className="object-contain w-full h-auto max-w-[350px]"
          />
        </div>
      </div>
      {/* MOBILE LAYOUT (visible ONLY below md breakpoint) */}
      <div className="md:hidden grid grid-cols-1 gap-y-8 relative z-10 max-w-[1212px] mx-auto">
        <div className="p-4 rounded-[12px] shadow-md border border-slate-100">
          <FeatureCardItem
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 27C12.4926 27 13.5 28.0074 13.5 29.25C13.5 30.4926 12.4926 31.5 11.25 31.5C10.0074 31.5 9 30.4926 9 29.25C9 28.0074 10.0074 27 11.25 27Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M24.75 27.0001C25.9926 27.0001 27 28.0075 27 29.2501C27 30.4928 25.9926 31.5001 24.75 31.5001C23.5074 31.5001 22.5 30.4928 22.5 29.2501C22.5 28.0075 23.5074 27.0001 24.75 27.0001Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M3.39181 4.63775L3.64057 3.93021L3.39181 4.63775ZM3.24876 3.79246C2.85799 3.65507 2.42984 3.86048 2.29246 4.25124C2.15507 4.64201 2.36048 5.07016 2.75124 5.20754L3.24876 3.79246ZM6.87876 6.48447L7.49799 6.06132V6.06132L6.87876 6.48447ZM8.83158 21.8793L8.28731 22.3953L8.83158 21.8793ZM30.9867 14.8241L31.7212 14.9755L31.7221 14.9709L30.9867 14.8241ZM30.237 18.4612L30.9716 18.6126V18.6126L30.237 18.4612ZM31.1018 10.0456L30.5073 10.5029V10.5029L31.1018 10.0456ZM28.7004 22.5756L28.2266 21.9942L28.7004 22.5756ZM7.43712 14.64H8.18712V10.5575H7.43712H6.68712V14.64H7.43712ZM3.39181 4.63775L3.64057 3.93021L3.24876 3.79246L3 4.5L2.75124 5.20754L3.14306 5.3453L3.39181 4.63775ZM16.4062 23.25V24H24.3605V23.25V22.5H16.4062V23.25ZM7.43712 10.5575H8.18712C8.18712 9.48861 8.18814 8.62717 8.11297 7.93271C8.03597 7.22139 7.87303 6.61014 7.49799 6.06132L6.87876 6.48447L6.25953 6.90762C6.44285 7.17589 6.55908 7.51585 6.62168 8.09413C6.6861 8.68927 6.68712 9.45582 6.68712 10.5575H7.43712ZM3.39181 4.63775L3.14306 5.3453C4.13606 5.69442 4.81887 5.93577 5.32767 6.18543C5.81686 6.42546 6.07841 6.64258 6.25953 6.90762L6.87876 6.48447L7.49799 6.06132C7.12074 5.50928 6.61502 5.14625 5.98842 4.8388C5.38144 4.54097 4.59995 4.26751 3.64057 3.93021L3.39181 4.63775ZM7.43712 14.64H6.68712C6.68712 16.8279 6.70865 18.3643 6.90776 19.5268C7.11614 20.7435 7.52447 21.5907 8.28731 22.3953L8.83158 21.8793L9.37584 21.3632C8.83907 20.7971 8.55018 20.2309 8.38623 19.2736C8.21302 18.2623 8.18712 16.8644 8.18712 14.64H7.43712ZM16.4062 23.25V22.5C14.2922 22.5 12.7862 22.4982 11.6428 22.3361C10.5252 22.1776 9.86498 21.8792 9.37584 21.3632L8.83158 21.8793L8.28731 22.3953C9.09777 23.2501 10.1332 23.637 11.4322 23.8212C12.7053 24.0018 14.3369 24 16.4062 24V23.25ZM7.43712 9.18V9.93H25.6332V9.18V8.43H7.43712V9.18ZM30.9867 14.8241L30.2521 14.6727L29.5025 18.3098L30.237 18.4612L30.9716 18.6126L31.7212 14.9755L30.9867 14.8241ZM25.6332 9.18V9.93C26.9109 9.93 28.0648 9.931 28.9822 10.0336C29.4391 10.0846 29.8023 10.1576 30.0732 10.2528C30.3501 10.3501 30.4648 10.4477 30.5073 10.5029L31.1018 10.0456L31.6962 9.58832C31.4058 9.21076 30.9864 8.98376 30.5704 8.8376C30.1485 8.68933 29.66 8.59998 29.1489 8.54285C28.1304 8.429 26.8831 8.43 25.6332 8.43V9.18ZM30.9867 14.8241L31.7221 14.9709C31.9782 13.6883 32.1869 12.6508 32.2377 11.8275C32.2896 10.9878 32.1891 10.229 31.6962 9.58832L31.1018 10.0456L30.5073 10.5029C30.6804 10.7279 30.7826 11.054 30.7406 11.7351C30.6976 12.4324 30.5158 13.3514 30.2512 14.6773L30.9867 14.8241ZM24.3605 23.25V24C25.5125 24 26.4444 24.0013 27.1893 23.9101C27.9547 23.8165 28.6098 23.617 29.1742 23.157L28.7004 22.5756L28.2266 21.9942C27.9635 22.2086 27.6194 22.3463 27.0071 22.4213C26.3743 22.4987 25.5501 22.5 24.3605 22.5V23.25ZM30.237 18.4612L29.5025 18.3098C29.2623 19.4749 29.0947 20.2819 28.8911 20.886C28.6941 21.4706 28.4898 21.7798 28.2266 21.9942L28.7004 22.5756L29.1742 23.157C29.7386 22.697 30.0663 22.0957 30.3125 21.365C30.5522 20.6538 30.739 19.7409 30.9716 18.6126L30.237 18.4612Z"
                  fill="white"
                />
                <path
                  d="M21.375 20.125V19.375H20.625V18.625C20.6244 18.4263 20.5452 18.2358 20.4047 18.0953C20.2642 17.9548 20.0737 17.8756 19.875 17.875H19.125V17.125H18.375V17.875H17.625V17.125H16.875V17.875H16.125C15.9263 17.8756 15.7358 17.9548 15.5953 18.0953C15.4548 18.2358 15.3756 18.4263 15.375 18.625V19.375H14.625V20.125H15.375V20.875H14.625V21.625H15.375V22.375C15.3756 22.5737 15.4548 22.7642 15.5953 22.9047C15.7358 23.0452 15.9263 23.1244 16.125 23.125H16.875V23.875H17.625V23.125H18.375V23.875H19.125V23.125H19.875C20.0737 23.1244 20.2642 23.0452 20.4047 22.9047C20.5452 22.7642 20.6244 22.5737 20.625 22.375V21.625H21.375V20.875H20.625V20.125H21.375ZM19.875 22.375H16.125V18.625H19.875V22.375Z"
                  fill="white"
                />
                <path
                  d="M17.7581 19H17.2538L16.5 22H16.8851L17.0591 21.2969H17.9276L18.0971 22H18.4954L17.7581 19ZM17.1098 20.9965L17.4915 19.3562H17.5088L17.8774 20.9965H17.1098ZM18.8393 19H19.2143V22H18.8393V19Z"
                  fill="white"
                />
              </svg>
            }
            title="Experience the Future of Shopping using AI."
            description="Discover the new way of shopping with AI smart assistant. Shop effortlessly using voice, text or image."
            isIconCentered={false} // Left-aligned icons/headings for mobile
            iconBgColorMobile="bg-[#C479BD]" // Applied specific color for mobile
          />
        </div>
        <div className="p-4 rounded-[12px] shadow-md border border-slate-100">
          <FeatureCardItem
            icon={
              <svg
                width="30"
                height="33"
                viewBox="0 0 30 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 14.3229C3.75 9.92622 3.75 7.72788 4.22189 6.98831C4.69379 6.24874 6.57291 5.54119 10.3311 4.12609L11.0472 3.85649C13.0062 3.11883 13.9858 2.75 15 2.75C16.0142 2.75 16.9938 3.11883 18.9528 3.85649L19.6689 4.12609C23.4271 5.54119 25.3062 6.24874 25.7781 6.98831C26.25 7.72788 26.25 9.92622 26.25 14.3229C26.25 14.987 26.25 15.7072 26.25 16.4881C26.25 24.2405 20.9513 28.0025 17.6268 29.6C16.725 30.0333 16.2741 30.25 15 30.25C13.7259 30.25 13.275 30.0333 12.3732 29.6C9.0487 28.0025 3.75 24.2405 3.75 16.4881C3.75 15.7072 3.75 14.987 3.75 14.3229Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.75 16.8819C8.75 14.4701 8.75 13.2641 9.48223 12.5149C10.2145 11.7656 11.393 11.7656 13.75 11.7656H16.25C18.607 11.7656 19.7855 11.7656 20.5178 12.5149C21.25 13.2641 21.25 14.4701 21.25 16.8819C21.25 19.2937 21.25 20.4997 20.5178 21.2489C19.7995 22.1339 18.6208 22.1321 16.25 21.9982H13.75C11.393 21.9982 10.2145 21.9982 9.48223 21.2489C8.75 20.4997 8.75 19.2937 8.75 16.8819Z"
                  stroke="white"
                  strokeWidth="0.8"
                />
                <path
                  d="M8.75 15.6035L21.25 15.6035"
                  stroke="white"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                />
                <path
                  d="M16.25 18.8006C16.25 18.1976 16.25 17.8961 16.4331 17.7088C16.6161 17.5215 16.9107 17.5215 17.5 17.5215C18.0893 17.5215 18.3839 17.5215 18.5669 17.7088C18.75 17.8961 18.75 18.1976 18.75 18.8006C18.75 19.4035 18.75 19.705 18.5669 19.8923C18.3839 20.0796 18.0893 20.0796 17.5 20.0796C16.9107 20.0796 16.6161 20.0796 16.4331 19.8923C16.25 19.705 16.25 19.4035 16.25 18.8006Z"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            }
            title="Your money is always safe, your purchases always guaranteed."
            description="Shop securely with AI-powered Escrow payment. Our platform is constantly monitored to ensure verified sellers."
            isIconCentered={false} // Left-aligned icons/headings for mobile
            iconBgColorMobile="bg-[#31C48D]" // Applied specific color for mobile
          />
        </div>{" "}
        <div className="p-4 rounded-[12px] shadow-md border border-slate-100">
          <FeatureCardItem
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
                  strokeWidth="1.5"
                />
                <path
                  d="M19.5 10.5C19.5 11.3284 18.8284 12 18 12C17.1716 12 16.5 11.3284 16.5 10.5C16.5 9.67157 17.1716 9 18 9C18.8284 9 19.5 9.67157 19.5 10.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M27 9C24.5147 9 22.5 6.98528 22.5 4.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M27 12C24.5147 12 22.5 14.0147 22.5 16.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9 9C11.4853 9 13.5 6.98528 13.5 4.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9 12C11.4853 12 13.5 14.0147 13.5 16.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7.5 30.5826H10.8899C12.4062 30.5826 13.9388 30.7405 15.4145 31.0446C18.0249 31.5824 20.7733 31.6475 23.4104 31.2206C24.7107 31.0101 25.9891 30.6883 27.1462 30.1298C28.1908 29.6256 29.4704 28.9149 30.3299 28.1189C31.1882 27.324 32.082 26.023 32.7164 25.0061C33.2604 24.1341 32.9973 23.0643 32.1368 22.4146C31.181 21.6928 29.7626 21.693 28.8069 22.4149L26.0961 24.4626C25.0456 25.2563 23.898 25.9868 22.5309 26.2049C22.3665 26.2311 22.1943 26.255 22.0145 26.2758M22.0145 26.2758C21.9604 26.2821 21.9057 26.2881 21.8502 26.2937M22.0145 26.2758C22.2332 26.2289 22.4504 26.0941 22.6541 25.9162C23.6189 25.0742 23.68 23.655 22.8428 22.7147C22.6486 22.4965 22.4213 22.3146 22.1686 22.1638C17.9726 19.6612 11.4441 21.5673 7.5 24.3644M22.0145 26.2758C21.9598 26.2875 21.905 26.2937 21.8502 26.2937M21.8502 26.2937C21.0652 26.3743 20.1467 26.3952 19.1276 26.2989"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <rect
                  x="3"
                  y="21"
                  width="4.5"
                  height="12"
                  rx="1.5"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            }
            title="Instant Support & Flexible Payments."
            description="Enjoy the flexibility to get what you need today and pay over time using our Buy Now Pay Later offer."
            isIconCentered={false} // Left-aligned icons/headings for mobile
            iconBgColorMobile="bg-[#F0745E]" // Applied specific color for mobile
          />
        </div>
        <div className="p-4 rounded-[12px] shadow-md border border-slate-100">
          <FeatureCardItem
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 33C21.6274 33 27 27.6274 27 21C27 14.3726 21.6274 9 15 9C8.37258 9 3 14.3726 3 21C3 22.8533 3.42011 24.6084 4.1703 26.1754C4.42814 26.7139 4.51867 27.3241 4.36433 27.9009L3.87227 29.74C3.48443 31.1895 4.81052 32.5156 6.26002 32.1277L8.09908 31.6357C8.6759 31.4813 9.28606 31.5719 9.82463 31.8297C11.3916 32.5799 13.1467 33 15 33Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M27 21.7528C27.0997 21.7112 27.1986 21.668 27.2966 21.6232C27.8397 21.3751 28.4491 21.2823 29.0259 21.4367L29.74 21.6277C31.1895 22.0156 32.5156 20.6895 32.1277 19.24L31.9367 18.5259C31.7823 17.9491 31.8751 17.3397 32.1232 16.7966C32.6862 15.564 33 14.1936 33 12.75C33 7.36522 28.6348 3 23.25 3C19.1966 3 15.7209 5.47348 14.25 8.9934"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M9.77375 21H9.78725M15.0098 21H15.0233M20.2463 21H20.2598"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Instant Support with our AI Chatbot."
            description="Get instant answers to your questions and 24/7 support. No long waits, just quick solutions."
            isIconCentered={false} // Left-aligned icons/headings for mobile
            iconBgColorMobile="bg-[#000222A3]" // Applied specific color for mobile
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
