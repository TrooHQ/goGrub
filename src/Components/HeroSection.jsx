import Image from "next/image";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const socials = [
    { name: "Instagram", color: "#E4405F" },
    { name: "Facebook", color: "#1877F2" },
    { name: "WhatsApp", color: "#2AA234" },
    { name: "Twitter", color: "#111122" },
  ];

  return (
    <div className="bg-[#FFF5F1]">
      <div className="max-w-6xl mx-[10px] lg:mx-auto py-[10%] px-[10px] ">
        <div className="grid gap-[20px] place-items-center lg:flex items-center lg:justify-between">
          <div className="max-w-[700px]">
            <p className="text-[16px] font-[300] text-[#111122] bg-[#D9D9D93B] py-[9px] px-[22px] max-w-[325px] rounded-[4px]">
              Food vendors, Caterers & Restaurants
            </p>

            <div className="space-y-[24px]">
              <div>
                <p className="font-[300] text-[40px] lg:text-[48px] text-[#111122]">
                  Your link to sell better
                </p>
                <div className="flex items-center gap-[10px]">
                  <p className="font-[300] text-[40px] lg:text-[64px] text-[#111122]">
                    with
                  </p>

                  <div
                    className="font-[600] text-[40px] lg:text-[64px] text-[#606060] flex items-center space-x-2"
                    style={{ display: "inline-block" }}
                  >
                    <span className="text-[48px] text-[#606060]">
                      <Typewriter
                        words={socials.map((social) => social.name)}
                        loop
                        cursor
                        cursorStyle="|"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-[300] text-[14px] lg:text-[20px] text-[#000000] max-w-[460px] w-full">
                  Get your own branded site to easily manage orders, menu and
                  customers — all in one place.
                </p>
              </div>

              <div>
                <p className="bg-primary text-[16px] inline text-white px-[27px] py-[10px] rounded-[4px] font-[500] hover:bg-[#4200FF] transition">
                  Start your free trial
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block rounded-[8px] overflow-hidden">
            <Image
              src="/goGrub/Image.svg"
              alt="Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
