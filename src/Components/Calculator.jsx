import React, { useState, useEffect } from "react";
import { useModal } from "./ModalContext";

const Calculator = () => {
  const { openModal } = useModal();

  const [monthlyOrders, setMonthlyOrders] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [commission, setCommission] = useState("");
  const [monthlyProfit, setMonthlyProfit] = useState(0);

  useEffect(() => {
    const orders = parseFloat(monthlyOrders) || 0;
    const price = parseFloat(averagePrice) || 0;
    const comm = parseFloat(commission) || 0;

    const profit = orders * price * ((100 - comm) / 100);
    setMonthlyProfit(profit.toFixed(2));
  }, [monthlyOrders, averagePrice, commission]);

  return (
    <div className="max-w-[1200px] mx-[10px] lg:mx-auto py-[64px] px-[10px] lg:px-[56px] font-GeneralSans bg-[#FFFFFF]">
      <div className=" space-y-[53px]">
        <div className="text-start max-w-[650px]">
          <p className="font-gilroy text-[28px] lg:text-[48px] text-[#FF4F00] font-[800]">
            Save with GoGrub
          </p>
          <p className=" text-[14px] lg:text-[24px] font-[500] text-[#000000]">
            Use the calculator to compute and display your potential monthly
            extra profit with GoGrub.
          </p>
        </div>

        <div className="space-y-[16px] grid gap-[20px] place-items-start lg:flex lg:items-end lg:justify-between">
          <div className=" font-[600] text-[#0A191E] text-[16px] space-y-[24px] max-w-[514px] w-full">
            <p className=" font-[700] text-[24px] text-[#0A191E] font-gilroy">
              Calculate
            </p>
            <div className="space-y-[16px] ">
              <p className=" ">Monthly Orders</p>
              <input
                type="number"
                value={monthlyOrders}
                onChange={(e) => setMonthlyOrders(e.target.value)}
                className="py-[10px] px-[20px] rounded-[4px] border border-[#121212] w-full"
              />
            </div>
            <div className="space-y-[16px] ">
              <p>Average Price per Order</p>
              <input
                type="number"
                value={averagePrice}
                onChange={(e) => setAveragePrice(e.target.value)}
                className="py-[10px] px-[20px] rounded-[4px] border border-[#121212] w-full"
              />
            </div>
            <div className="space-y-[16px] ">
              <p>Commission (%)</p>
              <input
                type="number"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                className="py-[10px] px-[20px] rounded-[4px] border border-[#121212] w-full"
              />
            </div>
          </div>
          <div className=" p-[40px] bg-[#FFF5F0] rounded-[24px] max-w-[518px] h-[448px] w-full flex flex-col items-center text-center justify-between">
            <div className=" ">
              <p className=" font-[700] text-[#0A191E] text-[16px] lg:text-[32px] font-gilroy">
                Monthly Profit
              </p>
              <p className=" font-[700] text-[#0A191E] text-[32px] lg:text-[64px] font-gilroy">
                &#8358; {monthlyProfit}
              </p>
            </div>
            <div
              className=" w-full text-center  cursor-pointer  bg-[#ffffff] border border-primary px-[38px] py-[10px] rounded-[8px] text-primary text-[16px] font-[700]"
              onClick={openModal}
            >
              See Pricing Plans
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
