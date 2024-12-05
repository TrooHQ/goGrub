import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "Q1: What is Grubly?",
      answer:
        "Grubly is an online platform that helps restaurants manage orders, menus, and customers from social platforms and their own sites.",
    },
    {
      question: "Q2: How does the free trial work?",
      answer:
        "The free trial gives you access to all Grubly features for a limited time without any charges. You can cancel anytime during the trial period.",
    },
    {
      question: "Q3: Are there any setup fees?",
      answer: "No, there are no setup fees for using Grubly.",
    },
    {
      question: "Q4: What payment methods do you support?",
      answer:
        "Grubly supports cash payments and online payments with various payment gateways. You can choose the one that suits you best.",
    },
    {
      question: "Q5: Can I customize my site on Grubly?",
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
      className="max-w-6xl mx-[10px] lg:mx-auto px-[10px] mt-[50px] lg:mt-[100px]"
      id="faq"
    >
      <div className="max-w-[900px] mx-auto">
        <p className="font-[600] text-[30px] lg:text-[40px] text-center mb-[40px]">
          Frequently Asked Questions
        </p>
        <div className="space-y-[16px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#E0DDDA] py-[24px]  cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <p className="font-[500] text-[18px] lg:text-[24px] flex justify-between items-center text-[#111122]">
                {faq.question}
                <span className="text-[#5955B3] text-[20px]">
                  {openIndex === index ? "-" : "+"}
                </span>
              </p>
              {openIndex === index && (
                <p className="mt-[8px] text-[16px] text-[#414141]">
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
