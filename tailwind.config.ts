import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d1624",
        field: "#f5f8fc",
        line: "#d5deea",
        brand: {
          50: "#f4f8fc",
          100: "#e7eef8",
          700: "#254260",
          800: "#17263b",
          900: "#0d1624"
        },
        accent: {
          50: "#eff7ff",
          100: "#dcecff",
          500: "#1f6feb",
          600: "#185ecb",
          700: "#154fa8"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(13, 22, 36, 0.08)",
        brand: "0 16px 38px rgba(31, 111, 235, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
