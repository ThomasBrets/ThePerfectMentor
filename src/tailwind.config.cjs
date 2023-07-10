/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        gray: {
          50:"#f9fafb",
          100:"#f3f4f6",
          200:"#e5e7eb",
          300:"#d1d5db",
          400:"#9ca3af",
          500:"#6b7280",
          600:"#4b5563",
          700:"#374151",
          800:"#1f2937",
          900:"#111827",
          950:"#030712",
        },
        Amber: {
          50:"#fffbeb",
          100:"#fef3c7",
          200:"#fde68a",
          300:"#fcd34d",
          400:"#f59e0b",
          500:"#f59e0b",
          600:"#d97706",
          700:"#b45309",
          800:"#92400e",
          900:"#78350f",
          950:"#451a03",
        }
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        'Quicksand', "sans-serif"
      ],
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
