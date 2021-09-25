const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  // prefix: "fm-",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "100": "#9cdbdd",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
