import "@/styles/globals.css";
import Head from "next/head";

export const openGraphImage = { images: ["./opengraph-logo.jpeg"] };

export const metadata = {
  title: "GoGrub",
  description:
    "Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!",
  openGraph: {
    ...openGraphImage,
    title: "GoGrub",
    description:
      "Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GoGrub</title>
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

        <link rel="icon" href="/goGrub/GoGrubLOGOicon.svg" />

        <meta
          property="og:title"
          content="GoGrub - Your Online Ordering Solution"
        />
        <meta
          property="og:description"
          content="Your own branded site to easily manage orders, menu, and customers—all in one place."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gogrub.co" />
        <meta
          property="og:image"
          content="https://www.gogrub.co/opengraph-logo.jpeg"
        />

        {/* Twitter Meta Tags */}
        <meta
          name="twitter:title"
          content="GoGrub - Your Online Ordering Solution"
        />
        <meta
          name="twitter:description"
          content="Your own branded site to easily manage orders, menu, and customers—all in one place."
        />
        <meta
          name="twitter:image"
          content="https://www.gogrub.co/opengraph-logo.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
