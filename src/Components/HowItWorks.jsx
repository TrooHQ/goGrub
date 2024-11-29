import React, { useRef } from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="font-DMSans max-w-5xl mx-[10px] lg:mx-auto py-[10%] relative">
      <div className="max-w-[708px] mx-auto text-center">
        <p className="text-[#414141] text-[16px] font-[500]">How It Works?</p>
        <p className="max-w-[708px] w-full text-[#112] font-[600] text-[30px] lg:text-[40px]">
          Ordering solution with integrated back office built to scale your
          business
        </p>
      </div>

      <div className="mt-[24px] md:mt-[40px]">
        <div className="grid md:flex items-stretch md:gap-[40px] gap-[20px] justify-center">
          <Image
            src="/grubly/Works.png"
            alt="Image"
            width={400}
            height={400}
            className="mb-[24px] self-center"
          />
          <div className="space-y-[24px] md:space-y-[40px] flex-1">
            {[
              {
                step: "1",
                title: "Sign Up",
                description:
                  "Create an account and set up your branded ordering site.",
              },
              {
                step: "2",
                title: "Integrate Social Media",
                description:
                  "Connect your Instagram, Facebook, WhatsApp, Twitter, and TikTok accounts to accept orders.",
              },
              {
                step: "3",
                title: "Manage Orders",
                description:
                  "Receive and manage orders in real-time from all platforms.",
              },
              {
                step: "4",
                title: "Track Sales & Inventory",
                description:
                  "Use the back-office features to monitor sales and stock levels.",
              },
            ].map(({ step, title, description }, index) => (
              <div key={index} className="flex items-start gap-[16px] flex-1">
                <p className="text-[24px] w-[48px] h-[48px] font-[600] flex items-center justify-center rounded-full border border-[#111122] text-[#111122]">
                  {step}
                </p>

                <div className="space-y-[4px] max-w-[370px] text-left flex-1">
                  <p className="text-[#112] font-[600] text-[20px] lg:text-[24px]">
                    {title}
                  </p>
                  <p className="font-[400] text-[16px] text-[#111122]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
