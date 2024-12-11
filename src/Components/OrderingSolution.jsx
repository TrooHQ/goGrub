import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OrderingSolution = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      title: "Social Media Integration",
      description:
        "Accept orders directly from Instagram, Facebook, WhatsApp, Twitter, and TikTok.",
      image: "/grubly/Image-1.png",
    },
    {
      title: "Branded Ordering Site",
      description:
        "Build and customize your own site for a consistent brand experience.",
      image: "/grubly/branded.png",
    },
    {
      title: "Real-Time Order Management",
      description:
        "Keep track of every order across platforms with real-time updates.",
      image: "/grubly/RealTime.png",
    },
  ];

  return (
    <div
      className="font-DMSans max-w-5xl mx-[10px] lg:mx-auto py-[10%] relative"
      id="features"
    >
      <div className="max-w-[708px] mx-auto text-center">
        <p className="text-[#414141] text-[16px] font-[500]">
          Focus on what's important-- your business
        </p>
        <p className="max-w-[708px] w-full text-[#112] font-[600] text-[30px] lg:text-[40px]">
          Ordering solution with intergrated back office built to scale your
          business
        </p>
      </div>

      <div className="mt-[24px]">
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className=" grid md:flex items-center md:gap-[40px] gap-[20px] justify-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={400}
                  height={400}
                  className="mb-[24px]"
                />
                <div className="space-y-[16px] max-w-[370px] text-left">
                  <p className="text-[#112] font-[600] text-[24px] lg:text-[32px]">
                    {slide.title}
                  </p>
                  <p className="font-[400] text-[16px] text-[#112]">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center gap-[20px] mt-[24px]">
          <div
            className="cursor-pointer"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <Image
              src="/grubly/buttonLeft.svg"
              alt="Previous"
              width={50}
              height={50}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => sliderRef.current.slickNext()}
          >
            <Image
              src="/grubly/buttonRight.svg"
              alt="Next"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderingSolution;
