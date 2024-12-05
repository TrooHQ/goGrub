import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const HeroSection = () => {
  const [currentSocial, setCurrentSocial] = useState(0);

  const socials = [
    { icon: <FaInstagram />, name: "Instagram", color: "#E4405F" },
    { icon: <FaFacebook />, name: "Facebook", color: "#1877F2" },
    { icon: <FaWhatsapp />, name: "WhatsApp", color: "#2AA234" },
    { icon: <BsTwitterX />, name: "Twitter", color: "#111122" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSocial((prev) => (prev + 1) % socials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [socials.length]);

  return (
    <div className="max-w-6xl mx-[10px] lg:mx-auto py-[10%] px-[10px]">
      <div className="grid gap-[20px] place-items-center lg:flex items-center lg:justify-between">
        <div className="max-w-[700px]">
          <p className="text-[14px] font-[500] text-[#111122]">
            Food vendors, Caterers & Restaurants
          </p>

          <p className="font-[600] text-[40px] lg:text-[48px] text-[#111122]">
            Your link to sell better with
          </p>

          <div
            className="font-[600] text-[40px] lg:text-[48px] overflow-hidden h-[48px]"
            style={{ display: "inline-block" }}
          >
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(-${currentSocial * 48}px)`,
              }}
            >
              {socials.map((social, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2"
                  style={{
                    color: social.color,
                    height: "48px",
                    display: "flex",
                  }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-[500] text-[14px] lg:text-[16px] text-[#414141] max-w-[460px] w-full my-[14px]">
            Your own branded site to easily manage orders, menu and customers—
            all in one place
          </p>

          <p className="bg-[#5955B3] text-[16px] inline text-white px-[16px] py-[8px] rounded-[4px] font-[500] hover:bg-[#4200FF] transition">
            Start your free trial
          </p>
        </div>

        <div className="hidden lg:block rounded-[8px] overflow-hidden">
          <Image
            src="/grubly/HeroImage_.png"
            alt="Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
