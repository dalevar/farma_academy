// import withMT from "@material-tailwind/react/utils/withMT";

export default ({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: { 
      "white" : "#FFFFFF",
      "farma-50" : "#EFFAFF",
      "farma-100" : "#DFF4FF",
      "farma-200" : "#B8EBFF",
      "farma-300" : "#78DDFF",
      "farma-400" : "#33CCFF",
      "farma-500" : "#06B5F1",
      "farma-600" : "#0092CE",
      "farma-700" : "#0075A7",
      "farma-800" : "#02628A",
      "farma-900" : "#085172",
      "farma-950" : "#06334B"
    },
    fonts: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
});