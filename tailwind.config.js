/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Добавляем пользовательский цвет фона
      customBg: "hsl(235, 21%, 11%)",
      customCl: "hsl(234, 39%, 85%)",
      customSecBg: "hsl(235, 24%, 19%)",
      customBorder: "#d1d1d143",
    },
    extend: {},
  },
  plugins: [],
};
