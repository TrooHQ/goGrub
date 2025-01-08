/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/grubly/FooterImage.svg')",
      },
      colors: {
        primary: "#FF4F00",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        DMSans: ['"DM Sans"', "sans-serif"],
        GeneralSans: ['"General Sans"', "sans-serif"],
        Gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
