
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      "josefin" : ["Josefin Sans", "sans-serif"]
    },
    colors : {
      "Very_Light_Gray": "hsl(0, 0%, 98%)",
      "Very_Light_Grayish_Blue": "hsl(236, 33%, 92%)",
      "Light_Grayish_Blue": "hsl(233, 11%, 84%)",
      "Dark_Grayish_Blue": "hsl(236, 9%, 61%)",
      "Very_Dark_Grayish_Blue": "hsl(235, 19%, 35%)",

      "Very_Dark_Blue": "hsl(235, 21%, 11%)",
      "Very_Dark_Desaturated_Blue": "hsl(235, 24%, 19%)",
      "Light_Grayish_Blue": "hsl(234, 39%, 85%)",
      "Light_Grayish_Blue_h": "hsl(236, 33%, 92%)",
      "Dark_Grayish_Blue": "hsl(234, 11%, 52%)",
      "Very_Dark_Grayish_Blue": "hsl(233, 14%, 35%)",
      "Very_Dark_Grayish_Blue": "hsl(237, 14%, 26%)",
      "white" : "rgb(255,255,255)",
      "purple" : "rgb(173, 112, 243)",
      "blue" : "rgb(125, 154, 246)"

    },
    extend: {
      backgroundImage : {
        "dekstopdark" : "url('/images/bg-desktop-dark.jpg')"
      },
      boxShadow : {
        "shadow" : "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

