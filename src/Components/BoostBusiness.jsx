import Image from "next/image";
import React from "react";
import IconRight from "../../public/goGrub/Vector 4.svg";
import IconLeft from "../../public/goGrub/Vector 3.svg";
import Logo from "../../public/goGrub/goGrubLOGO_.svg";
import CheckIcon from "../../public/goGrub/mdi_tick-circle-outline.svg";
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
          <div className="grid gap-5 md:grid-cols-2 items-start md:gap-x-11 md:gap-y-8 mt-14">
            {[
              "Get your own branded online ordering site with QR code",
              "Get Instant Order Notifications",
              "Customers to collect orders online",
              "Collect Feedback and Stay Connected",
              "Accept Cash and Online Payments",
            ].map((text, index) => (
              <div className="">
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src="/goGrub/Success Icon (3).svg"
                    alt="IconCheck"
                    className="w-6 h-6 p-0 md:w-8 md:h-8 "
                  />
                  <p className="font-medium text-sm md:text-[24px] text-white">
                    {text}
                  </p>
                </div>
              </div>
            ))}
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
