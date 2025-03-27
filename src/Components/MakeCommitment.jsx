"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MakeCommitment = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [openModal, setOpenModal] = useState(null);
  const [plans, setPlans] = useState([]);

  const features = {
    quarterly: [
      "Branded Online Store",
      "Custom Menu & Pricing",
      "Pickup & Delivery Scheduling",
      "Unique GoGrub URL",
    ],
    yearly: [
      "Branded Online Store",
      "Custom Menu & Pricing",
      "Pickup & Delivery Scheduling",
      "Unique GoGrub URL",
      "Real-Time Order Management",
      "Sales Report & Analysis",
      "Customer Insights & Data",
      "Automated Order Notifications",
      "Online Payment Processing (Low Transaction Fees)",
    ],
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleOpenModal = (plan) => {
    setOpenModal(plan);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const handleSubmit = async () => {
    if (!selectedPlan) {
      alert("Please select a plan before proceeding.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/commitment`,
        { plan: selectedPlan },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Commitment submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting commitment:", error);
      alert("An error occurred. Please try again.");
    }
  };
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/plan/getPlans?secretKey=trooAdminDev&planType=gogrub`
        );
        setPlans(response.data.data);
      } catch (error) {
        console.error("Error fetching plans data:", error);
      }
    };

    fetchPlans();
  }, []);

  console.log(plans);
  return (
    <div className="m-[20px] lg:m-[50px] flex flex-col lg:flex-row items-center gap-[50px] ">
      <div className="relative bg-[#FF4F00] p-[40px] rounded-[10px] lg:rounded-[20px] max-w-[533px] w-full hidden lg:block h-[1000px]">
        <Link href="/">
          <Image
            src="/goGrub/gogrubLogoWhite_.svg"
            alt="Troo Logo"
            width={150}
            height={50}
          />
        </Link>
        <p className="mt-[100px] font-gilroy font-[700] text-[#FFFFFF] text-[30px] lg:text-[54px]">
          Start your <br /> journey with us.
        </p>
        <p className="absolute bottom-10 lg:bottom-20 font-[500] text-[18px] lg:text-[22px] text-[#FFFFFF]">
          Manage online food ordering for restaurants including cloud kitchens
          and food vendors
        </p>
      </div>

      <div className="font-GeneralSans max-w-[700px] w-full">
        <div className="space-y-[28px]">
          <p className="font-[600] text-[#414141] text-[28px] lg:text-[36px]">
            Make a Commitment
          </p>
          <p className="font-[400] text-[18px] lg:text-[24px] text-[#414141]">
            Get your own branded site to easily manage orders, menu and
            customers — all in one place.
          </p>
        </div>

        <div className="mt-[44px] space-y-[30px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-[30px] rounded-[10px] border ${
                selectedPlan === plan.name
                  ? "border-[#FF4F00]"
                  : "border-[#929292]"
              } text-[16px] font-[400] text-[#414141] w-full bg-white cursor-pointer`}
              onClick={() => handlePlanSelect(plan.name)}
            >
              <div className="flex items-start gap-[24px]">
                <img
                  src={
                    selectedPlan === plan.name
                      ? "/goGrub/stateOn.svg"
                      : "/goGrub/stateOff.svg"
                  }
                  className="w-[23px] h-[23px] mt-[15px]"
                />
                <div className="w-full space-y-[13px]">
                  <div className="w-full grid md:flex items-center md:justify-between">
                    <p className=" capitalize font-[700] text-[18px] md:text-[24px] text-[#414141]">
                      {plan.name}
                    </p>
                    <p className="font-[700] text-[14px] lg:text-[18px] text-[#414141]">
                      <span className="font-[400]">₦ </span>
                      {plan.price}
                    </p>
                  </div>
                  <div className=" grid md:flex items-center md:justify-between">
                    <p className=" capitalize font-[400] text-[18px] md:text-[24px] text-[#414141]">
                      Billed {plan.billingCycle}
                    </p>
                    <p className=" font-[600] text-[#929292] text-[14px] line-through">
                      {plan.discount || "10,000"}
                    </p>
                  </div>
                  <p
                    className="font-[600] text-[18px] text-[#FF4F00] pt-[40px] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(plan.name);
                    }}
                  >
                    View Features
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[50px] flex items-center gap-[10px]">
          <input
            type="checkbox"
            id="terms"
            className="w-[20px] h-[20px] border border-[#929292] rounded"
          />
          <label
            htmlFor="terms"
            className="text-[18px] font-[400] text-[#414141]"
          >
            I have read and agree to the{" "}
            <span className="text-[#FF4F00]">terms of service</span>
          </label>
        </div>

        <div className="mt-[50px]">
          <Link href="https://trootab.com/business-profile?coming-from=gogrub">
            <button
              className="w-full max-w-[212px] bg-[#FF4F00] px-[10px] py-[20px] md:px-[38px] md:py-[30px] rounded-[10px] text-white text-[16px] font-[500]"
              disabled={!selectedPlan}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-[30px] md:px-[50px] md:py-[50px] border border-[#E7E7E7] rounded-[10px] max-w-[600px] w-full relative">
            <div className=" absolute top-[29px] right-[29px]">
              <img
                src="/goGrub/CloseIcon.svg"
                alt="CloseIcon"
                onClick={handleCloseModal}
                className=" w-[14px] h-[14px] cursor-pointer"
              />
            </div>
            <h2 className="text-[28px] font-[500] text-[#0D0D0D] text-center border-b border-[#E7E7E7] py-[20px]">
              Features
            </h2>
            <div className=" mt-[36px] space-y-[19px]">
              {features[openModal]?.map((feature, index) => (
                <div key={index} className="flex items-center gap-[10px]">
                  <div className="w-[17px] h-[17px] rounded-full bg-[#D9D9D9]"></div>
                  <p className="font-[400] text-[20px] text-[#414141]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeCommitment;
