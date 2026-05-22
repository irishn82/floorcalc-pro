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
        ink: "#172033",
        field: "#f6f8fb",
        line: "#d8e0ea",
        brand: {
          50: "#f4f7fb",
          100: "#e6edf6",
          700: "#2f4d6b",
          800: "#233a55",
          900: "#172033"
        },
        copper: {
          50: "#fff8eb",
          100: "#fde9bd",
          500: "#c47a20",
          600: "#9a5d16"
        },
        moss: {
          50: "#ecf8f5",
          100: "#ccece5",
          500: "#348f7b",
          700: "#236b5d"
        },
        accent: {
          50: "#edf7ff",
          100: "#d7edff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 51, 0.08)",
        brand: "0 16px 38px rgba(23, 32, 51, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
