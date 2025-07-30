import React, { useEffect, useState } from "react";
import CustomInput from "./CustomInput";

const PersonalInfoForm = () => {
  const [reg_payload, setRegPayload] = useState({});
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPayload = JSON.parse(localStorage.getItem("reg_payload") || "{}");
      setRegPayload(storedPayload);
      setImage(storedPayload.businessLogo || "");
    }
  }, []);
  // const reg_payload = {}


  const handleInputChange = (field, value) => {
    // Update the field in local storage
    reg_payload[field] = value;
    localStorage.setItem("reg_payload", JSON.stringify(reg_payload));
    setRegPayload({ ...reg_payload });
  };

  return (
    <div className="grid gap-5">
      <CustomInput
        type="text"
        label="First name"
        value={reg_payload?.first_name ?? ""}
        onChange={(newValue) => handleInputChange("first_name", newValue)}
        required="true"
      />
      <CustomInput
        type="text"
        label="Last name"
        value={reg_payload?.last_name ?? ""}
        onChange={(newValue) => handleInputChange("last_name", newValue)}
        required="true"
      />
      <CustomInput
        type="text"
        label="Registered home address"
        value={reg_payload?.personal_address ?? ""}
        onChange={(newValue) => handleInputChange("personal_address", newValue)}
        required="true"
      />
      <CustomInput
        type="text"
        label="City"
        value={reg_payload?.city ?? ""}
        onChange={(newValue) => handleInputChange("city", newValue)}
        required="true"
      />
      <CustomInput
        type="text"
        label="State"
        value={reg_payload?.state ?? ""}
        onChange={(newValue) => handleInputChange("state", newValue)}
        required="true"
      />
      <CustomInput
        type="text"
        label="Country"
        value={reg_payload?.country ?? "Nigeria"}
        onChange={() => { }}
        required="true"
        readOnly={true}
      />
    </div>
  );
};

export default PersonalInfoForm;
