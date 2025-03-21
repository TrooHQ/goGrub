import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const MakeCommitment = () => {
  const [businessType, setBusinessType] = useState("");

  return (
    <div className="m-[20px] lg:m-[50px] flex flex-col lg:flex-row items-center gap-[50px]">
      <div className="relative bg-[#FF4F00] p-[40px] rounded-[10px] lg:rounded-[20px] max-w-[533px] w-full hidden lg:block h-screen">
        <Image
          src="/goGrub/troo logo.svg"
          alt="Troo Logo"
          width={150}
          height={50}
        />
        <p className="mt-[100px] font-gilroy font-[700] text-[#FFFFFF] text-[30px] lg:text-[54px]">
          Start your <br /> journey with us.
        </p>
        <p className="absolute bottom-10 lg:bottom-20 font-[500] text-[18px] lg:text-[22px] text-[#FFFFFF]">
          "Note: A 5% transaction fee applies for standalone GoGrub users."
        </p>
      </div>

      <div className="font-GeneralSans max-w-[700px] w-full">
        <div className="space-y-[28px]">
          <p className="font-[600] text-[#414141] text-[28px] lg:text-[36px]">
            Make a Commitment
          </p>
          <p className="font-[400] text-[18px] lg:text-[24px] text-[#414141]">
            Get your own branded site to easily manage orders, menu and
            customers — all in one place.
          </p>
        </div>

        <div className="mt-[44px] space-y-[30px]">
          <div className="">
            <Link href="https://trootab.com/business-profile" target="blank">
              <div className=" p-[30px] rounded-[10px] border border-[#929292] text-[16px] font-[400] text-[#414141] w-full bg-white flex items-center justify-between            ">
                <div className=" flex items-center gap-[14px]">
                  <img src="/goGrub/shape2.svg" className="hidden lg:block" />
                  <div className="">
                    <p className=" font-[700] text-[24px] text-[#414141]">
                      Quarterly Plan
                    </p>
                    <p className=" font-[400] text-[24px] text-[#414141]">
                      ₦ 7,500 billed quarterly ( ₦ 2,500/month)
                    </p>
                  </div>
                </div>
                <img src="/goGrub/chevron-down.svg" />
              </div>
            </Link>
          </div>
          <div className="">
            <Link href="https://trootab.com/business-profile" target="blank">
              <div className=" p-[30px] rounded-[10px] border border-[#929292] text-[16px] font-[400] text-[#414141] w-full bg-white flex items-center justify-between            ">
                <div className=" flex items-center gap-[14px]">
                  <img src="/goGrub/circle.svg" className=" hidden lg:block" />
                  <div className="">
                    <p className=" font-[700] text-[24px] text-[#414141]">
                      Yearly Plan
                    </p>
                    <p className=" font-[400] text-[24px] text-[#414141]">
                      ₦ 27,500 billed biannually ( ₦ 2,500/month)
                    </p>
                  </div>
                </div>
                <img src="/goGrub/chevron-down.svg" />
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-[50px]">
          <p className="  text-[24px] font-[400] text-[#414141]">
            "Note: A 5%transaction fee applies for standalone GoGrub users."
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeCommitment;
