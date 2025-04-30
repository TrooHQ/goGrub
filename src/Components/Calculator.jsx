"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Calculator = () => {
  const [monthlyOrders, setMonthlyOrders] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [commission, setCommission] = useState(20);
  const [monthlyProfit, setMonthlyProfit] = useState("0");
  const [monthlyProfit5Percent, setMonthlyProfit5Percent] = useState("0");

  useEffect(() => {
    const orders = parseFloat(monthlyOrders) || 0;
    const price = parseFloat(averagePrice) || 0;
    const comm = parseFloat(commission) || 0;

    const profit = (orders * price * comm) / 100;
    setMonthlyProfit(profit.toLocaleString().toString());

    const profit5Percent = (orders * price * 5) / 100;
    setMonthlyProfit5Percent(profit5Percent.toLocaleString().toString());
  }, [monthlyOrders, averagePrice, commission]);

  return (
    <div className=" bg-[#FFFFFF]">
      <div className=" max-w-7xl mx-[10px] lg:mx-auto py-[64px] px-[10px] lg:px-[56px] font-GeneralSans ">
        <div className=" space-y-[53px]">
          <div className="text-start md:text-center mx-auto max-w-[950px] ">
            <p className="font-gilroy text-[28px] lg:text-[48px] text-[#FF4F00] font-[800]">
              See How Much You Can <br />
              Save with GoGrub
            </p>
            <p className=" text-[14px] lg:text-[24px] font-[500] text-[#000000]">
              Find out how much more you keep when you switch to{" "}
              <span className=" font-[700] text-[#FF4F00]">
                our transparent pricing model of 5%
              </span>{" "}
              compared to competitors charging{" "}
              <span className=" font-[700] text-[#0A191E]">20%</span> per
              transaction!
            </p>
          </div>

          <div className=" border-[4px]  border-[#FFF5F0] rounded-[24px] grid gap-[20px] lg:grid-cols-2  lg:gap-[0px]">
            <div className="py-[20px] lg:py-[40px] px-[20px] lg:px-[56px] font-[600] text-[#0A191E] text-[16px] space-y-[24px] lg:space-y-[56px] lg:max-w-[514px] w-full">
              <p className=" font-[700] text-[24px] text-[#0A191E] font-gilroy">
                Calculate
              </p>
              <div className="space-y-[24px]">
                <div className="space-y-[16px] ">
                  <p className=" ">Monthly Orders</p>
                  <input
                    value={monthlyOrders}
                    onChange={(e) =>
                      setMonthlyOrders(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    className="py-[20px] px-[20px] rounded-[16px] shadow-md shadow-[#FF4F0030] w-full focus:outline-none focus:border-[#FF4F0030] focus:ring-1 focus:ring-[#FF4F0030]"
                  />
                </div>
                <div className="space-y-[16px] ">
                  <p>Average Price per Order</p>
                  <input
                    value={averagePrice}
                    onChange={(e) =>
                      setAveragePrice(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    className="py-[20px] px-[20px] rounded-[16px] shadow-md shadow-[#FF4F0030] w-full focus:outline-none focus:border-[#FF4F0030] focus:ring-1 focus:ring-[#FF4F0030]"
                  />
                </div>
                <div className="space-y-[16px]  hidden">
                  <p>Commission (%)</p>
                  <input
                    value={commission}
                    onChange={(e) =>
                      setCommission(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    className="py-[20px] px-[20px] rounded-[4px] shadow-md w-full focus:outline-none focus:border-[#FF4F0030] focus:ring-1 focus:ring-[#FF4F0030]"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className=" border-l border-[#FFF5F0]">
              <div className="p-[20px] lg:p-[40px] lg:max-w-[518px]">
                <div className=" lg:max-w-[400px] mx-auto w-full space-y-[24px] ">
                  <div className="  space-y-[24px]">
                    <p className=" font-[800] text-[#0A191E] text-[14px] lg:text-[32px] font-gilroy ">
                      Estimated Monthly Savings
                    </p>
                    <p className=" font-[900] text-[#FF4F00] text-[44px] lg:text-[92px]">
                      &#8358;{" "}
                      {(
                        parseFloat(monthlyProfit.replace(/,/g, "")) -
                        parseFloat(monthlyProfit5Percent.replace(/,/g, ""))
                      ).toLocaleString()}
                    </p>
                  </div>

                  <div className=" w-full text-center  cursor-pointer  text-[#ffffff] border border-primary bg-primary px-[38px] py-[10px] rounded-[8px]  text-[16px] font-[700]">
                    <Link href="/business-information">See Pricing Plans</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
