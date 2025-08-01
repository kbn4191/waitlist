"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    title: "Join the waitlist",
    description: "Sign up with your email to secure your spot.",
    image: "/imagessFolder/howtojoin1.png",
  },
  {
    title: "Get notified at launch",
    description: "Be the first to know when KUVE goes live.",
    image: "/imagessFolder/how to join2.png",
  },
  {
    title: "Start buying and selling securely",
    description: "Begin your secure trading journey with exclusive perks.",
    image: "/imagessFolder/howtojoin3.png",
  },
];

/** Animation Variants (TypeScript Safe) */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }, // use string for TS compatibility
  },
};

export default function HowToJoin() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-[1260px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-[40px] font-semibold lg:text-[48px] text-[#1D1D1F]">
            <span className="relative inline-block scroll-pb-2 pb-2">
              How Do I Join?
              <Image
                src="/imagessFolder/vector 2.png"
                alt="Underline"
                width={243}
                height={12}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-[0]"
              />
            </span>
          </h2>
        </motion.div>

        {/* ✅ Desktop Grid Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-[60px] justify-items-center"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col items-center gap-4 max-w-[380px] w-full rounded-[10px]"
            >
              {/* Number + Text Block */}
              <div className="w-full text-left">
                <div className="text-[16px] font-semibold text-[#1D1D1F] mb-1">
                  {index + 1}.
                </div>
                <h3 className="text-lg font-[500]">{step.title}</h3>
                <p className="text-sm text-[#696f81] mt-1">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-2"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={230}
                  height={450}
                  className="rounded-lg object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ Mobile Layout */}
        <div className="block sm:hidden text-center mt-2">
          {/* Phone Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <Image
              src="/imagessFolder/howtojoin3.png"
              alt="KUVE app preview"
              width={250}
              height={300}
              className="mx-auto rounded-lg object-contain"
            />
          </motion.div>

          {/* Steps Stacked */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-start gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="gap-3 text-start"
              >
                <div className="flex gap-2 items-center">
                  {/* SVG Icon */}
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.67983 25.6932C6.17935 27.5 8.97024 27.5 14.552 27.5H15.4535C21.0352 27.5 23.8261 27.5 25.3257 25.6932M4.67983 25.6932C3.1803 23.8864 3.69462 21.1433 4.72328 15.6571C5.45481 11.7556 5.82057 9.80491 7.20919 8.65245M4.67983 25.6932C4.67982 25.6932 4.67983 25.6932 4.67983 25.6932ZM25.3257 25.6932C26.8252 23.8864 26.3109 21.1433 25.2822 15.6571C24.5507 11.7556 24.1849 9.80491 22.7963 8.65245M25.3257 25.6932C25.3257 25.6932 25.3257 25.6932 25.3257 25.6932ZM22.7963 8.65245C21.4077 7.5 19.4229 7.5 15.4535 7.5H14.552C10.5825 7.5 8.59781 7.5 7.20919 8.65245M22.7963 8.65245C22.7963 8.65245 22.7963 8.65245 22.7963 8.65245ZM7.20919 8.65245C7.20919 8.65245 7.20919 8.65245 7.20919 8.65245Z"
                      stroke="#FFA722"
                      strokeWidth="2"
                    />
                    <path
                      d="M12.5 17.875C13.1509 18.4608 13.5158 18.7892 14.1667 19.375L17.5 15.625"
                      stroke="#FFA722"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 7.5V6.25C11.25 4.17893 12.9289 2.5 15 2.5C17.0711 2.5 18.75 4.17893 18.75 6.25V7.5"
                      stroke="#FFA722"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="font-[500] text-[#1D1D1F]">{step.title}</p>
                </div>
                <p className="text-sm text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
