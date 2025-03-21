import React from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";

const Calculator = () => {
  const { openModal } = useModal();

  return (
    <div className="max-w-[1200px] mx-[10px] lg:mx-auto py-[64px] px-[10px] font-GeneralSans bg-[#FFFFFF]">
      <div className="max-w-[900px] mx-auto space-y-[53px]">
        <div className="text-center">
          <p className="font-gilroy text-[34px] lg:text-[64px] text-[#FF4F00] font-[800]">
            Discover Your Potential Savings with GoGrub
          </p>
          <p className="text-[24px] font-[500] text-[#000000]">
            Use the calculator to compute and display your potential monthly
            extra profit with <span className="font-[700]">GoGrub</span>.
          </p>
        </div>

        <div className="space-y-[16px]">
          <div className="grid place-items-center lg:flex lg:justify-between text-[24px] font-[700] text-[#0D0D0D]">
            <div className="space-y-[16px] text-center">
              <p>Weekly Orders</p>
              <input
                type="text"
                className="py-[10px] px-[20px] rounded-[10px] border border-[#0D0D0D] max-w-[290px]"
              />
            </div>
            <div className="space-y-[16px] text-center">
              <p>Monthly Extra Profit</p>
              <input
                type="text"
                className="py-[10px] px-[20px] rounded-[10px] border border-[#0D0D0D] max-w-[290px]"
              />
            </div>
          </div>

          <p className="font-[500] text-[24px] text-center">
            Based on an average order value of{" "}
            <input
              type="text"
              className="p-[10px] rounded-[5px] border border-[#0D0D0D] max-w-[66px] text-center"
              readOnly
              value={20}
            />{" "}
            and a commission of 20%.
          </p>
        </div>

        <div
          className="text-center mt-[50px] cursor-pointer max-w-[308px] mx-auto w-full border border-[#FF4F00] px-[38px] py-[10px] rounded-[8px] text-primary text-[16px] font-[500]"
          onClick={openModal}
        >
          Get Quote
        </div>
      </div>
    </div>
  );
};

export default Calculator;
