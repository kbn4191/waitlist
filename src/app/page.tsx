// app/page.tsx
"use client";

import Navbar from "@/components/navBar/navBar";
import HeroSection from "@/components/heroSection/heroSection";
import GrowBusinessSection from "@/features/growBusinessSection/growYourBusiness";
import SellWithAI from "@/features/sellAiSection/sellWithAi";
import FeaturesSection from "@/features/features/features";
import ExclusiveWaitlist from "@/features/exclusiveSection/exclusiveWaitlist";
import HowToJoin from "@/features/howToJoin/howToJoin";
import Footer from "@/components/footerSection/footer";
import WaitlistSection from "@/features/joinWaitlist/waitlistSection";
import SneakPeakSlider from "@/features/sneakPeakSection/sneakPeak";
import PhoneSlider from "@/features/sneakPeakSection/sneakpeak2";

export default function Home() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      <div className=" opacity-100 overflow-hidden bg-white ">
        <Navbar />
        <div className="flex justify-center flex-col items-center">
          <div className=" md:px-0 mb-24 max-w-[1440px] ">
            <HeroSection />
            <GrowBusinessSection />
            <SellWithAI />
            <FeaturesSection />
            <ExclusiveWaitlist />
            <HowToJoin />

            <SneakPeakSlider />
            <WaitlistSection />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
