import Benefits from "@/components/Benefits";
import BoostBusiness from "@/components/BoostBusiness";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import OrderingSolution from "@/components/OrderingSolution";
import Savings from "@/components/Savings";
import React from "react";

const LandingPage = () => {
  return (
    <div className=" font-DMSans">
      <Navbar />
      <HeroSection />
      <BoostBusiness />
      <Savings />
      <OrderingSolution />
      <HowItWorks />
      <Benefits />
      <GetStarted />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
