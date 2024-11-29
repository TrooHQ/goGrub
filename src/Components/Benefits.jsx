import React, { useRef } from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="font-DMSans max-w-5xl mx-[10px] lg:mx-auto py-[10%] relative">
      <div className="mt-[24px] md:mt-[40px]">
        <div className="grid md:flex items-center gap-[20px] justify-center">
          <div className=" max-w-[318px] w-full">
            <div className=" h-[200px]">
              <div className=" flex items-start gap-[24px]">
                <Image
                  src="/grubly/solar_rocket-bold.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="mb-[24px] self-center"
                />
                <div className="">
                  <p className=" font-[600] text-[24px] text-[#111122]">
                    Boost Sales
                  </p>
                </div>
              </div>
              <p className=" font-[400] text-[16px] text-[#111122]">
                Capture more orders by integrating with popular social
                platforms.
              </p>
            </div>
            <div className=" h-[200px]">
              <div className=" flex items-start gap-[24px]">
                <Image
                  src="/grubly/icon-park-outline_reduce-one.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="mb-[24px] self-center"
                />
                <div className="">
                  <p className=" font-[600] text-[24px] text-[#111122]">
                    Reduce Errors
                  </p>
                </div>
              </div>
              <p className=" font-[400] text-[16px] text-[#111122]">
                Real-time updates ensure everything is in sync.
              </p>
            </div>{" "}
            <div className=" h-[200px]">
              <div className=" flex items-start gap-[24px]">
                <Image
                  src="/grubly/icon-park-solid_time.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="mb-[24px] self-center"
                />
                <div className="">
                  <p className=" font-[600] text-[24px] text-[#111122]">
                    Save Time
                  </p>
                </div>
              </div>
              <p className=" font-[400] text-[16px] text-[#111122]">
                Automatically manage orders and inventory without juggling
                multiple systems.
              </p>
            </div>
          </div>

          <div className="">
            <Image
              src="/grubly/Image-3.png"
              alt="Image"
              width={400}
              height={400}
              className="mb-[24px] self-center"
            />
          </div>

          <div className=" max-w-[318px] w-full">
            <div className=" h-[200px]">
              <div className=" flex items-start gap-[24px]">
                <Image
                  src="/grubly/ic_round-menu.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="mb-[24px] self-center"
                />
                <div className="">
                  <p className=" font-[600] text-[24px] text-[#111122]">Menu</p>
                </div>
              </div>
              <p className=" font-[400] text-[16px] text-[#111122]">
                Showcase your menu with stunning photos to engage guests
              </p>
            </div>
            <div className=" h-[200px]">
              <div className=" flex items-start gap-[24px]">
                <Image
                  src="/grubly/ph_qr-code-fill.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="mb-[24px] self-center"
                />
                <div className="">
                  <p className=" font-[600] text-[24px] text-[#111122]">
                    QR Code
                  </p>
                </div>
              </div>
              <p className=" font-[400] text-[16px] text-[#111122]">
                Custom branded mobile site with QR Code for easy access
              </p>
            </div>{" "}
            <div className=" h-[200px]">
              <div className=" flex items-start gap-[24px]">
                <Image
                  src="/grubly/healthicons_emergency-operations-center.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="mb-[24px] self-center"
                />
                <div className="">
                  <p className=" font-[600] text-[24px] text-[#111122]">
                    Simplify Operations
                  </p>
                </div>
              </div>
              <p className=" font-[400] text-[16px] text-[#111122]">
                Manage all your orders from one central platform—no more manual
                tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
