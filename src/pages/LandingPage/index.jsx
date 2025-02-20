// import Benefits from "@/Components/Benefits";
import BoostBusiness from "@/Components/BoostBusiness";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import GetStarted from "@/Components/GetStarted";
import HeroSection from "@/Components/HeroSection";
import HowItWorks from "@/Components/HowItWorks";
import Navbar from "@/Components/Navbar";
import OrderingSolution from "@/Components/OrderingSolution";
import Savings from "@/Components/Savings";
// import Head from "next/head";
import React from "react";

export const openGraphImage = { images: ["./opengraph-logo.jpeg"] };

// export const metadata = {
//   title: "GoGrub",
//   description:
//     "Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!",
//   openGraph: {
//     ...openGraphImage,
//     title: "GoGrub",
//     description:
//       "Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!",
//   },
// };

const LandingPage = () => {
  return (
    <div className="bg-[#FFF5F1] font-DMSans">
      {/* <Head>
        <title>
          Online for ordering solution for food vendors, cloud kitchens and
          independent restaurants.
        </title>
        <meta
          name="description"
          content="Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!"
        />
        <meta
          name="keywords"
          content="online order management, social media integration, branded ordering site, restaurant order software"
        />
        <meta name="author" content="GoGrub" />
        <link rel="canonical" href="https://www.gogrub.co" />

        <meta
          property="og:title"
          content="Your own branded site to easily manage orders, menu and customers—all in one place"
        />
        <meta
          property="og:description"
          content="Your own branded site to easily manage orders, menu and customers—all in one place"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gogrub.co" />
        <meta
          property="og:image"
          content="https://www.gogrub.co/opengraph-logo.jpeg"
        />

        <meta
          name="twitter:title"
          content="Your own branded site to easily manage orders, menu and customers—all in one place"
        />
        <meta
          name="twitter:description"
          content="Your own branded site to easily manage orders, menu and customers—all in one place"
        />
        <meta
          name="twitter:image"
          content="https://www.gogrub.co/twitter-image.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GroGrub",
              url: "https://www.gogrub.co",
              logo: "https://www.gogrub.co/opengraph-logo.jpeg",
              description:
                "Your own branded site to easily manage orders, menu and customers—all in one place",
            }),
          }}
        />
      </Head> */}
      <Navbar />
      <HeroSection />
      <BoostBusiness />
      <Savings />
      <HowItWorks />
      <OrderingSolution />
      <GetStarted />
      {/* <Benefits /> */}
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
