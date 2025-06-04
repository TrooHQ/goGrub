'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Footer = () => {

  const router = useRouter();

  return (
    <div className=" bg-footer py-[10px]">
      <div className="mx-[10px] md:mx-[40px] 2xl:mx-[158px] mt-[83px] mb-[55px]   ">
        <div className=" grid gap-[20px] md:flex  items-start md:justify-between">
          <div className="  ">
            <Image
              src="/goGrub/goGrubLOGOWhite.svg"
              height={200}
              width={200}
              alt=""
              className=" "
            />
            {/* <p className="text-white font-[400] text-[16px] md:hidden py-[4px]">
              &copy; {new Date().getFullYear()} Troo Inc. All Rights Reserved.
            </p> */}
          </div>
          <div className="   grid gap-[20px] sm:grid-cols-2 md:flex md:gap-[64px] items-start">
            <div className=" space-y-[16px] px-[16px]   h-full">
              <p className=" text-[16px] font-[700] text-white">Features</p>

              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                Online Ordering Link
              </p>
              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                Instant Notifications
              </p>
              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                Online Payments
              </p>
              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                Customer Support
              </p>
              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                Social Media Integration{" "}
              </p>
            </div>

            <div className="   space-y-[16px] px-[16px] h-full">
              <p className=" text-[16px] font-[700] text-white">Company</p>
              <p className=" font-[500] text-[14px] text-[#B6B6B6] cursor-pointer" onClick={() => router.push('#about')}>About us</p>

              <p className=" font-[500] text-[14px] text-[#B6B6B6] cursor-pointer" onClick={() => router.push('/request-demo')}>
                Contact us
              </p>
            </div>
            <div className=" space-y-[16px] px-[16px] h-full  ">
              <p className=" text-[16px] font-[700] text-white">Socials</p>
              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                <a href="#" target="">
                  Facebook
                </a>
              </p>
              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                <a
                  href="https://www.instagram.com/gogrubco/profilecard/?igsh=MWkxMGMxbnM4cGZsbQ=="
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                <a href="#" target="">
                  Linkedin
                </a>
              </p>
              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                <a href="#" target="">
                  Threads
                </a>
              </p>

              <p className=" font-[500] text-[14px] text-[#B6B6B6]">
                <a
                  href="https://x.com/gogrubhq?s=21&t=NUh6IooJQWB8LPE5acr5Mw"
                  target="_blank"
                >
                  Twitter (X)
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="px-[16px] py-[29px] grid gap-[10px] md:flex items-center md:justify-between mt-[100px]">
          <p className=" text-white font-[400] text-[14px] md:text-[16px]">
            &copy; {new Date().getFullYear()} GoGrub-Troo Inc. All Rights
            Reserved.
          </p>
          <div className=" flex items-center space-x-[16px]">
            <p className=" font-[500] text-[14px] text-[#B6B6B6]">
              Terms of Service
            </p>
            <div className="w-[7px] h-[7px] rounded-full bg-[#B6B6B6]"></div>
            <p className=" font-[500] text-[14px] text-[#B6B6B6]">
              Privacy Policy
            </p>
            <div className="w-[7px] h-[7px] rounded-full bg-[#B6B6B6]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
