"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const socials = [
    { name: "Instagram" },
    { name: "Facebook" },
    { name: "WhatsApp" },
    { name: "Twitter" },
  ];

  return (
    <div className="bg-[#FFF5F1] font-gilroy">
      <div className="  max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-[10px] lg:ml-auto lg:mx-0 px-[10px] lg:pl-[40px] lg:px-0 pt-[50px] sm:pt-0">
        <div className="grid gap-[20px] place-items-center lg:flex items-center lg:justify-between">
          <div className="max-w-[700px]">
            <p className="text-[16px] font-[300] text-[#111122] bg-[#D9D9D93B] py-[9px] px-[22px] max-w-[325px] rounded-[4px]">
              Food vendors, Caterers & Restaurants
            </p>

            <div className="space-y-[24px]">
              <div>
                <p className="font-[300] text-[40px] lg:text-[48px] text-[#111122]">
                  Your link to sell better{" "}
                  <span className=" md:hidden">with</span>
                </p>
                <div className="flex items-center gap-[10px]">
                  <p className="font-[300] text-[40px] lg:text-[64px] text-[#111122] hidden md:block">
                    with
                  </p>

                  <div className="" style={{ display: "inline-block" }}>
                    <span className="text-[48px] lg:text-[64px] font-[800] text-[#606060]">
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
                <p className="font-[300] text-[14px] lg:text-[20px] text-[#000000] max-w-[627px] w-full">
                  Your own branded site to easily manage orders,
                  <br /> menu and customers—all in one place.
                </p>
              </div>

              <div>
                {/* <Link href="https://gogrub-client.netlify.app/business-profile?coming-from=gogrub"> */}
                <Link href="https://gogrub-client.netlify.app/business-profile">
                  <p className="bg-primary text-[16px] inline text-white px-[27px] py-[10px] rounded-[4px] font-[500] transition font-gilroy">
                    Get Started
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="block rounded-[8px] overflow-hidden">
            <Image
              src="/goGrub/HeroImage_.svg"
              alt="Image"
              width={500}
              height={500}
              sizes="(max-width: 1300px) 100vw, 1300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
