/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      // inknut: ["Inknut Antiqua", "serif"],
    },
    extend: {
      colors: {
        primary: "hsla(32, 100%, 92%, 1)",
        secondary: "hsla(126, 89%, 21%, 1)",
        other: "hsla(36, 93%, 54%, 1)",
        other1: "hsla(126, 89%, 21%, 1)",
        shadowColor: "#00000040",
      },
      boxShadow: {
        "3xl": "hsla(0, 0%, 0%, 0.25)",
      },
      backgroundImage: {
        "footer-desktop": "url('./images/svg/footer.svg')",
        "footer-mobile": "url('./images/svg/footerMobile.svg')",
      },
    },
  },
  plugins: [],
};
