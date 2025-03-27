/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/support.js"
  ],
  safelist: [
    "max-h-0",
    "max-h-[300px]",
    "pb-0",
    "pb-16",
    "opacity-0",
    "opacity-100",
    "max-h-[100px]",
    "mt-0",
    "mt-14",
  ],
  theme: {
    extend: {
      colors: {
        meet_pink: "#FA1155",
        meet_pink_hover: "#bf1651",
        meet_menu: "#666666",
        meet_text: "#7D8A9F",
        meet_black: "#1C1E22",
        meet_gray: "#E8E8E8",
        meet_light_gray: "#FBF9F9",
        meet_sodomy: "#2E3C52",
        meet_blue: "#4D67EB",
        meet_white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      screens: {
        md: "640px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
