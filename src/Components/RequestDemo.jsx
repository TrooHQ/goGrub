"use client";
import Link from "next/link";
import Image from "next/image";
import Icon from "../../public/goGrub/GoGrubLOGOicon.svg";

import React, { useState } from "react";
const RequestDemo = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className=" bg-[#FFF5F0] relative">
      <div className=" absolute bottom-0 left-0">
        <Image src={Icon} alt="" className=" max-w-[400px] w-full" />
      </div>

      <div className="absolute bottom-0 right-0">
        <Image
          src={Icon}
          alt=""
          className="max-w-[400px] w-full scale-x-[-1]"
        />
      </div>

      <div className="  transition-all duration-500 ease-in-out p-[20px] z-50">
        <div className="font-GeneralSans w-full transition-all duration-500 ease-in-out">
          <div className=" flex items-center justify-between">
            <Link href="/">
              <Image
                src="/goGrub/gogrubBlack.svg"
                alt="Troo Logo"
                width={150}
                height={50}
              />
            </Link>

            <button
              className={`w-full max-w-[212px] border border-[#FF4F00]   px-[24px] py-[13px] rounded-[10px] text-[#FF4F00] text-[16px] font-[500] transition-all duration-500 ease-in-out                 `}
            >
              <Link href="https://gogrub-client.netlify.app/" target="blank">
                {" "}
                Login
              </Link>
            </button>
          </div>

          <div className=" max-w-[800px] mx-auto">
            <div className="space-y-[28px] text-center">
              <p className="font-[600] text-[#414141] text-[28px] lg:text-[36px] transition-all duration-500 ease-in-out">
                Get a free Gogrub Demo
              </p>
              <p className="font-[400] text-[18px] lg:text-[24px] text-[#414141] transition-all duration-500 ease-in-out">
                Fill out the form to schedule an online demo with us.
              </p>
            </div>

            <div className="  p-[24px] w-full text-center max-w-[515px] mx-auto border rounded-[8px] border-[#FF4F001F]  mt-[24px]">
              <div className=" space-y-[20px] ">
                <input
                  type="text"
                  placeholder="First & Last name"
                  className="py-[16px] px-[24px] rounded-[8px] bg-transparent border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="py-[16px] px-[24px] rounded-[8px] bg-transparent border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="py-[16px] px-[24px] rounded-[8px] bg-transparent border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full"
                />
                <input
                  type="text"
                  placeholder="Restaurant Name"
                  className="py-[16px] px-[24px] rounded-[8px] bg-transparent border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full"
                />

                <select
                  className="  py-4 px-6 rounded-lg bg-transparent border border-[#929292] placeholder:text-base placeholder:font-normal placeholder:text-[#929292] w-full appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Nigeria
                  </option>
                  <option value="abia">Abia</option>
                  <option value="adamawa">Adamawa</option>
                  <option value="akwa-ibom">Akwa Ibom</option>
                  <option value="anambra">Anambra</option>
                  <option value="bauchi">Bauchi</option>
                  <option value="bayelsa">Bayelsa</option>
                  <option value="benue">Benue</option>
                  <option value="borno">Borno</option>
                  <option value="cross-river">Cross River</option>
                  <option value="delta">Delta</option>
                  <option value="ebonyi">Ebonyi</option>
                  <option value="edo">Edo</option>
                  <option value="ekiti">Ekiti</option>
                  <option value="enugu">Enugu</option>
                  <option value="fct">Federal Capital Territory</option>
                  <option value="gombe">Gombe</option>
                  <option value="imo">Imo</option>
                  <option value="jigawa">Jigawa</option>
                  <option value="kaduna">Kaduna</option>
                  <option value="kano">Kano</option>
                  <option value="katsina">Katsina</option>
                  <option value="kebbi">Kebbi</option>
                  <option value="kogi">Kogi</option>
                  <option value="kwara">Kwara</option>
                  <option value="lagos">Lagos</option>
                  <option value="nasarawa">Nasarawa</option>
                  <option value="niger">Niger</option>
                  <option value="ogun">Ogun</option>
                  <option value="ondo">Ondo</option>
                  <option value="osun">Osun</option>
                  <option value="oyo">Oyo</option>
                  <option value="plateau">Plateau</option>
                  <option value="rivers">Rivers</option>
                  <option value="sokoto">Sokoto</option>
                  <option value="taraba">Taraba</option>
                  <option value="yobe">Yobe</option>
                  <option value="zamfara">Zamfara</option>
                </select>

                <select
                  className="py-4 px-6 rounded-lg bg-transparent border border-[#929292] placeholder:text-base placeholder:font-normal placeholder:text-[#929292] w-full appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Which best describes?
                  </option>
                  <option value="looking-for-solution">
                    I’m exploring solutions for my business{" "}
                  </option>
                  <option value="already-using-gogrub">
                    {" "}
                    ⁠I already use GoGrub{" "}
                  </option>

                  <option value="visit-order">
                    {" "}
                    ⁠I visit or order from businesses using GoGrub
                  </option>
                </select>
                <select
                  className="py-4 px-6 rounded-lg bg-transparent border border-[#929292] placeholder:text-base placeholder:font-normal placeholder:text-[#929292] w-full appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    How did you find out about us?
                  </option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">Tiktok</option>
                  <option value="twitter">Twitter (X)</option>
                </select>
                <div className="mt-[50px] flex items-center gap-[10px] transition-all duration-500 ease-in-out">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-[20px] h-[20px] border border-[#929292] rounded transition-all duration-500 ease-in-out"
                  />
                  <label
                    htmlFor="terms"
                    className="text-[18px] font-[400] text-[#414141] transition-all duration-500 ease-in-out"
                  >
                    Email me news and offers from Gogrub
                  </label>
                </div>
              </div>

              <div className="text-center mt-[40px] cursor-pointer  w-full bg-[#303030] px-[38px] py-[12px] rounded-[8px] text-[#ffffff] text-[16px] font-[500]">
                Get a Demo
              </div>
            </div>

            <div className=" mt-[18px] max-w-[322px] mx-auto text-center">
              <p className=" font-[400] text-[#121212] text-[16px]">
                Already use Gogrub at your restaurant?{" "}
              </p>
              <p className=" font-[500] text-[16px] text-[#FF4F00] underline">
                Login to Gogrub
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
