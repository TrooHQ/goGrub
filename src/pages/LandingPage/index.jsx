import Benefits from "@/Components/Benefits";
import BoostBusiness from "@/Components/BoostBusiness";
import HeroSection from "@/Components/HeroSection";
import HowItWorks from "@/Components/HowItWorks";
import Navbar from "@/Components/Navbar";
import OrderingSolution from "@/Components/OrderingSolution";
import Savings from "@/Components/Savings";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BoostBusiness />
      <Savings />
      <OrderingSolution />
      <HowItWorks />
      <Benefits />
    </div>
  );
};

export default LandingPage;
