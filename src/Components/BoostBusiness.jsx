import Image from "next/image";
import React from "react";
import IconRight from "../../public/goGrub/Vector 4.svg";
import IconLeft from "../../public/goGrub/Vector 3.svg";
import { FaCheckCircle } from "react-icons/fa";
import Logo from "../../public/goGrub/goGrubLOGO_.svg";
import CheckIcon from "../../public/goGrub/mdi_tick-circle-outline.svg";
const BoostBusiness = () => {
  return (
    <div
      className=" font-GeneralSans "
      style={{
        backgroundImage: "url('/goGrub/ImageOverlay.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-15 py-[40px]">
        <div className="max-w-6xl mx-[10px] sm:mx-auto">
          <div className="grid gap-[20px] md:flex items-start md:justify-center">
            <div className="max-w-[384px] w-full flex items-start justify-start md:justify-center">
              <Image
                src={CheckIcon}
                alt="icon"
                className="max-w-[50px] mr-[16px]"
              />
              <p className="font-[500] text-[14px] md:text-[24px] text-[#FFFFFF]">
                Boost your business by promoting your store across every social
                media channel.
              </p>
            </div>

            <div className="max-w-[384px] w-full flex items-start justify-start md:justify-center">
              <Image
                src={CheckIcon}
                alt="icon"
                className="max-w-[50px] mr-[16px]"
              />
              <p className="font-[500] text-[14px] md:text-[24px] text-[#FFFFFF]">
                Get flexible with your menu pricing, increase repeat businesses
                and easily manage your customers.
              </p>
            </div>

            <div className="max-w-[402px] w-full flex items-start justify-start md:justify-center">
              <Image
                src={CheckIcon}
                alt="icon"
                className="max-w-[50px] mr-[16px]"
              />
              <p className="font-[500] text-[14px] md:text-[24px] text-[#FFFFFF]">
                Take orders directly, skip commissions and keep more earnings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="max-w-[1000px] mx-[10px] sm:mx-auto space-y-[50px] lg:space-y-[100px] ">
          <div className="  flex items-start ">
            <Image
              src={IconRight}
              alt="icon-right"
              className=" hidden md:block"
            />
            <div className=" max-w-[650px] mx-auto w-full text-center">
              <p className=" font-[800] text-[24px] md:text-[54px] text-[#FFFFFF]">
                Level Up, Save More
              </p>
              <p className=" font-[500] text-[16px] md:text-[32px] text-white">
                Say goodbye to costly commissions and start saving thousands
                every month.
              </p>
            </div>
            <Image
              src={IconLeft}
              alt="icon-right"
              className=" hidden md:block"
            />
          </div>
          <div className="  grid gap-[20px] md:grid-cols-2 items-center md:gap-[44px] ">
            <div className="gap-[16px] flex items-center ">
              <FaCheckCircle size={24} className=" text-[#22FF6D]" />

              <p className=" font-[500] text-[14px] md:text-[24px] text-[#fff]">
                Get your own branded online ordering site with QR code
              </p>
            </div>
            <div className="gap-[16px] flex items-center ">
              <FaCheckCircle size={24} className=" text-[#22FF6D]" />

              <p className=" font-[500] text-[14px] md:text-[24px] text-[#fff]">
                Get Instant Order Notifications
              </p>
            </div>
            <div className="gap-[16px] flex items-center ">
              <FaCheckCircle size={24} className=" text-[#22FF6D]" />

              <p className=" font-[500] text-[14px] md:text-[24px] text-[#fff]">
                Customers to collect orders online
              </p>
            </div>{" "}
            <div className="gap-[16px] flex items-center ">
              <FaCheckCircle size={24} className=" text-[#22FF6D]" />

              <p className=" font-[500] text-[14px] md:text-[24px] text-[#fff]">
                Customers to collect orders online
              </p>
            </div>{" "}
            <div className="gap-[16px] flex items-center ">
              <FaCheckCircle size={24} className=" text-[#22FF6D]" />

              <p className=" font-[500] text-[14px] md:text-[24px] text-[#fff]">
                Accept Cash and Online Payments
              </p>
            </div>
          </div>

          <div className=" w-full max-w-[200px] lg:max-w-[600px] mx-auto  ">
            <Image src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostBusiness;
