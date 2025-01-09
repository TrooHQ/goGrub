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
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto max-w-6xl px-4 lg:px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/goGrub/goGrub Logo.svg"
            alt="GoGrub Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Links */}
        <ul
          className={`hidden lg:flex gap-8 items-center text-[16px] font-medium`}
        >
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                href={path}
                className={`transition ${
                  router.pathname === path
                    ? "text-primary font-semibold"
                    : "text-[#171717]"
                } hover:text-primary`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link href="/">
          <p className="hidden lg:block bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition">
            Start your free trial
          </p>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl text-[#171717]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`block text-[16px] ${
                    router.pathname === path
                      ? "text-primary font-semibold"
                      : "text-[#171717]"
                  } hover:text-primary transition`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-center">
            <Link href="/">
              <p className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition">
                Start your free trial
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
