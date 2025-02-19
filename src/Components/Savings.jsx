import Image from "next/image";
import React from "react";
import Icon from "../../public/goGrub/GoGrubLOGOicon.svg";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
const Savings = () => {
  return (
    <div className="bg-[#FFF5F1]  font-gilroy">
      <div className="max-w-6xl mx-[10px] lg:mx-auto py-[10%] px-[10px] ">
        <div className="grid gap-[20px] place-items-center lg:flex items-center lg:justify-between">
          <div className="max-w-[628px]">
            <p className="text-[16px] md:text-[24px] font-[500] text-[#0A191E]   rounded-[4px] font-GeneralSans">
              Focus on what's important— your business
            </p>

            <div className="space-y-[24px]">
              <div>
                <p className="font-[800] text-[30px] lg:text-[64px] text-[#606060] leading-[40px] md:leading-[76px]">
                  Ordering solution with intergrated back office built to <br />
                  <span className=" text-[#FF4F00]">scale your business</span>
                </p>
              </div>

              <div>
                <Link href="https://trootab.com/business-profile?coming-from=goGrub">
                  <p className="bg-primary text-[16px] inline text-white px-[27px] py-[10px] rounded-[8px] font-[500]  transition">
                    Start your free trial
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block rounded-[8px] overflow-hidden">
            <Image
              src="/goGrub/OderingSolutionImg.svg"
              alt="Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className=" grid lg:flex items-start  2xl:justify-between mx-[10px] md:mx-0">
        <div className=" hidden lg:block max-w-[700px] w-full">
          <Image src={Icon} alt="" />
        </div>
        <div className="font-gilroy max-w-[513px]">
          <p className=" font-[800] text-[30px] lg:text-[64px] text-[#FF4F00] my-[20px]">
            What We Offer
          </p>

          <div className=" space-y-[20px] lg:space-y-[40px] my-[40px]">
            <div className="">
              <div className=" flex items-center gap-[16px]">
                <FaCheckCircle size={24} className=" text-[#FF4F00]" />
                <p className=" font-[800] text-[16px] md:text-[32px] text-[#0A191E]">
                  Branded Ordering Site
                </p>
              </div>
              <p className=" font-[300] text-[#000000] text-[14px] lg:text-[24px]">
                Build and customize your own site for a consistent brand
                experience.
              </p>
            </div>

            <div className="">
              <div className=" flex items-center gap-[16px]">
                <FaCheckCircle size={24} className=" text-[#FF4F00]" />
                <p className=" font-[800] text-[16px] md:text-[32px] text-[#0A191E]">
                  Real-Time Order Management
                </p>
              </div>
              <p className=" font-[300] text-[#000000] text-[14px] lg:text-[24px]">
                Keep track of every order across platforms with real-time
                updates.
              </p>
            </div>
            <div className="">
              <div className=" flex items-center gap-[16px]">
                <FaCheckCircle size={24} className=" text-[#FF4F00]" />
                <p className=" font-[800] text-[16px] md:text-[32px] text-[#0A191E]">
                  Social Media Integration
                </p>
              </div>
              <p className=" font-[300] text-[#000000] text-[14px] lg:text-[24px]">
                Accept orders directly from Instagram, Facebook, WhatsApp,
                Twitter, and TikTok.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
