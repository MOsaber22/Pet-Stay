/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT.js";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
