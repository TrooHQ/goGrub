import Image from "next/image";
import React from "react";

const BoostBusiness = () => {
  return (
    <div className=" font-DMSans max-w-5xl mx-[10px] lg:mx-auto py-[10%]">
      <div className=" grid place-items-center items-start gap-[40px] md:grid-cols-2 lg:grid-cols-3">
        <div className="  max-w-[356px] w-full space-y-[40px]">
          <Image src="/grubly/bxs_store.svg" width={50} height={50} />
          <p className=" font-[500] text-[24px] text-[#111122]">
            Boost your business by promoting your store across every social
            media channel.
          </p>
        </div>
        <div className=" max-w-[356px] w-full space-y-[40px]">
          <Image src="/grubly/bxs_food-menu.svg" width={50} height={50} />
          <p className=" font-[500] text-[24px] text-[#111122]">
            Get flexible with your menu pricing, increase repeat businesses and
            easily manage your customers
          </p>
        </div>
        <div className=" max-w-[356px] w-full space-y-[40px]">
          <Image
            src="/grubly/material-symbols_orders-rounded.svg"
            width={50}
            height={50}
          />
          <p className=" font-[500] text-[24px] text-[#111122]">
            Take orders directly, skip commissions and keep more earnings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoostBusiness;
