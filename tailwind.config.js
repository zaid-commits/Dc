/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./members/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
