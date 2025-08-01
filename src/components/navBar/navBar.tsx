"use client";
import {
  useTheme,
  useMediaQuery,
  IconButton,
  Divider,
  Drawer,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { FaInfoCircle, FaStar, FaEye, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // Function to handle smooth scroll
  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };
  //no comment logo
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1440px] flex justify-center pt-[44px] md:pt-[26px]">
        <nav className="w-full fixed bg-white top-0 z-50 border-b border-[#ededed] flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-10 lg:px-30">
          {/* Logo */}
          <div className="flex justify-between items-center py-5 md:h-[76px] lg:h-[67px] w-full md:w-auto">
            <Image
              src="/imagessFolder/Logo.svg"
              alt="Kuve Logo"
              width={225.43}
              height={24.38}
              className="w-[130px] md:w-[225.43px]"
            />

            {/* Mobile Buttons */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => handleScroll("#join")}
                className="relative flex items-center justify-center px-4 h-[40px] bg-[#FF9D98] rounded-[64px] shadow overflow-hidden group whitespace-nowrap"
              >
                <div className="absolute top-0 left-0 h-full w-full bg-[#CE4A3E] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-[16px] font-[500] text-gray-950 flex gap-2 items-center">
                  Join the waitlist
                </span>
              </button>

              <IconButton
                sx={{
                  display: "flex",
                  justifyItems: "center",
                  justifyContent: "center",
                  mt: "4px",
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.8369 18.668C26.2511 18.668 26.5869 19.0038 26.5869 19.418C26.5869 19.8322 26.2511 20.168 25.8369 20.168H8.00391C7.58969 20.168 7.25391 19.8322 7.25391 19.418C7.25391 19.0038 7.58969 18.668 8.00391 18.668H25.8369ZM25.8369 11.668C26.2511 11.668 26.5869 12.0038 26.5869 12.418C26.5869 12.8322 26.2511 13.168 25.8369 13.168H8.00391C7.58969 13.168 7.25391 12.8322 7.25391 12.418C7.25391 12.0038 7.58969 11.668 8.00391 11.668H25.8369ZM25.833 4.66797C26.2472 4.66797 26.583 5.00376 26.583 5.41797C26.583 5.83218 26.2472 6.16797 25.833 6.16797H8C7.58579 6.16797 7.25 5.83218 7.25 5.41797C7.25 5.00376 7.58579 4.66797 8 4.66797H25.833Z"
                    fill="#060619"
                  />
                  <circle cx="3" cy="5" r="1" fill="#060619" />
                  <circle cx="3" cy="12" r="1" fill="#060619" />
                  <circle cx="3" cy="19" r="1" fill="#060619" />
                </svg>
              </IconButton>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-col md:flex-row md:items-center gap-[20px] text-sm font-medium text-gray-700 pt-2 md:pt-0">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => handleScroll("#about")}
                className="hover:text-[#F27C8D]"
              >
                About
              </button>
              <button
                onClick={() => handleScroll("#features")}
                className="hover:text-[#F27C8D]"
              >
                Features
              </button>
              <button
                onClick={() => handleScroll("#sneakPeak")}
                className="hover:text-[#F27C8D]"
              >
                Sneak Peak
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="hover:text-[#F27C8D]"
              >
                Contact us
              </button>
            </div>
            <button
              onClick={() => handleScroll("#join")}
              className="relative flex items-center justify-center px-4 h-[40px] bg-[#FF9D98] rounded-[64px] shadow overflow-hidden group"
            >
              <div className="absolute top-0 left-0 h-full w-full bg-[#eb6a5e] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-[16px] font-[500] text-gray-950 flex gap-2 items-center">
                Join the waitlist
              </span>
            </button>
          </div>

          {/* Mobile Drawer */}
          <Drawer
            anchor="bottom"
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            PaperProps={{
              sx: {
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              },
            }}
            SlideProps={{ direction: "up" }}
            transitionDuration={400}
            BackdropProps={{ invisible: isMdUp }}
          >
            <div className="flex px-6 space-y-3 flex-col gap-2 pt-4 text-sm font-medium text-gray-700 md:hidden">
              <button
                onClick={() => handleScroll("#about")}
                className="flex items-center gap-2 hover:text-[#F27C8D]"
              >
                <FaInfoCircle size={16} /> About
              </button>
              <Divider />
              <button
                onClick={() => handleScroll("#features")}
                className="flex items-center gap-2 hover:text-[#F27C8D]"
              >
                <FaStar size={16} /> Features
              </button>
              <Divider />
              <button
                onClick={() => handleScroll("#sneakPeak")}
                className="flex items-center gap-2 hover:text-[#F27C8D]"
              >
                <FaEye size={16} /> Sneak Peak
              </button>
              <Divider />
              <button
                onClick={() => handleScroll("#contact")}
                className="flex pb-12 items-center gap-2 hover:text-[#F27C8D]"
              >
                <FaEnvelope size={16} /> Contact us
              </button>
            </div>
          </Drawer>
        </nav>
      </div>
    </div>
  );
}
