import "@/styles/globals.css";
import Head from "next/head";

export const openGraphImage = { images: ["./opengraph-logo.jpeg"] };

export const metadata = {
  title: "GoGrub.co",
  description:
    "Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!",
  openGraph: {
    ...openGraphImage,
    title: "GoGrub.co",
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
