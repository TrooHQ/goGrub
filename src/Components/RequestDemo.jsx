"use client";
import Link from "next/link";
import Image from "next/image";
import Icon from "../../public/goGrub/GoGrubLOGOicon.svg";
import { IoChevronDown } from "react-icons/io5";
import React, { useState } from "react";
import TextInput from "./TextInput";
import axios from "axios";
import BaseUrl from "./Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCircleCheck } from "react-icons/fa6";

const RequestDemo = () => {
  const [agreed, setAgreed] = useState(false);
  const [loading, setisLoading] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setRestaurantName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async () => {
    if (
      !name ||
      !email ||
      !phoneNumber ||
      !businessName ||
      !selectedCountry ||
      !selectedDescription ||
      !selectedSource
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    setisLoading(true);
    try {
      const payload = {
        name,
        email,
        phoneNumber,
        businessName,
        country: selectedCountry,
        bestDescribesYou: selectedDescription,
        find: selectedSource,
        newsletter: agreed,
      };

      const response = await axios.post(
        `${BaseUrl}/requestDemo?secretKey=trooAdminUser`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // toast.success(response.data.message);
      setShowModal(true);
      setisLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setRestaurantName("");
      setSelectedCountry("");
      setSelectedDescription("");
      setSelectedSource("");
      setAgreed(false);
    } catch (error) {
      console.error("Error submitting demo request:", error);
      toast.error("An error occurred. Please try again.");
      setisLoading(false);
    }
  };

  return (
    <div className="bg-[#FFF5F0] relative overflow-x-hidden">
      <ToastContainer position="top-right" autoClose={3000} />
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

      <div className="transition-all duration-500 ease-in-out p-[20px]">
        <div className="w-full font-GeneralSans">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/goGrub/gogrubBlack.svg"
                alt="GoGrub Logo"
                width={150}
                height={50}
              />
            </Link>
            <button className="hidden md:block w-full max-w-[212px] border border-[#FF4F00] px-[24px] py-[13px] rounded-[10px] text-[#FF4F00] text-[16px] font-[500]">
              <Link href="https://admin.gogrub.co/" target="_blank">
                Login
              </Link>
            </button>
          </div>

          <div className="max-w-[800px] mx-auto">
            <div className="space-y-[28px] text-center">
              <p className="font-[600] text-[#414141] text-[28px] lg:text-[36px]">
                Get a free Gogrub Demo
              </p>
              <p className="font-[400] text-[18px] lg:text-[24px] text-[#414141]">
                Fill out the form to schedule an online demo with us.
              </p>
            </div>

            <div className="p-[24px] max-w-[515px] mx-auto border rounded-[8px] border-[#FF4F001F] mt-[24px]">
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
                  value={phoneNumber}
                  onChange={setPhone}
                  validationType="phoneNumber"
                />
                <TextInput
                  placeholder="Restaurant Name"
                  value={businessName}
                  onChange={setRestaurantName}
                  validationType="name"
                />

                {/* Country */}
                <div className="relative w-full">
                  <select
                    className="py-4 px-6 rounded-lg bg-transparent border border-[#929292] w-full appearance-none cursor-pointer pr-12"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="">Select Country</option>
                    {[
                      "Nigeria",
                      "Ghana",
                      "Kenya",
                      "South Africa",
                      "Egypt",
                      "Ethiopia",
                      "Tanzania",
                      "Morocco",
                      "Cameroon",
                      "Uganda",
                      "Algeria",
                      "Côte d'Ivoire",
                      "Senegal",
                      "Zimbabwe",
                      "Mali",
                      "Burkina Faso",
                      "Rwanda",
                      "Mozambique",
                      "Malawi",
                      "Zambia",
                    ].map((country) => (
                      <option key={country.toLowerCase()} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <div className="absolute transform -translate-y-1/2 pointer-events-none right-4 top-1/2">
                    <IoChevronDown size={20} color="#929292" />
                  </div>
                </div>

                {/* Description */}
                <div className="relative w-full">
                  <select
                    className="py-4 px-6 rounded-lg bg-transparent border border-[#929292] w-full appearance-none cursor-pointer pr-12"
                    value={selectedDescription}
                    onChange={(e) => setSelectedDescription(e.target.value)}
                  >
                    <option value="">Which best describes you?</option>
                    <option value="exploring">
                      I'm exploring solutions for my business
                    </option>
                    <option value="using-gogrub">I already use GoGrub</option>
                    <option value="customer">
                      I visit or order from businesses using GoGrub
                    </option>
                  </select>
                  <div className="absolute transform -translate-y-1/2 pointer-events-none right-4 top-1/2">
                    <IoChevronDown size={20} color="#929292" />
                  </div>
                </div>

                {/* Source */}
                <div className="relative w-full">
                  <select
                    className="py-4 px-6 rounded-lg bg-transparent border border-[#929292] w-full appearance-none cursor-pointer pr-12"
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                  >
                    <option value="">How did you find out about us?</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="tiktok">Tiktok</option>
                    <option value="twitter">Twitter (X)</option>
                    <option value="friend">From a colleague/friend</option>
                  </select>
                  <div className="absolute transform -translate-y-1/2 pointer-events-none right-4 top-1/2">
                    <IoChevronDown size={20} color="#929292" />
                  </div>
                </div>

                <div className="mt-[50px] flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-[20px] h-[20px] border border-[#929292] rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="text-[18px] font-[400] text-[#414141]"
                  >
                    Email me news and offers from GoGrub
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={
                  !name ||
                  loading ||
                  !email ||
                  !phoneNumber ||
                  !businessName ||
                  !selectedCountry ||
                  !selectedDescription ||
                  !selectedSource
                }
                className={`text-center mt-[40px] w-full px-[38px] py-[12px] rounded-[8px] text-[16px] font-[500] ${!name ||
                  loading ||
                  !email ||
                  !phoneNumber ||
                  !businessName ||
                  !selectedCountry ||
                  !selectedDescription ||
                  !selectedSource
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#303030] text-white hover:bg-[#1a1a1a] cursor-pointer"
                  }`}
              >
                Get a Demo
              </button>
            </div>

            <div className="mt-[18px] max-w-[322px] mx-auto text-center">
              <p className="font-[400] text-[#121212] text-[16px]">
                Already use Gogrub at your restaurant?
              </p>
              <Link href="https://admin.gogrub.co/" target="_blank">
                <p className="font-[500] text-[16px] text-[#FF4F00] underline">
                  Login to Gogrub
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showModal && <div className="fixed inset-0 bg-[#0f0f0fcf] w-screen h-screen top-0 left-0">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-[90%] md:w-[60%] lg:w-[35%] bg-white p-4 lg:p-8 rounded-[16px] shadow-lg flex flex-col items-center space-y-5">
            <FaCircleCheck className="text-green-700 size-12" />

            <h3 className="text-2xl font-semibold">Demo Request Sent Successfully</h3>
            <p className="">We would get in touch with you shortly</p>

            <button
              className="w-full px-4 py-2 text-white transition-colors bg-black rounded-md hover:bg-gray-800"
              onClick={() => window.location.href = '/'}>Go Back Home</button>
          </div>
        </div>

      </div>}
    </div>
  );
};

export default RequestDemo;