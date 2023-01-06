/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        veryPaleBlue: "hsl(230, 100%, 99%)",
        lightGrayishBlueSlider: "hsl(224, 65%, 95%)",
        lightGrayishBlueToggle: "hsl(223, 50%, 87%)",
        toggleEmpty: "hsl(224, 65%, 95%)",
        grayishBlueTxt: "hsl(225, 20%, 60%)",
        darkDesaturatedBlue: "hsl(227, 35%, 25%)",
        lightGrayishRed: "hsl(14, 92%, 95%)",
        lightRed: "hsl(15, 100%, 70%)",
        ctaTxt: "hsl(226, 100%, 87%)",
        softCyan: "hsl(174, 77%, 80%)",
        strongCyan: "hsl(174, 86%, 45%)",
      },
    },
  },
  plugins: [],
};
