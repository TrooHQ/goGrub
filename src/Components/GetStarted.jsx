import React from "react";
import Icon1 from "../../public/goGrub/bi_menu-up.svg";
import Icon2 from "../../public/goGrub/ic_sharp-restaurant-menu.svg";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div className="max-w-6xl mx-[10px] lg:mx-auto px-[10px] font-GeneralSans">
      <div className="text-center max-h-[460px] w-full rounded-[24px] p-[20px] lg:p-[60px]  text-[#ffffff] relative ">
        <Image src={Icon1} alt="icon1" className=" absolute top-0 left-0" />
        <div className=" max-w-[800px] mx-auto text-[#0A191E] ">
          <p className="font-[800] text-[30px] lg:text-[64px]">
            Get Started Today
          </p>
          <p className="font-[500] text-[16px] lg:text-[24px]">
            Transform your restaurant’s online sales with GoGrub?. Start
            managing orders from social platforms and your own site today.
          </p>

          <div className="mt-[30px]">
            <p className="bg-primary text-[16px] inline text-white px-[16px] py-[8px] rounded-[8px] font-[500] hover:bg-[#4200FF] transition ">
              Request a demo
            </p>
          </div>
        </div>
        <Image src={Icon2} alt="icon1" className=" absolute bottom-0 right-0" />
      </div>
    </div>
  );
};

export default GetStarted;
