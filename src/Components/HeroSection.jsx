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
    <div className="max-w-6xl mx-[10px] lg:mx-auto py-[10%] px-[10px]">
      <div className="grid gap-[20px] place-items-center lg:flex items-center lg:justify-between">
        <div className="max-w-[700px]">
          <p className="text-[14px] font-[500] text-[#111122]">
            Food vendors, Caterers & Restaurants
          </p>

          <div className="space-y-[40px]">
            <div>
              <p className="font-[600] text-[40px] lg:text-[48px] text-[#111122]">
                Your link to sell better
              </p>
              <div className="flex items-center gap-[10px]">
                <p className="font-[600] text-[40px] lg:text-[48px] text-[#111122]">
                  with
                </p>

                <div
                  className="font-[600] text-[40px] lg:text-[48px] flex items-center space-x-2"
                  style={{ display: "inline-block" }}
                >
                  <span className="text-[48px] text-[#E4405F]">
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
              <p className="font-[500] text-[14px] lg:text-[20px] text-[#414141] max-w-[460px] w-full">
                Get your own branded site to easily manage orders, menu and
                customers — all in one place.
              </p>
            </div>

            <div>
              <p className="bg-[#5955B3] text-[16px] inline text-white px-[27px] py-[10px] rounded-[4px] font-[500] hover:bg-[#4200FF] transition">
                Start your free trial
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block rounded-[8px] overflow-hidden">
          <Image
            src="/grubly/HeroImage_.png"
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
