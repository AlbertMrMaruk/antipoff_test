/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        main: " 0px 4px 20px 0px #00000014",
        box: "0px 0.9960451126098633px 3.984180450439453px 0px #33333326 ",
      },
    },
  },
  plugins: [],
};
