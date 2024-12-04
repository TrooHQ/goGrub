import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const HeroSection = () => {
  const [currentSocial, setCurrentSocial] = useState(0);

  const socials = [
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaWhatsapp />, name: "WhatsApp" },
    { icon: <FaTwitter />, name: "Twitter" },
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

          <div className="font-[600] text-[40px] lg:text-[48px] text-[#5955B3]">
            <div
              className="animate-slideDown "
              style={{ display: "inline-block", height: "48px" }}
            >
              <div className="flex items-center space-x-2">
                {socials[currentSocial].icon}
                <span>{socials[currentSocial].name}</span>
              </div>
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
