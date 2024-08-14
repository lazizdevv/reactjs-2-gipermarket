/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"20px",
        screens:{
          lg:"1480px"
        }
      },
      colors:{
        primary:"#5B5CE2",
        secondary:"#333333",
        accent:"#F6F6F6"
      }
    },
  },
  plugins: [],
};
