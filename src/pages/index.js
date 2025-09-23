'use client'
import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import { LeadGenForm } from "@/Components/RequestDemoForm";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Home = () => {

  const router = useRouter();
  const { leads } = router.query;

  console.log("lead", leads);
  const params = useSearchParams();

  const [showLeadGenModal, setShowLeadGenModal] = useState(leads);


  useEffect(() => {
    setShowLeadGenModal(leads)
  }, [leads]);

  console.log('showLeadGenModal', showLeadGenModal)

  return (
    <div className=" font-DMSans">
      {showLeadGenModal && <LeadGenForm setIsOpen={setShowLeadGenModal} />}
      <LandingPage />
    </div>
  );
};

export default Home;
