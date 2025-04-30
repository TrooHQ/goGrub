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
    // quarterly: [
    //   "Branded Online Store",
    //   "Custom Menu & Pricing",
    //   "Pickup & Delivery Scheduling",
    //   "Unique GoGrub URL",
    // ],
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
    <div className="m-[20px] lg:m-[50px]  transition-all duration-500 ease-in-out">
      <div className="font-GeneralSans w-full transition-all duration-500 ease-in-out">
        <div className="">
          <Link href="/">
            <Image
              src="/goGrub/gogrubBlack.svg"
              alt="Troo Logo"
              width={150}
              height={50}
            />
          </Link>
        </div>

        <div className=" max-w-[800px] mx-auto">
          <div className="space-y-[28px] text-center">
            <p className="font-[600] text-[#414141] text-[28px] lg:text-[36px] transition-all duration-500 ease-in-out">
              See Commitment Options
            </p>
            <p className="font-[400] text-[18px] lg:text-[24px] text-[#414141] transition-all duration-500 ease-in-out">
              Get your own branded site to easily manage orders, menu and
              customers — all in one place.
            </p>
          </div>

          <div className="mt-[44px] place-items-center grid md:flex items-start gap-[40px]">
            <div className=" max-w-[343px] w-full space-y-[20px]">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={` py-[28px] px-[30px] rounded-[10px] border border-[#929292] text-[16px] font-[400] text-[#414141] w-full bg-white cursor-pointer transition-all duration-500 ease-in-out`}
                  // onClick={() => handlePlanSelect(plan.name)}
                >
                  <div className="flex items-start gap-[24px] mb-[30px]">
                    <div className="w-full space-y-[24px] text-center">
                      <div className=" text-center">
                        <p className=" capitalize font-[600] text-[18px] md:text-[24px] text-[#414141] transition-all duration-500 ease-in-out">
                          {plan.name}
                        </p>
                        <p className="font-[400] text-[14px] lg:text-[20px] text-[#414141] transition-all duration-500 ease-in-out">
                          Pay ₦{Number(plan.price).toLocaleString()} Every{" "}
                          {plan.name.includes("yearly") ? "6" : "4"} months
                        </p>
                      </div>
                      <p className=" font-[600] text-[#414141] text-[14px] lg:text-[32px] transition-all duration-500 ease-in-out">
                        ₦
                        {Number(
                          plan.discount ||
                            (plan.name.includes("yearly") ? "30000" : "10000")
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {openFeatures === plan.name && (
                    <div className="transition-all duration-500 ease-in-out"></div>
                  )}

                  {openFeatures === plan.name &&
                    plan.name.includes("yearly") && (
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
                </div>
              ))}
            </div>

            <div className="max-w-[423px]  w-full font-GeneralSans transition-all duration-500 ease-in-out">
              <h2 className="text-[24px] font-[500] text-[#0D0D0D] transition-all duration-500 ease-in-out">
                Features Included In Every Plan
              </h2>
              <ul className="mt-[10px] space-y-[10px]">
                {features.yearly?.map((feature, index) => (
                  <li
                    key={index}
                    className="  flex items-start gap-[10px] transition-all duration-500 ease-in-out"
                  >
                    <Image
                      src="/goGrub/lets-icons_check-fill.svg"
                      width={24}
                      height={24}
                      alt=""
                      className=" object-cover"
                    />
                    <p className=" font-GeneralSans font-[400] text-[20px] text-[#414141] transition-all duration-500 ease-in-out">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-[50px] transition-all duration-500 ease-in-out text-center">
            <button
              className={`w-full max-w-[212px] bg-[#FF4F00]   px-[24px] py-[13px] rounded-[10px] text-white text-[16px] font-[500] transition-all duration-500 ease-in-out                 `}
              onClick={() => {
                const businessInfo =
                  JSON.parse(localStorage.getItem("businessInfo")) || {};
                const queryParams = new URLSearchParams(
                  businessInfo
                ).toString();

                window.location.href = `https://gogrub-client.netlify.app/business-profile?coming-from=gogrub&${queryParams}`;
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeCommitment;
