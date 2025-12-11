/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors for Car Rental SPA using HSLA
      colors: {
        // Blue primary
        "brand-primary": "hsla(215, 100%, 50%, 1)",       // main blue
        "brand-primary-dark": "hsla(215, 100%, 35%, 1)",  // darker blue for hover
        "brand-primary-soft": "hsla(215, 100%, 95%, 1)",  // soft background

        // Red accent
        "brand-accent": "hsla(0, 100%, 49%, 1.00)",        // main red
        "brand-accent-dark": "hsla(0, 100%, 35%, 1)",   // darker red for hover
        "brand-accent-soft": "hsla(0, 100%, 95%, 1.00)",   // soft background

        // Text colors
        "brand-text": "hsla(0, 0%, 10%, 1)",              // dark text
        "brand-text-muted": "hsla(0, 0%, 45%, 1)",        // muted text
        "brand-text-on-primary": "hsla(0, 0%, 100%, 1)",  // text on primary bg

        // Backgrounds
        "brand-bg": "hsla(0, 0%, 98%, 1)",                // main page background
        "brand-bg-soft": "hsla(0, 15%, 94%, 1.00)",           // soft sections

        // Borders
        "brand-border": "hsla(0, 0%, 90%, 1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
    },
  },
  plugins: [],
};
