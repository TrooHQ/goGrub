import BoostBusiness from "@/Components/BoostBusiness";
import Calculator from "@/Components/Calculator";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import GetStarted from "@/Components/GetStarted";
import HeroSection from "@/Components/HeroSection";
import HowItWorks from "@/Components/HowItWorks";
import Modal from "@/Components/Modal";
import { ModalProvider } from "@/Components/ModalContext";
import Navbar from "@/Components/Navbar";
import OrderingSolution from "@/Components/OrderingSolution";
import Savings from "@/Components/Savings";
import React from "react";

const LandingPage = () => {
  return (
    <ModalProvider>
      <Modal />
      <div className="bg-[#FFF5F1] font-DMSans">
        <Navbar />
        <HeroSection />
        <BoostBusiness />
        <Savings />
        <HowItWorks />
        <OrderingSolution />
        <GetStarted />
        <div className=" bg-white">
          <Calculator />
          <Faq />
          <Footer />
        </div>
      </div>
    </ModalProvider>
  );
};

export default LandingPage;
