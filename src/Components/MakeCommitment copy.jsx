"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "./Constants";

const MakeCommitment = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [plans, setPlans] = useState([]);
  const [openFeatures, setOpenFeatures] = useState(null);
  const [agreed, setAgreed] = useState(false);
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

  const updateLocalStorage = (key, value) => {
    const storedData = JSON.parse(localStorage.getItem("businessInfo")) || {};
    storedData[key] = value;
    localStorage.setItem("businessInfo", JSON.stringify(storedData));
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    updateLocalStorage("selectedPlan", plan);
  };

  const handleToggleFeatures = (plan) => {
    setOpenFeatures((prev) => (prev === plan ? null : plan));
  };

  // const handleSubmit = async () => {
  //   if (!selectedPlan) {
  //     alert("Please select a plan before proceeding.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       `${BaseUrl}/commitment`,
  //       { plan: selectedPlan },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     alert("Commitment submitted successfully!");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error submitting commitment:", error);
  //     alert("An error occurred. Please try again.");
  //   }
  // };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/plan/getPlans?secretKey=trooAdminDev&planType=gogrub`
        );
        setPlans(response.data.data);
      } catch (error) {
        console.error("Error fetching plans data:", error);
      }
    };

    fetchPlans();
  }, []);

  const isFormValid = selectedPlan && agreed;

  return plans.length === 0 ? (
    <div className="flex justify-center items-center h-screen">
      <p className="text-[24px] font-[500] text-[#414141]">Loading plans...</p>
    </div>
  ) : (
    <div className="m-[20px] lg:m-[50px] flex flex-col lg:flex-row items-center gap-[50px] transition-all duration-500 ease-in-out">
      <div className="relative bg-[#FF4F00] p-[40px] rounded-[10px] lg:rounded-[20px] max-w-[533px] w-full hidden lg:block h-[1000px] transition-all duration-500 ease-in-out">
        <Link href="/">
          <Image
            src="/goGrub/gogrubLogoWhite_.svg"
            alt="Troo Logo"
            width={150}
            height={50}
          />
        </Link>
        <p className="mt-[100px] font-gilroy font-[700] text-[#FFFFFF] text-[30px] lg:text-[54px] transition-all duration-500 ease-in-out">
          Start your <br /> journey with us.
        </p>
        <p className="absolute bottom-10 lg:bottom-20 font-[500] text-[18px] lg:text-[22px] text-[#FFFFFF] transition-all duration-500 ease-in-out">
          Manage online food ordering for restaurants including cloud kitchens
          and food vendors
        </p>
      </div>

      <div className="font-GeneralSans max-w-[700px] w-full transition-all duration-500 ease-in-out">
        <div className="space-y-[28px]">
          <p className="font-[600] text-[#414141] text-[28px] lg:text-[36px] transition-all duration-500 ease-in-out">
            Make a Commitment
          </p>
          <p className="font-[400] text-[18px] lg:text-[24px] text-[#414141] transition-all duration-500 ease-in-out">
            Get your own branded site to easily manage orders, menu and
            customers — all in one place.
          </p>
        </div>

        <div className="mt-[44px] space-y-[30px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-[30px] rounded-[10px] border ${selectedPlan === plan.name
                  ? "border-[#FF4F00]"
                  : "border-[#929292]"
                } text-[16px] font-[400] text-[#414141] w-full bg-white cursor-pointer transition-all duration-500 ease-in-out`}
              onClick={() => handlePlanSelect(plan.name)}
            >
              <div className="flex items-start gap-[24px] mb-[30px]">
                <img
                  src={
                    selectedPlan === plan.name
                      ? "/goGrub/stateOn.svg"
                      : "/goGrub/stateOff.svg"
                  }
                  className="w-[23px] h-[23px] mt-[15px] transition-all duration-500 ease-in-out"
                />
                <div className="w-full space-y-[13px]">
                  <div className="w-full grid md:flex items-center md:justify-between">
                    <p className=" capitalize font-[700] text-[18px] md:text-[24px] text-[#414141] transition-all duration-500 ease-in-out">
                      {plan.name}
                    </p>
                    <p className="font-[700] text-[14px] lg:text-[24px] text-[#414141] transition-all duration-500 ease-in-out">
                      <span className="font-[400]">₦ </span>
                      {Number(plan.price).toLocaleString()}
                    </p>
                  </div>
                  <div className=" grid md:flex items-center md:justify-between">
                    <p className=" capitalize font-[400] text-[18px] md:text-[24px] text-[#414141] transition-all duration-500 ease-in-out">
                      Billed {plan.billingCycle}
                    </p>
                    <p className=" font-[600] text-[#E10101] text-[14px] lg:text-[18px] line-through transition-all duration-500 ease-in-out">
                      {Number(
                        plan.discount ||
                        (plan.name.includes("yearly") ? "30000" : "10000")
                      ).toLocaleString()}
                    </p>
                  </div>
                  <p
                    className="font-[600] text-[18px] text-[#FF4F00] pt-[40px] cursor-pointer transition-all duration-500 ease-in-out"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleFeatures(plan.name);
                    }}
                  >
                    {openFeatures === plan.name
                      ? "Hide Features"
                      : "View Features"}
                  </p>
                </div>
              </div>

              {openFeatures === plan.name && (
                <div className="transition-all duration-500 ease-in-out"></div>
              )}

              {openFeatures === plan.name && plan.name.includes("yearly") && (
                <div className="border-t border-[#E7E7E7] pt-[30px] font-GeneralSans transition-all duration-500 ease-in-out">
                  <h2 className="text-[20px] font-[400] text-[#0D0D0D] transition-all duration-500 ease-in-out">
                    Features
                  </h2>
                  <ul className="mt-[10px] space-y-[10px]">
                    {features.yearly?.map((feature, index) => (
                      <li
                        key={index}
                        className="  flex items-center gap-[10px] transition-all duration-500 ease-in-out"
                      >
                        <div className="w-[17px] h-[17px] rounded-full bg-[#D9D9D9] transition-all duration-500 ease-in-out"></div>
                        <p className="font-[400] text-[20px] text-[#414141] transition-all duration-500 ease-in-out">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {openFeatures === plan.name &&
                plan.name.includes("quarterly") && (
                  <div className="border-t border-[#E7E7E7] pt-[30px] font-GeneralSans transition-all duration-500 ease-in-out">
                    <h2 className="text-[20px] font-[400] text-[#0D0D0D] transition-all duration-500 ease-in-out">
                      Features
                    </h2>
                    <ul className="mt-[10px] space-y-[10px]">
                      {features.quarterly?.map((feature, index) => (
                        <li
                          key={index}
                          className="  flex items-center gap-[10px] transition-all duration-500 ease-in-out"
                        >
                          <div className="w-[17px] h-[17px] rounded-full bg-[#D9D9D9] transition-all duration-500 ease-in-out"></div>
                          <p className="font-[400] text-[20px] text-[#414141] transition-all duration-500 ease-in-out">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="mt-[50px] flex items-center gap-[10px] transition-all duration-500 ease-in-out">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-[20px] h-[20px] border border-[#929292] rounded transition-all duration-500 ease-in-out"
          />
          <label
            htmlFor="terms"
            className="text-[18px] font-[400] text-[#414141] transition-all duration-500 ease-in-out"
          >
            I have read and agree to the{" "}
            <span className="text-[#FF4F00] transition-all duration-500 ease-in-out">
              terms of service
            </span>
          </label>
        </div>

        <div className="mt-[50px] transition-all duration-500 ease-in-out">
          <button
            className={`w-full max-w-[212px]   px-6 py-2 rounded-[10px] text-white text-[16px] font-[500] transition-all duration-500 ease-in-out ${isFormValid ? "bg-[#FF4F00]" : "bg-gray-400 cursor-not-allowed"
              }`}
            disabled={!isFormValid}
            onClick={() => {
              if (!selectedPlan) {
                alert("Please select a plan before proceeding.");
                return;
              }

              const businessInfo =
                JSON.parse(localStorage.getItem("businessInfo")) || {};
              const queryParams = new URLSearchParams(businessInfo).toString();

              window.location.href = `https://admin.gogrub.co/business-profile?coming-from=gogrub&${queryParams}`;
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeCommitment;
