'use client'
import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { LeadGenForm } from "@/Components/RequestDemoForm";
import { useParams, useSearchParams } from "next/navigation";

const Home = () => {

  const params = useSearchParams();
  const leads = params.get("leads");

  const [showLeadGenModal, setShowLeadGenModal] = useState(leads);

  console.log('showLeadGenModal', showLeadGenModal)
  return (
    <div className=" font-DMSans">
      {showLeadGenModal && <LeadGenForm setIsOpen={setShowLeadGenModal} />}
      <LandingPage />
    </div>
  );
};

export default Home;
