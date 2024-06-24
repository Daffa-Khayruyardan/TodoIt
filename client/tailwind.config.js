/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./layout/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        greenLight: "#59e3b9",
        greenLightDying: "#ebf5f2",
        greenLightHover: "#64e8c0",
        silverLight: "#F9F9F9",
      }
    },
  },
  plugins: [],
}

