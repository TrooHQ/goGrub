import React, { useState } from "react";
import { TbCircleChevronRight } from "react-icons/tb";
import { BiSolidChevronDownCircle } from "react-icons/bi";
const Faq = () => {
  const faqs = [
    {
      question: "How does Grubly work?",
      answer:
        "GoGrub is an online platform that helps restaurants manage orders, menus, and customers from social platforms and their own sites.",
    },
    {
      question: "Do I need to sign a contract to use Grubly?",
      answer:
        "The free trial gives you access to all GoGrub features for a limited time without any charges. You can cancel anytime during the trial period.",
    },
    {
      question: "What payment methods does Grubly accept?",
      answer: "No, there are no setup fees for using GoGrub.",
    },
    {
      question: "Are there any commissions or hidden fees?",
      answer:
        "GoGrub supports cash payments and online payments with various payment gateways. You can choose the one that suits you best.",
    },
    {
      question: "Can Grubly integrate with my existing POS system?",
      answer:
        "Yes, you can fully customize your branded mobile site to reflect your restaurant's unique identity.",
    },
    {
      question: "What kind of support does Grubly offer?",
      answer:
        "Yes, you can fully customize your branded mobile site to reflect your restaurant's unique identity.",
    },
    {
      question: "How can Grubly help me grow my restaurant?",
      answer:
        "Yes, you can fully customize your branded mobile site to reflect your restaurant's unique identity.",
    },
    {
      question: "How do I get started with Grubly?",
      answer:
        "Yes, you can fully customize your branded mobile site to reflect your restaurant's unique identity.",
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
