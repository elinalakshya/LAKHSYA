module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stealth: "#0a0a0a",
        neon: "#4f8cff",
        purpleglow: "#944bff"
      },
      boxShadow: {
        neon: "0px 0px 20px rgba(79,140,255,0.4)",
        purple: "0px 0px 20px rgba(148,75,255,0.4)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};
