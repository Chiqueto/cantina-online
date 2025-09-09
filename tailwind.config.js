/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
