import React, { useState } from "react";
import { TbCircleChevronRight } from "react-icons/tb";
import { BiSolidChevronDownCircle } from "react-icons/bi";
const Faq = () => {
  const faqs = [
    {
      question: "How does GoGrub work?",
      answer:
        "GoGrub is an online ordering platform that helps restaurants, food vendors, and cafes manage orders efficiently. Customers can browse your menu, place orders for pickup or delivery, and pay online—all from one seamless platform. You receive and manage these orders in real-time, ensuring a smooth operation.",
    },
    {
      question: "Do I need to sign a contract to use GoGrub?",
      answer:
        "No, you don’t need to sign a long-term contract. GoGrub offers a flexible model that allows you to start and stop at any time, giving you full control over your business.",
    },
    {
      question: "What payment methods does GoGrub accept?",
      answer:
        "GoGrub supports multiple payment methods, including debit/credit cards, bank transfers, and mobile payment solutions, ensuring a seamless checkout experience for your customers.",
    },
    {
      question: "Are there any commissions or hidden fees?",
      answer:
        "No hidden fees! GoGrub operates on a transparent pricing model with no hefty commissions eating into your profits. You get to keep more of what you earn.",
    },
    {
      question: "Can GoGrub integrate with my existing POS system?",
      answer:
        "Yes! GoGrub is designed to integrate with various POS systems, allowing for smooth order processing without disrupting your current operations.",
    },
    {
      question: "What kind of support does GoGrub offer?",
      answer:
        "We provide 24/7 customer support via chat, email, and phone to assist with any technical or operational issues. Our team is always ready to help you get the most out of GoGrub.",
    },
    {
      question: "How can GoGrub help me grow my restaurant?",
      answer:
        "GoGrub boosts your restaurant’s online visibility, helps streamline orders, and enhances customer experience. With powerful analytics, automated marketing tools, and a smooth ordering process, you can attract more customers and increase sales effortlessly",
    },
    {
      question: "How do I get started with GoGrub?",
      answer:
        "Getting started is easy! Simply sign up, set up your menu, and start accepting orders. Our team is available to guide you through the onboarding process and ensure a smooth setup.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="max-w-6xl mx-[10px] lg:mx-auto px-[10px] mb-[200px] mt-[50px] lg:mt-[100px]"
      id="faq"
    >
      <div className="max-w-[900px] mx-auto">
        <p className="font-[800] text-[30px] text-[#0A191E] lg:text-[64px] text-center mb-[40px]">
          Frequently Asked Questions
        </p>
        <div className="space-y-[16px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#FFFFFF]  shadow-md rounded-[16px] py-[24px] lg:py-[44px] px-[40px] cursor-pointer ${
                openIndex === index ? "border-[2px] border-[#FF4F00]" : ""
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center text-[#FF4F00]x">
                <p
                  className={`font-[500] text-[18px] lg:text-[22px] ${
                    openIndex == index ? " text-[#FF4F00]" : " text-[#000000]"
                  }`}
                >
                  {" "}
                  {faq.question}
                </p>
                <span className=" ">
                  {openIndex === index ? (
                    <BiSolidChevronDownCircle
                      size={30}
                      className=" text-[#FF4F00]"
                    />
                  ) : (
                    <TbCircleChevronRight
                      size={30}
                      className=" text-[#FF4F00]"
                    />
                  )}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-[8px] text-[16px] lg:text-[18px] text-[#696969]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
