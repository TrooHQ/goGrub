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
    <div className="max-w-[1200px] mx-[10px] lg:mx-auto py-[64px] px-[10px] lg:px-[56px] font-GeneralSans bg-[#FFFFFF]">
      <div className=" space-y-[53px]">
        <div className="text-start md:text-center mx-auto max-w-[950px] ">
          <p className="font-gilroy text-[28px] lg:text-[48px] text-[#FF4F00] font-[800]">
            See How Much You Can <br />
            Save with GoGrub
          </p>
          <p className=" text-[14px] lg:text-[24px] font-[500] text-[#000000]">
            Find out how much more you keep when you switch to our transparent
            pricing model compared to competitors charging 20% per transaction!
          </p>
        </div>

        <div className="space-y-[16px] grid gap-[20px] place-items-start md:place-items-center lg:flex lg:items-end lg:justify-between">
          <div className=" font-[600] text-[#0A191E] text-[16px] space-y-[24px] lg:max-w-[514px] w-full">
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
            <div className="space-y-[16px]  hidden">
              <p>Commission (%)</p>
              <input
                type="number"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                className="py-[10px] px-[20px] rounded-[4px] border border-[#121212] w-full"
                readOnly
              />
            </div>
          </div>
          {/* <div className=" p-[40px] bg-[#FFF5F0] rounded-[24px] max-w-[518px] min-h-[448px] w-full flex flex-col items-center text-center justify-between">
            <div className=" max-w-[400px] mx-auto text-center w-full space-y-[26px]">
              <div className=" space-y-16px">
                <p className=" font-[700] text-[#0A191E] text-[16px] lg:text-[24px] font-gilroy">
                  Monthly Profit with GoGrub at 5% Commission
                </p>
                <p className=" font-[700] text-[#FF4F00] text-[32px] lg:text-[64px] font-gilroy">
                  &#8358;{" "}
                  {parseFloat(
                    monthlyProfit5Percent.replace(/,/g, "")
                  ).toLocaleString()}
                </p>
              </div>
              <div className=" py-[20px] px-[10px] bg-[#FFFFFF] rounded-[8px] ">
                <p className=" font-[500] text-[#0A191E] text-[14px] lg:text-[16px] font-gilroy ">
                  Monthly Profit with competitors at 20% <br />
                  <span className=" font-[600]">
                    &#8358;{" "}
                    {parseFloat(
                      monthlyProfit.replace(/,/g, "")
                    ).toLocaleString()}
                  </span>
                </p>
              </div>

              <p className=" font-[500] text-[#0A191E] text-[14px] lg:text-[16px] font-gilroy ">
                Save
                <span className=" font-[600] text-[#FF4F00]">
                  {" "}
                  &#8358;
                  {(
                    parseFloat(monthlyProfit5Percent.replace(/,/g, "")) -
                    parseFloat(monthlyProfit.replace(/,/g, ""))
                  ).toLocaleString()}{" "}
                </span>{" "}
                <span className=" font-[600] text-[#0A191E]">using GoGrub</span>
              </p>
              <div className=" w-full text-center  cursor-pointer  bg-[#ffffff] border border-primary px-[38px] py-[10px] rounded-[8px] text-primary text-[16px] font-[700]">
                <Link href="/business-information">See Pricing Plans</Link>
              </div>
            </div>
          </div> */}
          <div className=" p-[40px] bg-[#FFF5F0] rounded-[24px] lg:max-w-[518px] min-h-[448px] w-full flex flex-col items-center text-start justify-between">
            <div className=" lg:max-w-[400px] mx-auto w-full space-y-[26px]">
              <div className=" space-y-[30px] text-start">
                <p className=" font-[700] text-[#0A191E] text-[16px] lg:text-[24px] font-gilroy">
                  Commission based on orders
                </p>
                <div className=" bg-white border border-[#FF4F00] rounded-full py-[6px] px-[9px] w-full  flex items-center gap-[9px]">
                  <div className=" py-[9px] bg-[#FF4F00] rounded-full lg:max-w-[205px]  text-white text-center w-full">
                    <p className=" font-DMSans text-[16px] font-[700]">
                      &#8358;{" "}
                      {parseFloat(
                        monthlyProfit5Percent.replace(/,/g, "")
                      ).toLocaleString()}
                    </p>
                    <p className=" font-[400] text-[14px]"> with GoGrub 5% </p>
                  </div>
                  <div className=" py-[9px] bg-[#606060] rounded-full lg:max-w-[205px]  text-white text-center w-full">
                    <p className=" font-DMSans text-[16px] font-[700]">
                      &#8358;{" "}
                      {parseFloat(
                        monthlyProfit.replace(/,/g, "")
                      ).toLocaleString()}
                    </p>
                    <p className=" font-[400] text-[14px]"> with others 20% </p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <p className=" font-[700] text-[#0A191E] text-[14px] lg:text-[24px] font-gilroy ">
                  Save
                </p>
                <p className=" font-[700] text-[#FF4F00] text-[44px] lg:text-[64px]">
                  &#8358;{" "}
                  {(
                    parseFloat(monthlyProfit.replace(/,/g, "")) -
                    parseFloat(monthlyProfit5Percent.replace(/,/g, ""))
                  ).toLocaleString()}
                  <span className=" ml-[10px] font-[400] text-[16px] text-[#0A191E]">
                    using GoGrub
                  </span>
                </p>
              </div>

              <div className=" w-full text-center  cursor-pointer  bg-[#ffffff] border border-primary px-[38px] py-[10px] rounded-[8px] text-primary text-[16px] font-[700]">
                <Link href="/business-information">See Pricing Plans</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
