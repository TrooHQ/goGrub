import BoostBusiness from "@/Components/BoostBusiness";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import GetStarted from "@/Components/GetStarted";
import HeroSection from "@/Components/HeroSection";
import HowItWorks from "@/Components/HowItWorks";
import Navbar from "@/Components/Navbar";
import OrderingSolution from "@/Components/OrderingSolution";
import Savings from "@/Components/Savings";
import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-[#FFF5F1] font-DMSans">
      <Navbar />
      <HeroSection />
      <BoostBusiness />
      <Savings />
      <HowItWorks />
      <OrderingSolution />
      <GetStarted />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
