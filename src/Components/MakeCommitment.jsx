import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const MakeCommitment = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [openModal, setOpenModal] = useState(null);

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

  return (
    <div className="m-[20px] lg:m-[50px] flex flex-col lg:flex-row items-center gap-[50px] ">
      <div className="relative bg-[#FF4F00] p-[40px] rounded-[10px] lg:rounded-[20px] max-w-[533px] w-full hidden lg:block h-[1000px]">
        <Link href="/">
          <Image
            src="/goGrub/troo logo.svg"
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
          <div
            className={`p-[30px] rounded-[10px] border ${
              selectedPlan === "quarterly"
                ? "border-[#FF4F00]"
                : "border-[#929292]"
            } text-[16px] font-[400] text-[#414141] w-full bg-white cursor-pointer`}
            onClick={() => handlePlanSelect("quarterly")}
          >
            <div className="flex items-start gap-[24px]">
              <img
                src={
                  selectedPlan === "quarterly"
                    ? "/goGrub/stateOn.svg"
                    : "/goGrub/stateOff.svg"
                }
                className="w-[23px] h-[23px] mt-[15px]"
              />
              <div className="w-full space-y-[13px]">
                <div className="w-full grid md:flex items-center md:justify-between">
                  <p className="font-[700] text-[18px] md:text-[24px] text-[#414141]">
                    Quarterly Plan
                  </p>
                  <p className="font-[700] text-[24px] lg:text-[42px] text-[#414141]">
                    <span className="font-[400]">₦ </span>7,500
                  </p>
                </div>
                <div className=" grid md:flex items-center md:justify-between">
                  <p className="font-[400] text-[18px] md:text-[24px] text-[#414141]">
                    ₦ 2,500 Billed Quarterly
                  </p>
                  <p className="font-[600] text-[#606060] text-[14px]">
                    10,000
                  </p>
                </div>
                <p
                  className="font-[600] text-[18px] text-[#FF4F00] pt-[40px] cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal("quarterly");
                  }}
                >
                  View Features
                </p>
              </div>
            </div>
          </div>

          <div
            className={`p-[30px] rounded-[10px] border ${
              selectedPlan === "yearly"
                ? "border-[#FF4F00]"
                : "border-[#929292]"
            } text-[16px] font-[400] text-[#414141] w-full bg-white cursor-pointer`}
            onClick={() => handlePlanSelect("yearly")}
          >
            <div className="flex items-start gap-[24px]">
              <img
                src={
                  selectedPlan === "yearly"
                    ? "/goGrub/stateOn.svg"
                    : "/goGrub/stateOff.svg"
                }
                className="w-[23px] h-[23px] mt-[15px]"
              />
              <div className="w-full space-y-[13px]">
                <div className="w-full grid md:flex items-center md:justify-between">
                  <p className="font-[700] text-[18px] md:text-[24px] text-[#414141]">
                    Yearly Plan
                  </p>
                  <p className="font-[700] text-[24px] lg:text-[42px] text-[#414141]">
                    <span className="font-[400]">₦ </span>27,500
                  </p>
                </div>
                <div className=" grid md:flex items-center md:justify-between">
                  <p className="font-[400] text-[18px] md:text-[24px] text-[#414141]">
                    ₦ 2,500 Billed Biannually
                  </p>
                  <p className="font-[600] text-[#606060] text-[14px]">
                    30,000
                  </p>
                </div>
                <p
                  className="font-[600] text-[18px] text-[#FF4F00] pt-[40px] cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal("yearly");
                  }}
                >
                  View Features
                </p>
              </div>
            </div>
          </div>
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
