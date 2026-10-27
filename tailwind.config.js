/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        "alfa-slab": ["Alfa Slab One", "serif"],
        "bevan": ["Bevan", "serif"],
        "niconne": ["Niconne", "cursive"],
        "roboto": ["Roboto", "sans-serif"],
      },

      colors: {
        brand: {
          dark: "#0f172a",
          darker: "#0a0f1f",
          accent: "#fbbf24",
          "accent-dark": "#f59e0b",
        },
      },

      keyframes: {
        "rgb-border": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },

        slideleft: {
          "0%": {
            transform: "translateX(200px) scale(0.95)",
            opacity: "0",
          },
          "55%": {
            transform: "translateX(-5px) scale(1)",
            opacity: "0.7",
          },
          "60%": {
            transform: "translateX(-10px) scale(1.02)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translateX(0) scale(1)",
            opacity: "1",
          },
        },

        slideUp: {
          from: {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },

        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },

        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(251, 191, 36, 0.5)",
          },
        },

        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },

        // extra fadeIn variation (kept as-is)
        fadeInAlt: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.95) ",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },

      animation: {
        "rgb-border": "rgb-border 10s linear infinite",
        slideleft: "slideleft 2.5s ease-out forwards",
        slideUp: "slideUp 1s ease-out",
        fadeIn:  'fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        glow: "glow 3s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",

        // additional animation (kept)
        fadeInAlt: "fadeInAlt 0.7s ease-out forwards",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },

  plugins: [],
};
