/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,tsx,ts}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugin: [require("flowbite/plugin")],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#f3f4f6",
        "on-primary": "#1f2937",
        "black-green": "#111827",
        "light-green": "#155357",
        "border-grey": "#707070",
        "text-green": "#496A6C",
        "text-grey": "#444851",
        "dull-grey": "#C2C2C2",
        "app-black": "#161818",
        "text-black": "#131313",
        "dark-green": "#08282A",
        "text-dull-green": "#374B4D",
        "lime-green": "#EFF7F7",
      },
    },
  },
};
