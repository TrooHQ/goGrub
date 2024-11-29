import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" font-DMSans max-w-6xl mx-[10px] lg:mx-auto py-[10%]">
      <div className=" grid gap-[20px] place-items-center lg:flex items-center lg:justify-between">
        <div className=" max-w-[700px] ">
          <p className=" text-[14px] font-[500] text-[#111122]">
            Food vendors, Caterers & Restaurants
          </p>
          <p className=" font-[600] text-[40px] lg:text-[48px] text-[#111122]">
            Your link to sell better with Instagram, Facebook, <br /> WhatsApp,
            Twitter (X)
          </p>
          <p className=" font-[500] text-[14px] lg:text-[16px] text-[#414141] max-w-[460px] w-full my-[24px]">
            Your own branded site to easily manage orders, menu and
            customers—all in one place
          </p>
          <p className="bg-[#5955B3] inline text-white px-[16px] py-[8px] rounded-[4px] font-[700] hover:bg-[#4200FF] transition">
            Start your free trial
          </p>
        </div>

        <div className=" hidden lg:block">
          <Image
            src="/grubly/Image-2.png"
            alt="Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
