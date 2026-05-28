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
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "sans-serif"]
      },
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
          200: "#bdd9ff",
          300: "#8cb8f8",
          400: "#5b9af0",
          500: "#1f6feb",
          600: "#185ecb",
          700: "#154fa8"
        }
      },
      boxShadow: {
        soft: "0 20px 50px rgba(13, 22, 36, 0.09), 0 4px 12px rgba(13, 22, 36, 0.05)",
        brand: "0 16px 38px rgba(31, 111, 235, 0.22)",
        card: "0 1px 3px rgba(13, 22, 36, 0.06), 0 4px 12px rgba(13, 22, 36, 0.04)"
      }
    }
  },
  plugins: []
};

export default config;
