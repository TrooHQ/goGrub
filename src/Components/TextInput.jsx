import React from "react";

const TextInput = ({
  placeholder,
  value,
  onChange,
  validationType = "text",
}) => {
  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    switch (validationType) {
      case "name":
        inputValue = inputValue.replace(/[^a-zA-Z\s]/g, "");
        break;
      case "phone":
        inputValue = inputValue.replace(/[^0-9]/g, "");
        break;
      case "email":
        break;
      default:
        break;
    }

    onChange(inputValue);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      className="py-[16px] px-[24px] rounded-[8px] bg-transparent border border-[#929292] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#929292] w-full"
    />
  );
};

export default TextInput;
