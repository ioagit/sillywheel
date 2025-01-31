/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-once": "bounce 1s ease-in-out 1",
        "bounce-subtle": "bounceSoft 2s infinite",
        "gradient-shift": "gradientMove 8s ease infinite",
        "spin-fast": "spin 0.5s linear infinite",
        "picker-bounce": "pickerBounce 0.15s ease-in-out infinite",
      },
      keyframes: {
        bounceSoft: {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(0)" },
        },
        gradientMove: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        pickerBounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
        },
      },
      scale: {
        102: "1.02",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
