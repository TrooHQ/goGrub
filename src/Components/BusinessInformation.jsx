"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const BusinessInformation = () => {
  const [businessType, setBusinessType] = useState("");
  const [monthlySales, setMonthlySales] = useState("");

  const handleBusinessTypeChange = (e) => {
    const value = e.target.value;
    setBusinessType(value);
    updateLocalStorage("businessType", value);
  };

  const handleMonthlySalesChange = (e) => {
    const value = e.target.value;
    setMonthlySales(value);
    updateLocalStorage("monthlySales", value);
  };

  const updateLocalStorage = (key, value) => {
    const storedData = JSON.parse(localStorage.getItem("businessInfo")) || {};
    storedData[key] = value;
    localStorage.setItem("businessInfo", JSON.stringify(storedData));
  };

  const isFormValid = businessType && monthlySales;

  return (
    <div className="m-[20px] lg:m-[50px] flex flex-col lg:flex-row items-center gap-[50px]">
      <div className="relative bg-[#FF4F00] p-[40px] rounded-[10px] lg:rounded-[20px] max-w-[533px] w-full hidden lg:block h-screen">
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

      <div className="font-GeneralSans max-w-[630px] w-full">
        <div className="space-y-[28px]">
          <p className="font-[600] text-[#414141] text-[28px] lg:text-[36px]">
            Tell Us About Your Business
          </p>
          <p className="font-[400] text-[18px] lg:text-[24px] text-[#414141]">
            Get your own branded site to easily manage orders, menu, and
            customers — all in one place.
          </p>
        </div>

        <div className="max-w-[610px] mt-[44px] space-y-[30px]">
          <div className="space-y-[12px]">
            <label className="font-[400] text-[20px] lg:text-[24px] text-[#000000]">
              Business Type
            </label>
            <select
              value={businessType}
              onChange={handleBusinessTypeChange}
              className="py-[30px] px-[24px] rounded-[10px] border border-[#929292] text-[16px] font-[400] text-[#414141] w-full bg-white"
            >
              <option value="" disabled>
                Select Business Type
              </option>
              <option value="restaurant">Restaurant</option>
              <option value="cafe">Café</option>
              <option value="food-truck">Food Truck</option>
              <option value="bakery">Bakery</option>
            </select>
          </div>

          <div className="space-y-[12px]">
            <label className="font-[400] text-[20px] lg:text-[24px] text-[#000000]">
              Monthly Average Sales
            </label>
            <input
              type="number"
              value={monthlySales}
              onChange={handleMonthlySalesChange}
              placeholder="Enter Monthly Average Sales"
              className="py-[30px] px-[24px] rounded-[10px] border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full"
            />
          </div>
        </div>

        <div className="mt-[50px]">
          <Link href={isFormValid ? "/make-commitment" : "#"}>
            <button
              className={`w-full max-w-[212px] px-6 py-2 rounded-[10px] text-white text-[16px] font-[500] ${
                isFormValid ? "bg-[#FF4F00]" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
