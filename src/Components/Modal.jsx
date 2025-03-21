import React from "react";
import { useModal } from "./ModalContext";

const Modal = () => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative">
        <div className=" absolute top-[29px] right-[29px]">
          <img
            src="/goGrub/CloseIcon.svg"
            alt="CloseIcon"
            onClick={closeModal}
            className=" w-[14px] h-[14px] cursor-pointer"
          />
        </div>
        <p className="text-[24px] font-[500] text-[#000000] mt-[40px]">
          Request Demo
        </p>
        <div className=" space-y-[20px] mt-[24px]">
          <input
            type="text"
            placeholder="Enter your Name"
            className="py-[10px] px-[20px] rounded-[5px] border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full"
          />
          <input
            type="text"
            placeholder="Enter Email id"
            className="py-[10px] px-[20px] rounded-[5px] border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="py-[10px] px-[20px] rounded-[5px] border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full"
          />
        </div>

        <div className="text-center mt-[50px] cursor-pointer  w-full border border-[#5955B3] bg-[#0D0D0D] px-[38px] py-[10px] rounded-[5px] text-[#ffffff] text-[16px] font-[500]">
          Request Demo
        </div>
      </div>
    </div>
  );
};

export default Modal;
