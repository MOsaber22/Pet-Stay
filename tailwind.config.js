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
    extend: {
      colors: {
        'nuetral' : '#F7F9F9',
        'primary' : '#5DA7B1',
        'secondary' : '#8DB48E',
        'tertiary' : '#D28B63'
      }
    },
  },
  plugins: [],
});
