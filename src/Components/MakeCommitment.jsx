"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "./Constants";
import Icon from "../../public/goGrub/GoGrub LOGO icon.svg";

const MakeCommitment = () => {
  const [plans, setPlans] = useState([]);

  const features = {
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

  return plans.length === 0 ? (
    <div className="flex items-center justify-center h-screen">
      <p className="text-[24px] font-[500] text-[#414141]">Loading plans...</p>
    </div>
  ) : (
    <div className="m-[20px] lg:m-[50px] flex flex-col lg:flex-row items-center gap-[50px] transition-all duration-500 ease-in-out">
      <div className="relative bg-[#FF4F00] p-[40px] rounded-[10px] lg:rounded-[20px] max-w-[533px] w-full hidden lg:block h-screen">
        <div className="absolute right-0 hidden bottom-20 lg:block">
          <Image
            src={Icon}
            alt=""
            className="max-w-[400px] w-full  opacity-90"
          />
        </div>

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
      <div className="w-full transition-all duration-500 ease-in-out font-GeneralSans">
        <div className=" max-w-[800px] mx-auto">
          <p className="font-[600] text-center lg:text-left text-[#414141] text-[28px] lg:text-[36px] transition-all duration-500 ease-in-out">
            See Commitment Options
          </p>

          <div className="my-[44px] space-y-[20px] ">
            <div className=" grid place-items-center lg:place-items-start lg:grid-cols-2 gap-[10px] items-center">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={` space-y-[24px] text-center max-w-[343px]  py-[16px] px-[30px] rounded-[10px] border border-[#929292] text-[16px] font-[400] text-[#414141] w-full h-full bg-white  transition-all duration-500 ease-in-out`}
                >
                  <div className=" text-center space-y-[8px]">
                    <p className=" capitalize font-[600] text-[18px] md:text-[24px] text-[#414141] transition-all duration-500 ease-in-out">
                      {plan.name}
                    </p>
                    {plan.billingCycleInMonths === 12 ? <p className="font-[400] text-[14px] lg:text-[20px] text-[#414141] transition-all duration-500 ease-in-out">
                      Pay ₦{plan.billingFrequencyAmount.toLocaleString()} Every{" "}
                      {plan.billingCycleInMonths} months
                    </p> : <p className="font-[400] text-[14px] lg:text-[20px] text-[#414141] transition-all duration-500 ease-in-out">
                      Pay ₦{plan.billingFrequencyAmount.toLocaleString()} Every{" "}
                      {plan.billingCycleInMonths} months
                    </p>
                    }


                  </div>
                  <div className=" space-y-[8px]">
                    <p className=" font-[600] text-[#414141] text-[14px] lg:text-[32px] transition-all duration-500 ease-in-out">
                      ₦{plan.price.toLocaleString()}
                    </p>
                    {plan.name !== "quarterly plan" && (
                      <p className=" font-[400] line-through text-[#FF4F00] text-[14px] lg:text-[24px] transition-all duration-500 ease-in-out">
                        ₦{plan.prevPrice.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="place-items-center  space-y-[24px]">
            <h2 className="text-[24px]  font-[500] text-[#0D0D0D] transition-all duration-500 ease-in-out">
              Features Included In Every Plan
            </h2>

            <ul className=" space-y-[10px] grid place-items-start lg:place-items-start lg:grid-cols-2 items-start">
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
                    className="object-cover "
                  />
                  <p className=" font-GeneralSans font-[400] text-[20px] text-[#414141] transition-all duration-500 ease-in-out">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[50px] transition-all duration-500 ease-in-out text-start">
            <Link
              href={"/register"}
              className={`w-full max-w-[212px] bg-[#FF4F00]   px-[24px] py-[13px] rounded-[10px] text-white text-[16px] font-[500] transition-all duration-500 ease-in-out`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeCommitment;
