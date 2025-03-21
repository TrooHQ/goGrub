import React, { useRef } from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className=" bg-[#FF4F00]" id="how-it-works">
      <div className=" max-w-[1200px] mx-[10px] lg:mx-auto py-[10%] relative">
        <div className="max-w-[708px] text-start text-[#FFFFFF]">
          <p className=" text-[16px] font-[500] font-GeneralSans">
            How GoGrub Makes It Easy
          </p>
        </div>

        <div className="mt-[24px] md:mt-[40px] bg-[#FFFFFF] p-[30px] lg:p-[60px] rounded-[16px] ">
          <div className=" grid md:grid-cols-2 items-center gap-[24px] md:gap-[40px] ">
            {[
              {
                step: "1",
                title: "Sign Up",
                description:
                  "Create an account and set up your branded ordering site.",
              },

              {
                step: "2",
                title: "Manage Orders",
                description:
                  "Receive and manage orders in real-time from all platforms.",
              },
              {
                step: "3",
                title: "Integrate Social Media",
                description:
                  "Connect your Instagram, Facebook, WhatsApp, Twitter, and TikTok accounts to accept orders.",
              },
              {
                step: "4",
                title: "Track Sales & Gain Insights",
                description:
                  "Use the back-office features to monitor sales performance and trends.",
              },
            ].map(({ step, title, description }, index) => (
              <div
                key={index}
                className="flex items-start gap-[16px] flex-1 max-w-[538px] w-full"
              >
                <p className="text-[14px] md:text-[24px] w-[48px] h-[48px] font-[600] flex items-center justify-center rounded-full border border-[#FF4F00] text-[#FF4F00]">
                  {step}
                </p>

                <div className="space-y-[4px]  text-left flex-1">
                  <p className="text-[#FF4F00] font-[500] text-[20px] lg:text-[24px] font-GeneralSans">
                    {title}
                  </p>
                  <p className="font-[500] text-[14px] md:text-[16px] text-[#0A191E]">
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
