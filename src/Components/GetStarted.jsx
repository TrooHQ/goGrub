import React from "react";

const GetStarted = () => {
  return (
    <div className="max-w-6xl mx-[10px] lg:mx-auto px-[10px]">
      <div
        className="text-center max-h-[460px] w-full rounded-[24px] p-[20px] lg:p-[60px]  text-[#ffffff] relative"
        style={{
          backgroundImage: `url('/grubly/restaurantImage.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#25244B] bg-opacity-90 rounded-[24px]"></div>

        <div className="relative z-10 max-w-[800px] mx-auto">
          <p className="font-[600] text-[30px] lg:text-[40px]">
            Get Started Today
          </p>
          <p className="font-[500] text-[16px] lg:text-[20px]">
            Transform your restaurant’s online sales with Grubly. Start managing
            orders from social platforms and your own site today.
          </p>

          <div className="mt-[30px]">
            <p className="bg-[#5955B3] text-[16px] inline text-white px-[16px] py-[8px] rounded-[4px] font-[500] hover:bg-[#4200FF] transition ">
              Request a demo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
