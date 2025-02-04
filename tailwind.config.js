/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(38, 208, 206, 1)',
        secondary: 'rgba(26,41,128,1)'
      },
      backgroundColor: {
        primary: 'rgba(38, 208, 206, 1)',
        secondary: 'rgba(26,41,128,1)'
      },

    },
  },
  plugins: [],
}