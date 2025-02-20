import "@/styles/globals.css";
import Head from "next/head";

export const openGraphImage = { images: ["./opengraph-logo.jpg"] };

export const metadata = {
  title:
    "Online for ordering solution for food vendors, cloud kitchens and independent restaurants.",
  description:
    "Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!",
  openGraph: {
    ...openGraphImage,
    title:
      "Online for ordering solution for food vendors, cloud kitchens and independent restaurants.",
    description:
      "Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/goGrub/GoGrubLOGOicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
