import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon1 from "../../public/goGrub/bi_qr-code.svg";
import Icon2 from "../../public/goGrub/Boost Sales Icon.svg";
import Icon3 from "../../public/goGrub/gis_simplify.svg";
import Icon4 from "../../public/goGrub/Group.svg";
import Icon5 from "../../public/goGrub/lets-icons_reduce.svg";
import Icon6 from "../../public/goGrub/timelapse.svg";
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
    <div className="bg-[#FFF5F1] " id="features">
      <div className=" font-DMSans max-w-6xl mx-[10px] lg:mx-auto py-[10%] relative ">
        <div className="max-w-[628px] text-start">
          <p className="text-[#414141] text-[16px] lg:text-[24px] font-[500]  font-GeneralSans">
            Focus on what's important-- your business
          </p>
          <p className=" leading-[40px] lg:leading-[76px] text-[#0A191E] font-[800] text-[30px] lg:text-[64px] font-gilroy">
            Why Choose GoGrub?
          </p>
        </div>

        <div className="mt-[36px] space-y-[15px]">
          <div className=" grid md:flex items-start gap-[15px]">
            <div className="bg-[#E10101] py-[40px] px-[56px] rounded-[24px] flex flex-col justify-between h-[616px] max-w-[481px] w-full">
              <div className="text-[#ffffff]">
                <p className="font-[800] text-[32px]">Boost Sales</p>
                <p className="font-[400] text-[24px]">
                  Capture more orders by integrating with popular social
                  platforms.
                </p>
              </div>
              <div>
                <Image src={Icon2} alt="alt" />
              </div>
            </div>

            <div className=" space-y-[16px]">
              <div className="bg-[#FF4F00] py-[40px] px-[56px] rounded-[24px] flex items-center justify-between h-[300px] max-w-[705px] md:w-[705px] w-full">
                <div className="text-[#ffffff] max-w-[364px]">
                  <p className="font-[800] text-[32px]">Reduce Errors</p>
                  <p className="font-[400] text-[24px]">
                    Real-time updates ensure everything is in sync.
                  </p>
                </div>
                <div>
                  <Image src={Icon5} alt="alt" />
                </div>
              </div>
              <div className="bg-[#000000] py-[40px] px-[56px] rounded-[24px] flex items-center justify-between h-[300px] max-w-[705px] md:w-[705px] w-full">
                <div className="text-[#ffffff] max-w-[364px]">
                  <p className="font-[800] text-[32px]">Save Time</p>
                  <p className="font-[400] text-[24px]">
                    Automatically manage orders and inventory without juggling
                    multiple systems.
                  </p>
                </div>
                <div>
                  <Image src={Icon6} alt="alt" />
                </div>
              </div>
            </div>
          </div>

          <div className=" place-items-center grid md:grid-cols-3 gap-[15px]">
            <div className="bg-[#FF4F00] py-[40px] px-[56px] rounded-[24px] flex flex-col justify-between h-full md:max-w-[372px] w-full">
              <div className="text-[#ffffff]">
                <p className="font-[800] text-[32px]">Menu</p>
                <p className="font-[400] text-[24px]">
                  Showcase your menu with stunning photos to engage guests.
                </p>
              </div>
              <div>
                <Image src={Icon4} alt="alt" />
              </div>
            </div>

            <div className="bg-[#E10101] py-[40px] px-[56px] rounded-[24px] flex flex-col justify-between h-full md:max-w-[372px] w-full">
              <div className="text-[#ffffff]">
                <p className="font-[800] text-[32px]">QR Code</p>
                <p className="font-[400] text-[24px]">
                  Custom branded mobile site with QR Code for easy access.
                </p>
              </div>
              <div>
                <Image src={Icon1} alt="alt" />
              </div>
            </div>

            <div className="bg-[#FFFFFF] drop-shadow pb-[40px] px-[39px] rounded-[24px] flex flex-col justify-between h-full md:max-w-[372px] w-full">
              <div className="flex justify-end">
                <Image src={Icon3} alt="alt" />
              </div>
              <div>
                <p className="font-[800] text-[32px] text-[#0A191E]">
                  Simplified Operations
                </p>
                <p className="font-[400] text-[24px] text-[#000000]">
                  Manage all your orders from one central platform—no more
                  manual tracking.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[24px] hidden">
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
    </div>
  );
};

export default OrderingSolution;
