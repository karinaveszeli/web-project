/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Figyelje a JSX fájlokat
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"], // Poppins betűtípus hozzáadása
        },
      },
    },
    plugins: [],
  };
  