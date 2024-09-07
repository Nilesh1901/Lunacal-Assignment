/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "widget-custom": "5.67px 5.67px 3.78px 0px #00000066",
        "widget-bar": "inset 0px 4.96px 12.4px 2.48px #00000040",
        "btn-next-prev": "4px 5px 30px 5px #101213",
        "btn-next-prev2": "-5px -3px 30px -10px #96BEE7",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
      },
    },
  },
  plugins: [],
};
