import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-iranyekan)", "'IRANYekan'", "'IranYekan'", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        heading: ["var(--font-iranyekan)", "'IRANYekan'", "'IranYekan'", "'Vazirmatn'", "Tahoma", "sans-serif"],
        kalameh: ["var(--font-iranyekan)", "'IRANYekan'", "'IranYekan'", "sans-serif"],
        body: ["var(--font-iranyekan)", "'IRANYekan'", "'IranYekan'", "'Vazirmatn'", "'Segoe UI'", "sans-serif"],
        iranyekan: ["var(--font-iranyekan)", "'IRANYekan'", "'IranYekan'", "'Vazirmatn'", "'Segoe UI'", "sans-serif"],
        vazir: ["var(--font-iranyekan)", "'IRANYekan'", "'Vazirmatn FD'", "'Vazirmatn'", "'Segoe UI'", "sans-serif"],
        display: ["var(--font-iranyekan)", "'IRANYekan'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        accent: {
          cyan: "#06b6d4",
          indigo: "#6366f1",
          purple: "#8b5cf6",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(16, 185, 129, 0.3)",
        "glow-lg": "0 0 45px -10px rgba(16, 185, 129, 0.4)",
        "glow-cyan": "0 0 35px -10px rgba(6, 182, 212, 0.35)",
        "glow-avatar": "0 0 35px -5px rgba(16, 185, 129, 0.4), 0 0 20px -2px rgba(6, 182, 212, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
