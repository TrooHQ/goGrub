import Image from "next/image";
import React from "react";
import IconRight from "../../public/goGrub/Vector 4.svg";
import IconLeft from "../../public/goGrub/Vector 3.svg";
import { FaCheckCircle } from "react-icons/fa";
import Logo from "../../public/goGrub/goGrubLOGO_.svg";
import CheckIcon from "../../public/goGrub/mdi_tick-circle-outline.svg";
import CheckCircle from "../../public/goGrub/Success Icon (2).svg";
const BoostBusiness = () => {
  return (
    <div className="font-GeneralSans h-full relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/goGrub/ImageOverlay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 pb-[100px]">
        <div className="bg-black  bg-opacity-20  py-[40px] mb-[100px]">
          <div className="max-w-6xl mx-[10px] sm:mx-auto">
            <div className="grid gap-[20px] md:flex items-start md:justify-center">
              <div className="max-w-[384px] w-full flex items-start justify-start md:justify-center">
                <Image
                  src={CheckIcon}
                  alt="Check Icon"
                  width={50}
                  height={50}
                  className="mr-[16px]"
                />
                <p className="font-[500] text-[14px] md:text-[24px] text-[#FFFFFF]">
                  Get flexible with your menu pricing, increase repeat
                  businesses and easily manage your customers
                </p>
              </div>

              <div className="max-w-[384px] w-full flex items-start justify-start md:justify-center">
                <Image
                  src={CheckIcon}
                  alt="Check Icon"
                  width={50}
                  height={50}
                  className="mr-[16px]"
                />
                <p className="font-[500] text-[14px] md:text-[24px] text-[#FFFFFF]">
                  Boost your business by promoting your store across every
                  social media channel.
                </p>
              </div>

              <div className="max-w-[402px] w-full flex items-start justify-start md:justify-center">
                <Image
                  src={CheckIcon}
                  alt="Check Icon"
                  width={50}
                  height={50}
                  className="mr-[16px]"
                />
                <p className="font-[500] text-[14px] md:text-[24px] text-[#FFFFFF]">
                  Take orders directly, skip commissions and keep more earnings.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1000px] mx-[10px] sm:mx-auto">
          <div className="flex items-start">
            <Image
              src={IconRight}
              alt="Icon Right"
              width={100}
              height={100}
              className="hidden md:block"
            />
            <div className="max-w-[650px] mx-auto w-full text-center">
              <p className="font-[800] text-[24px] md:text-[54px] text-[#FFFFFF] font-gilroy">
                Level Up, Save More
              </p>
              <p className="font-[500] text-[16px] md:text-[32px] text-white">
                Say goodbye to costly commissions and start saving thousands
                every month.
              </p>
            </div>
            <Image
              src={IconLeft}
              alt="Icon Left"
              width={100}
              height={100}
              className="hidden md:block"
            />
          </div>
          <div className="grid gap-[20px] md:grid-cols-2 items-start md:gap-[44px] mt-[56px]">
            <div className="gap-[16px] flex items-start">
              <Image src={CheckCircle} alt="IconCheck" width={32} height={32} />
              {/* <FaCheckCircle size={24} className="text-[#22FF6D]" /> */}
              <p className="font-[500] text-[14px] md:text-[24px] text-[#ffffff]">
                Your Branded Mobile Site with QR Code
              </p>
            </div>
            <div className="gap-[16px] flex items-start">
              {/* <FaCheckCircle size={24} className="text-[#22FF6D]" /> */}
              <Image src={CheckCircle} alt="IconCheck" width={32} height={32} />

              <p className="font-[500] text-[14px] md:text-[24px] text-[#ffffff]">
                Customers Order Online or Scan the QR Code
              </p>
            </div>
            <div className="gap-[16px] flex items-start">
              {/* <FaCheckCircle size={24} className="text-[#22FF6D]" /> */}
              <Image src={CheckCircle} alt="IconCheck" width={32} height={32} />

              <p className="font-[500] text-[14px] md:text-[24px] text-[#ffffff]">
                Accept Cash and Online Payments — No Fees
              </p>
            </div>
            <div className="gap-[16px] flex items-start">
              {/* <FaCheckCircle size={24} className="text-[#22FF6D]" /> */}
              <Image src={CheckCircle} alt="IconCheck" width={32} height={32} />

              <p className="font-[500] text-[14px] md:text-[24px] text-[#ffffff]">
                Get Instant Order Notifications
              </p>
            </div>
            <div className="gap-[16px] flex items-start">
              {/* <FaCheckCircle size={24} className="text-[#22FF6D]" /> */}
              <Image src={CheckCircle} alt="IconCheck" width={32} height={32} />

              <p className="font-[500] text-[14px] md:text-[24px] text-[#ffffff]">
                Collect Feedback and Stay Connected
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[200px] lg:max-w-[600px] mx-auto mt-[200px]">
          <Image src={Logo} alt="Logo" width={600} height={200} />
        </div>
      </div>
    </div>
  );
};

export default BoostBusiness;
