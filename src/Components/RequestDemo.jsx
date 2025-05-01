"use client";
import Link from "next/link";
import Image from "next/image";
import Icon from "../../public/goGrub/GoGrubLOGOicon.svg";
import { IoChevronDown } from "react-icons/io5";

import React, { useState } from "react";
import TextInput from "./TextInput";
const RequestDemo = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [restaurantName, setRestaurantName] = useState("");

  return (
    <div className="bg-[#FFF5F0] relative">
      <div className="absolute bottom-0 left-0 hidden lg:block">
        <Image src={Icon} alt="" className="max-w-[400px] w-full" />
      </div>

      <div className="absolute bottom-0 right-0 hidden lg:block">
        <Image
          src={Icon}
          alt=""
          className="max-w-[400px] w-full scale-x-[-1]"
        />
      </div>

      <div className="transition-all duration-500 ease-in-out p-[20px] ">
        <div className="font-GeneralSans w-full transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/goGrub/gogrubBlack.svg"
                alt="Troo Logo"
                width={150}
                height={50}
              />
            </Link>

            <button className=" hidden md:block w-full max-w-[212px] border border-[#FF4F00] px-[24px] py-[13px] rounded-[10px] text-[#FF4F00] text-[16px] font-[500] transition-all duration-500 ease-in-out">
              <Link href="https://gogrub-client.netlify.app/" target="blank">
                {" "}
                Login
              </Link>
            </button>
          </div>

          <div className="max-w-[800px] mx-auto ">
            <div className="space-y-[28px] text-center">
              <p className="font-[600] text-[#414141] text-[28px] lg:text-[36px] transition-all duration-500 ease-in-out">
                Get a free Gogrub Demo
              </p>
              <p className="font-[400] text-[18px] lg:text-[24px] text-[#414141] transition-all duration-500 ease-in-out">
                Fill out the form to schedule an online demo with us.
              </p>
            </div>

            <div className="p-[24px] w-full text-center max-w-[515px] mx-auto border rounded-[8px] border-[#FF4F001F] mt-[24px] ">
              <div className="space-y-[20px]">
                <TextInput
                  placeholder="First & Last name"
                  value={name}
                  onChange={setName}
                  validationType="name"
                />

                <TextInput
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                  validationType="email"
                />

                <TextInput
                  placeholder="Phone Number"
                  value={phone}
                  onChange={setPhone}
                  validationType="phone"
                />
                <TextInput
                  placeholder="Restaurant Name"
                  value={restaurantName}
                  onChange={setRestaurantName}
                  validationType="name"
                />

                <div className="relative w-full">
                  <select
                    className="py-4 px-6 rounded-lg bg-transparent border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full appearance-none cursor-pointer pr-12"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="nigeria" disabled>
                      Select Country
                    </option>
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                    <option value="kenya">Kenya</option>
                    <option value="south-africa">South Africa</option>
                    <option value="egypt">Egypt</option>
                    <option value="ethiopia">Ethiopia</option>
                    <option value="tanzania">Tanzania</option>
                    <option value="morocco">Morocco</option>
                    <option value="cameroon">Cameroon</option>
                    <option value="uganda">Uganda</option>
                    <option value="algeria">Algeria</option>
                    <option value="cote-d-ivoire">Côte d'Ivoire</option>
                    <option value="senegal">Senegal</option>
                    <option value="zimbabwe">Zimbabwe</option>
                    <option value="mali">Mali</option>
                    <option value="burkina-faso">Burkina Faso</option>
                    <option value="rwanda">Rwanda</option>
                    <option value="mozambique">Mozambique</option>
                    <option value="malawi">Malawi</option>
                    <option value="zambia">Zambia</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <IoChevronDown size={20} color="#929292" />
                  </div>
                </div>

                <div className="relative w-full">
                  <select
                    className="py-4 px-6 rounded-lg bg-transparent border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full appearance-none cursor-pointer pr-12"
                    value={selectedDescription}
                    onChange={(e) => setSelectedDescription(e.target.value)}
                  >
                    <option value="" disabled>
                      Which best describes?
                    </option>
                    <option value="looking-for-solution">
                      I'm exploring solutions for my business
                    </option>
                    <option value="already-using-gogrub">
                      I already use GoGrub
                    </option>
                    <option value="visit-order">
                      I visit or order from businesses using GoGrub
                    </option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <IoChevronDown size={20} color="#929292" />
                  </div>
                </div>

                <div className="relative w-full">
                  <select
                    className="py-4 px-6 rounded-lg bg-transparent border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full appearance-none cursor-pointer pr-12"
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                  >
                    <option value="" disabled>
                      How did you find out about us?
                    </option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">Tiktok</option>
                    <option value="twitter">Twitter (X)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <IoChevronDown size={20} color="#929292" />
                  </div>
                </div>

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

              <div className="text-center mt-[40px] cursor-pointer w-full bg-[#303030] px-[38px] py-[12px] rounded-[8px] text-[#ffffff] text-[16px] font-[500]">
                Get a Demo
              </div>
            </div>

            <div className="mt-[18px] max-w-[322px] mx-auto text-center ">
              <p className="font-[400] text-[#121212] text-[16px]">
                Already use Gogrub at your restaurant?{" "}
              </p>
              <Link href="https://gogrub-client.netlify.app/" target="blank">
                <p className="font-[500] text-[16px] text-[#FF4F00] underline">
                  Login to Gogrub
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
