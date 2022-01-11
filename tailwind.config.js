module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colorCustom: {
          darkest: "#061914",
          dark: "#0c3128",
          DEFAULT: "#186250",
          light: "#2fc49f",
        },
      },
      spacing: {
        xs: "100px",
        s: "200px",
        m: "300px",
        l: "400px",
        xl: "500px",
        xxl: "600px",
        xl2: "700px",
        xxl2: "800px",
      },
      fontFamily: {
        amiri: ["Amiri"],
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
