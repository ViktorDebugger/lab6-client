/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('./src/assets/img/background.png')",
      },
    },
  },
  plugins: [],
};
