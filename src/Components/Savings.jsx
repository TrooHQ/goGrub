import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Savings = () => {
  return (
    <div className=" bg-[#eeeeee]">
      <div className=" font-DMSans max-w-5xl mx-[10px] md:mx-auto py-[10%]">
        <div className=" grid gap-[20px] place-items-center md:flex items-start md:justify-between ">
          <div className=" max-w-[700px]  order-2 md:order-1">
            <p className=" max-w-[383px] font-[600] text-[30px] lg:text-[40px] text-[#111122]">
              Level Up, Save More.
            </p>
            <p className=" font-[500] text-[14px] lg:text-[20px] text-[#414141] max-w-[460px] w-full my-[24px]">
              Say goodbye to costly commissions and start saving thousands every
              month.
            </p>
            <div className=" my-[40px] space-y-[16px]">
              <div className=" flex items-center gap-[8px]">
                <div className="  text-[#5955B3]">
                  <FaCheck />
                </div>
                <p className=" font-[400] text-[16px] text-[#111122]">
                  Get your own branded online ordering site with QR code
                </p>
              </div>
              <div className=" flex items-center gap-[8px]">
                <div className="  text-[#5955B3]">
                  <FaCheck />
                </div>
                <p className=" font-[400] text-[16px] text-[#111122]">
                  Customers to collect orders online
                </p>
              </div>
              <div className=" flex items-center gap-[8px]">
                <div className="  text-[#5955B3]">
                  <FaCheck />
                </div>
                <p className=" font-[400] text-[16px] text-[#111122]">
                  Accept Cash and Online Payments
                </p>
              </div>
              <div className=" flex items-center gap-[8px]">
                <div className="  text-[#5955B3]">
                  <FaCheck />
                </div>
                <p className=" font-[400] text-[16px] text-[#111122]">
                  Get Instant Order Notifications
                </p>
              </div>
              <div className=" flex items-center gap-[8px]">
                <div className="  text-[#5955B3]">
                  <FaCheck />
                </div>
                <p className=" font-[400] text-[16px] text-[#111122]">
                  Collect Feedback and Stay Connected
                </p>
              </div>
            </div>
            <p className="bg-[#5955B3] text-[16px] inline text-white px-[16px] py-[8px] rounded-[4px] font-[500] hover:bg-[#4200FF] transition">
              Start your free trial
            </p>
          </div>

          <div className=" order-1 md:order-2 ">
            <Image
              src="/grubly/Image1.png"
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

export default Savings;
