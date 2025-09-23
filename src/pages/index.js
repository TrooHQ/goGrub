'use client'
import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import { LeadGenForm } from "@/Components/RequestDemoForm";
import { useRouter } from "next/router";

const Home = () => {

  const router = useRouter();
  const { leads } = router.query;

  const [showLeadGenModal, setShowLeadGenModal] = useState(leads);

  useEffect(() => {
    setShowLeadGenModal(leads)
  }, [leads]);

  return (
    <div className=" font-DMSans">
      {showLeadGenModal && <LeadGenForm setIsOpen={() => setShowLeadGenModal(false)} />}
      <LandingPage />
    </div>
  );
};

export default Home;
