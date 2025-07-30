"use client";
import React, { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import { convertToBase64 } from "@/pages/LandingPage";

const BusinessInfoForm = ({ onValidityChange }) => {
  const [reg_payload, setRegPayload] = useState({ business_type: "GoGrub", country: "Nigeria" });
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");

  // Load localStorage only on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPayload = JSON.parse(localStorage.getItem("reg_payload") || "{}");
      console.log("storedPayload", storedPayload)
      setRegPayload({ ...reg_payload, ...storedPayload });
      setImage(storedPayload.businessLogo || "");
    }
  }, []);

  const handleInputChange = (field, value) => {
    // Update the field in local storage
    reg_payload[field] = value;
    localStorage.setItem("reg_payload", JSON.stringify(reg_payload));
    setRegPayload({ ...reg_payload });
  };

  console.log("reg_payload", reg_payload);

  // const handleInputChange = (field, value) => {
  //   console.log(field, value);
  //   const updatedPayload = {
  //     ...reg_payload,
  //     [field]: value,
  //   };
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("reg_payload", JSON.stringify(updatedPayload));
  //     setRegPayload(updatedPayload);
  //   }
  // };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setImageName(file.name);
    try {
      const base64 = await convertToBase64(file);
      setImage(base64);
      handleInputChange("business_logo", base64);
    } catch (error) {
      console.error("Error converting file to base64:", error);
    }
  };

  // Destructure fields safely from reg_payload
  const {
    business_name,
    business_email,
    business_contract_person,
    business_address,
    business_phone_number,
    business_type,
    business_logo,
    password,
    confirm_password,
  } = reg_payload;

  const isFormValid = () => {
    return (
      business_name?.trim() &&
      business_email?.trim() &&
      business_contract_person?.trim() &&
      business_address?.trim() &&
      business_phone_number?.trim() &&
      business_type?.trim() &&
      password?.trim() &&
      confirm_password?.trim() &&
      password === confirm_password && business_logo
    );
  };


  useEffect(() => {
    // console.log(isFormValid())
    onValidityChange(isFormValid());
  }, [
    business_name,
    business_email,
    business_contract_person,
    business_address,
    business_phone_number,
    business_type,
    password,
    confirm_password,
  ]);

  return (
    <div className="grid gap-5">
      <CustomInput
        type="text"
        label="Business name"
        value={reg_payload?.business_name ?? ""}
        required
        onChange={(val) => handleInputChange("business_name", val)}
      />
      <CustomInput
        type="email"
        label="Business email"
        value={reg_payload?.business_email ?? ""}
        required
        onChange={(val) => handleInputChange("business_email", val)}
      />
      <CustomInput
        type="text"
        label="Business contact (Owner's name)"
        value={reg_payload?.business_contract_person ?? ""}
        required
        onChange={(val) => handleInputChange("business_contract_person", val)}
      />
      <CustomInput
        type="text"
        label="Business address"
        value={reg_payload?.business_address ?? ""}
        required
        onChange={(val) => handleInputChange("business_address", val)}
      />
      <CustomInput
        type="text"
        label="Business phone number"
        value={reg_payload?.business_phone_number ?? ""}
        required
        onChange={(val) => handleInputChange("business_phone_number", val)}
      />
      <CustomInput
        type="text"
        label="Category"
        value={reg_payload?.reg_payload ?? ""}
        required
        readOnly
        onChange={() => { }}
      // onChange={(val) => handleInputChange("businessType", val)}
      />
      <CustomInput
        type="text"
        label="CAC Number"
        value={reg_payload?.cac_number ?? ""}
        maxLength={10}
        onChange={(val) => handleInputChange("cac_number", val)}
      />
      <CustomInput
        type="password"
        label="Create Password"
        value={reg_payload?.password ?? ""}
        onChange={(val) => handleInputChange("password", val)}
      />
      <CustomInput
        type="password"
        label="Confirm Password"
        value={reg_payload?.confirm_password ?? ""}
        onChange={(val) => handleInputChange("confirm_password", val)}
      />

      <p className="text-[16px] text-grey500 font-semibold">
        Add business logo
      </p>
      <div className="flex items-center gap-[16px]">
        <label
          htmlFor="fileInput"
          className="w-[72px] border border-dashed p-[20px] border-[#121212] cursor-pointer"
        >
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
        </label>
        <div>
          <label
            htmlFor="fileInput"
            className="text-[#121212] font-[500] text-[16px] mb-[8px] cursor-pointer"
          >
            Click to upload{" "}
            <span className="font-[400] text-grey300">or drag and drop</span>
          </label>
          <p className="text-[14px] font-[400] text-grey300">
            Max. file size: 2MB
          </p>
        </div>
      </div>

      {image && (
        <div className="mt-4">
          <p className="text-[14px] text-grey500">Image: {imageName}</p>
          <img
            src={image}
            alt="Uploaded Preview"
            className="w-1/4 h-auto mt-2"
          />
        </div>
      )}
    </div>
  );
};

export default BusinessInfoForm;
