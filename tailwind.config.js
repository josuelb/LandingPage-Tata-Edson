/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        noite: "#1A0A06",
        brasa: "#2E1810",
        vinho: "#8B1A1A",
        vinhoClaro: "#5C2424",
        ouro: "#C4930A",
        vela: "#E8C56A",
        pergaminho: "#F5EDD8",
        fumaca: "#9C8B7A",
        divisor: "#3D0F0F",
      },

      fontFamily: {
        cinzel: ['"Cinzel Decorative"', "serif"],
        cinzelPlain: ["Cinzel", "serif"],
        fell: ['"IM Fell English"', "serif"],
        crimson: ['"Crimson Text"', "serif"],
      },

      animation: {
        "fade-up": "fadeUp .8s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        smoke: "smoke 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        glowPulse: {
          "0%,100%": {
            textShadow:
              "0 0 10px rgba(196,147,10,.3),0 0 20px rgba(196,147,10,.1)",
          },
          "50%": {
            textShadow:
              "0 0 20px rgba(196,147,10,.7),0 0 40px rgba(196,147,10,.3)",
          },
        },

        smoke: {
          "0%,100%": {
            opacity: ".3",
            transform: "translateY(0) scale(1)",
          },

          "50%": {
            opacity: ".6",
            transform: "translateY(-10px) scale(1.05)",
          },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-12px)",
          },
        },
      },
    },
  },

  plugins: [],
};