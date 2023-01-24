/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-mode": "#121212",
      },
      backgroundImage: {
        "starship-bg-light":
          "linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url('/assets/starship-bg.jpg')",
        "starship-bg-dark": "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('/assets/starship-bg.jpg')",
        "shop-bg-light": "linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url('/assets/shop-bg.jpg')",
        "shop-bg-dark": "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('/assets/shop-bg.jpg')",
        dragon: "url('/assets/dragon.jpg')",
        "falcon-heavy": "url('/assets/falcon-heavy.jpg')",
        falcon: "url('/assets/falcon.jpg')",
        starlink: "url('/assets/starship-bg.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

// npx tailwindcss -i ./src/index.css -o ./public/output.css --watch
