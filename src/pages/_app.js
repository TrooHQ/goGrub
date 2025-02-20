import "@/styles/globals.css";
import Head from "next/head";

// export const openGraphImage = { images: ["./opengraph-logo.jpeg"] };
export const openGraphImage = {
  images: ["https://www.gogrubapp.netlify.app/opengraph-logo.jpeg"],
};

//
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

export const metadata = {
  title: "GoGrub",
  description:
    "Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!",
  openGraph: {
    title: "GoGrub",
    description:
      "Discover how our business solutions can help you save costs, improve efficiency, and streamline operations. Get started today!",
    images: [{ url: "https://www.gogrubapp.netlify.app/opengraph-logo.jpeg" }],
    url: "https://www.gogrub.co",
    type: "website",
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
