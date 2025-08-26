import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import BusinessInfoForm from "@/Components/BusinessInfoForm";
import PersonalInfoForm from "@/Components/PersonalInfoForm";
import Link from "next/link";

const BusinessProfiles = () => {

  // const SERVER_DOMAIN = "https://troox-backend-new.onrender.com/api";
  const SERVER_DOMAIN = "https://gogrub-backend.onrender.com/api";

  // const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isFromGoGrub, setIsFromGoGrub] = useState(true);
  const [customPayload, setCustomPayload] = useState();
  const [loading, setLoading] = useState(false);
  // const transformedState = useSelector(selectTransformedRegisterState);

  const fetch_reg_payload = () => {
    if (typeof window !== "undefined") {
      const storedPayload = JSON.parse(localStorage.getItem("reg_payload") || "{}");
      setCustomPayload(storedPayload);
    }
  }

  useEffect(() => {
    fetch_reg_payload();
  }, []);


  const handleNext = async () => {
    const storedPayload = JSON.parse(localStorage.getItem("reg_payload") || "{}");
    console.log(storedPayload);
    currentStep === 0 && setCurrentStep((prevStep) => prevStep + 1);
    if (currentStep === 1) {
      setLoading(true);
      // fetch_reg_payload();
      const storedPayload = JSON.parse(localStorage.getItem("reg_payload"));

      console.log("storedPayload in handleNext", storedPayload);

      // Send request to sample endpoint
      try {
        const endpoint = `${SERVER_DOMAIN}/onboardGoGrubBusiness/`
        const sampleResponse = await axios.post(endpoint, storedPayload);

        console.log("sampleResponse", sampleResponse)

        if (sampleResponse.status === 200) {
          localStorage.setItem("businessId", sampleResponse.data.business_id);
          localStorage.setItem(
            "registeredUserEmail",
            sampleResponse.data.business_email
          );
          localStorage.removeItem("reg_payload");
          localStorage.setItem("userId", sampleResponse.data.user_id);
          toast.success(
            `Business information saved successfully.`
            // `Business information saved successfully. Token: ${sampleResponse.data.email_verification_token}`
          );
          window.location.href = "https://admin.gogrub.co/verify-account?verify_email=" + sampleResponse.data.business_email;
        } else {
          toast.error("Error submitting business information");
        }
      } catch (error) {
        console.error("Error submitting sample data:", error);
        if (error?.response?.data?.message === "Business with email already exists") {
          toast.error(error?.response?.data?.message);
          navigate("/verify-account");
        }
        toast.error(
          error.response.data.message || "Error submitting business information"
        );
      } finally {
        setLoading(false);
      }
    }
  };
  const handleBack = () => setCurrentStep((prevStep) => prevStep - 1);


  const stepTitles = ["Business Information", "Personal Information"];
  const stepDescriptions = [
    "This information is required in order to verify your business. It will show up on your payout report, invoices and receipts.",
    "Please make sure that your personal details remain up-to-date. Because this information is used to verify your identity. You will need to send our Support Team a message if you need to change it.",
    "Please enter your bank account information. You’ll receive a four-digit verification code via text message. Once you enter the code Troo will direct all payouts to the account.",
  ];

  const [isStepValid, setIsStepValid] = useState(false);

  console.log("isStepValid", isStepValid);
  const renderStepContent = () => {

    switch (currentStep) {
      case 0:
        return <BusinessInfoForm onValidityChange={setIsStepValid} />;
      case 1:
        return <PersonalInfoForm />;
      default:
        return <BusinessInfoForm onValidityChange={setIsStepValid} />;
    }
  };

  const renderStepProgress = () => {
    return (
      <div className="flex justify-center mb-8 gap-[8px]">
        {stepTitles.map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= index
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-gray-600"
                }`}
            >
              {index + 1}
            </div>
            {index < stepTitles.length - 1 && (
              <div
                className={`flex-1 h-1 ${currentStep > index ? "bg-gray-800" : "bg-gray-300"
                  }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#fff] lg:h-screen min-h-screen flex flex-col items-center justify-center px-2">
      {!isFromGoGrub ? (
        <img src="/goGrub/goGrub Logo.svg" alt="Logo" className="mb-8" />
      ) : (
        <img src="/goGrub/goGrub Logo.svg" alt="Logo" className="mb-8" />
      )}
      <div className="bg-white py-10 px-8 w-full md:w-3/5 rounded shadow-md lg:h-[85vh] lg:overflow-y-auto border-[1.5px] border-[#121212]">
        {renderStepProgress()}
        <p className="mb-2 text-2xl font-medium text-gray-800">
          {stepTitles[currentStep]}
        </p>
        <p className="mb-8 text-gray-600">{stepDescriptions[currentStep]}</p>
        {renderStepContent()}
      </div>
      <div className="flex justify-end w-full mt-4 mb-2 md:w-3/5">
        {currentStep > 0 ? (
          <button
            onClick={handleBack}
            className="px-6 py-3 font-semibold border-2 rounded border-text-gray-800 text-text-gray-800"
            disabled={loading}
          >
            Back
          </button>
        ) : (
          <Link href="/">
            <button
              className="px-6 py-3 font-semibold border-2 rounded border-text-gray-800 text-text-gray-800"
              disabled={loading}
            >
              Back
            </button>
          </Link>
        )}
        {/* {currentStep < stepTitles.length - 1 ? ( */}
        <button
          onClick={handleNext}
          className="px-6 py-3 ml-auto font-semibold text-white bg-gray-800 border-2 border-gray-800 rounded"
          disabled={isStepValid === false || loading}
        >
          {loading
            ? "Loading..."
            : currentStep === 0
              ? "Next"
              : "Save and continue"}
        </button>

      </div>
    </div>
  );
};

export default BusinessProfiles;

{/* ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 ml-auto font-semibold text-white bg-gray-800 border-2 border-gray-800 rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : "Save and continue"}
          </button>
        )} */}