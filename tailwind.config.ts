import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        "2xl": "1366px",
      },
      colors: {
        primary: "#473A38",
        secondary: "#DEDEDE",
        surfaceSecondary: "#F7F4ED",
        surfaceBrown: "#473A38",
        bwOverlay: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
