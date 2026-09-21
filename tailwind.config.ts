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
        xs: "420px",
      },
      colors: {
        ink: "#0E2A5C",
        ink2: "#0B2347",
        ink3: "#123566",
        ink4: "#102F63",
        paper: "#F4F7FC",
        paper2: "#E8EFFA",
        surface: "#FFFFFF",
        text: "#FFFFFF",
        textDim: "#AEC0E0",
        inkText: "#0E2A5C",
        inkTextDim: "#5B6472",
        accent: "#F5921E",
        accentDim: "#DD7E0F",
        accent2: "#1C6FD8",
        accent2Dim: "#125BB8",
        line: "rgba(255,255,255,0.16)",
        lineDark: "rgba(14,42,92,0.14)",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "12px",
        lg: "16px",
      },
      fontWeight: {
        "700": "700",
        "800": "800",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
