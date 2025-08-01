"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { HttpUtil } from "@/utils/http.utils";
import { useUtils } from "@/context/utils.context";
import { useToast } from "@/context/toast.context";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import {
  isValidEmailone,
  isValidNigerianNumber,
  nigeriaStates,
} from "@/utils/app.utils";

const WaitlistSection: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const { apiCaller } = useUtils();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!isValidNigerianNumber(phoneNumber)) {
      toast.error("Please use a valid phone number");
      setLoading(false);
      return;
    }
    if (!isValidEmailone(emailAddress)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }
    const verifyRes = await fetch("/api/verify-captcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: captchaToken }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      toast.error("reCAPTCHA verification failed, please try again.");
      setLoading(false);
      return;
    }

    console.log(verifyData);

    await (apiCaller() as HttpUtil).performApiCall(
      "v1/AddWaitList",
      (res: any, error: any, smessage: any) => {
        if (error) {
          setLoading(false);
          toast.error(error);
          return;
        }
        if (res) {
          setLoading(false);
          toast.success(smessage);
          setEmailAddress("");
          setFullName("");
          setPhoneNumber("");
          setLocation("");
        }
      },
      {
        data: {
          FullName: fullName,
          EmailAddress: emailAddress,
          Location: location,
          PhoneNumber: phoneNumber,
        },
        getMethod: false,
        silently: true,
      }
    );
  };

  return (
    <section
      id="join"
      className="w-full bg-white py-8 px-2 flex flex-col items-center justify-center scroll-mt-96"
    >
      <div className="lg:max-w-[1540px] lg:h-[808px] md:max-w-[1194px] md:h-[979px] sm:max-w-[428px] sm:h-[786px] w-full flex flex-col items-center">
        {/* Heading */}
        <div className="text-center px-4 sm:px-10">
          <h2 className="text-3xl md:text-[48px] lg:text-[48px] font-semibold text-gray-900 leading-tight md:w-[680px]">
            <span className="relative inline-block">
              Join
              <Image
                src="/imagessFolder/vector join now.png"
                alt="Underline"
                width={243}
                height={12}
                className="absolute bottom-0 left-0 z-0 translate-y-2"
              />
            </span>{" "}
            The KUVE Waitlist
          </h2>
          <p className="mt-2 text-base sm:text-lg md:text-2xl lg:text-2xl text-[#060619] font-[300] md:w-[680px] sm:w-[380px]">
            Be among the first 500 to experience the future of secure online
            trading.
          </p>
        </div>

        {/* Form */}
        <form
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 px-4 sm:px-0  md:w-[90%] lg:w-[70%] w-full"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-2">
            <label
              htmlFor="full-name"
              className="whitespace-nowrap text-[16px] font-[400] text-gray-700 text-left w-full sm:w-[170px] sm:text-right sm:pr-3"
            >
              <FaUser className="text-gray-500 mr-1 inline-block" /> Full name
              <span className="text-red-500">*</span>
            </label>
            <input
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="border  md:w-[84%] lg:w-[87%] h-[40px] border-gray-300 px-3 py-2 text-[#060619] rounded-md text-sm w-full focus:outline-none focus:ring-2-[#FF9D98] focus:border-[#FF9D98]"
              placeholder="Enter your full name"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-2">
            <label
              htmlFor="location"
              className="whitespace-nowrap text-[16px] font-[400] text-gray-700 text-left w-full sm:w-[170px] sm:text-right sm:pr-3"
            >
              Location
            </label>
            <select
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border md:w-[85%] lg:w-[90%] h-[40px] border-gray-300 px-3 py-2 text-[#060619] rounded-md text-sm w-full focus:outline-none focus:ring-2-[#FF9D98] focus:border-[#FF9D98]"
            >
              <option value="">Select Location</option>
              {nigeriaStates.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>

          {/* Email Address */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-2">
            <label
              htmlFor="email-address"
              className="whitespace-nowrap text-[16px] font-[400] text-gray-700 text-left w-full sm:w-[170px] sm:text-right sm:pr-3"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              autoComplete="email"
              required
              className="border h-[40px] border-gray-300 px-3 py-2 text-[#060619] rounded-md text-sm w-full focus:outline-none focus:ring-2-[#FF9D98] focus:border-[#FF9D98]"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-2">
            <label
              htmlFor="phone-number"
              className="whitespace-nowrap text-[16px] font-[400] text-gray-700 text-left w-full sm:w-[170px] sm:text-right sm:pr-3"
            >
              Phone Number
            </label>
            <input
              id="phone-number"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border h-[40px] border-gray-300 px-3 py-2 text-[#060619] rounded-md text-sm w-full focus:outline-none focus:ring-2-[#FF9D98] focus:border-[#FF9D98]"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 mt-6 flex justify-center  flex-col items-center gap-4">
            <div className="mt-2 flex justify-center w-full">
              {" "}
              <ReCAPTCHA
                className="flex justify-center"
                sitekey={process.env.NEXT_PUBLIC_SITEKEY!}
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="bg-[#FF9D98] hover:bg-[#ff8983] md:w-[390px] w-[70%] cursor-pointer text-[#060619] text-base font-[500] py-3 px-10 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9D98] shadow-lg transition duration-200"
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                  <p className="text-white">Joining </p>
                </div>
              ) : (
                "Join Waitlist"
              )}
            </button>
          </div>
        </form>

        {/* Bottom Image with animation */}
        <div className="w-full flex justify-center sm:px-10 mt-8">
          <motion.div
            className="overflow-hidden rounded-lg w-[380px] h-[203px] md:w-[1094px] md:h-[455px]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/imagessFolder/join waitlist bottom img.png"
              alt="KUVE Preview"
              width={1260}
              height={455}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
