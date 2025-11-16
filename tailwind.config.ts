import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: "#FF6B35",
          light: "#FF8C61",
          dark: "#E55A2B",
          glow: "#FF6B35",
        },
        dark: {
          bg: "#000000",
          card: "#0A0A0A",
          border: "#1A1A1A",
        },
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #FF6B35, 0 0 10px #FF6B35" },
          "100%": { boxShadow: "0 0 20px #FF6B35, 0 0 30px #FF6B35" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

