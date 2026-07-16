/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0B5CAD",
          blueDark: "#08427D",
          lightBlue: "#DCEEFF",
          navTop: "#5AA7E0",
          navBottom: "#0B5CAD",
        },
        border: "#D9D9D9",
        footerGray: "#666666",
      },
      fontFamily: {
        sans: ["Tahoma", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "13px",
        base: "14px",
        md: "15px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
      },
    },
  },
  plugins: [],
};
