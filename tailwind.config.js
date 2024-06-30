/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./members/index.html",
    "./registration/index.html",
    "./projects/index.html",
    "./project-registration/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
