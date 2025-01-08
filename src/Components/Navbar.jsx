import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "#features", label: "Features" },
    { path: "#how-it-works", label: "How It Works" },
    { path: "#faq", label: "FAQ" },
    { path: "#contact", label: "Contact Us" },
  ];

  return (
    <div className="bg-white sticky top-0 z-50 ">
      <div className="container max-w-6xl mx-[10px] lg:mx-auto flex items-center justify-between  py-3 px-4">
        <Link href="/">
          <Image
            src="/goGrub/goGrub Logo.svg"
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>

        <ul
          className={`flex-col lg:flex-row items-center lg:flex gap-6 text-center absolute lg:static bg-white w-full lg:w-auto transition-all duration-300 ${
            isOpen ? "flex top-[60px]" : "hidden lg:flex"
          }`}
        >
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                href={path}
                className={`text-[16px]  ${
                  router.pathname === path
                    ? "text-[#171717] font-[300]"
                    : "text-[#171717] font-[300]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/">
          <p className="hidden lg:block bg-primary text-white px-[24px] py-[10px] rounded-md font-[700]  transition">
            Start your free trial
          </p>
        </Link>

        <div
          className="lg:hidden text-2xl cursor-pointer ml-4"
          onClick={toggleMenu}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 lg:hidden flex justify-center">
          <Link href="/">
            <p className=" bg-primary text-white px-6 py-2 rounded-md font-[700]  transition">
              Start your free trial
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
