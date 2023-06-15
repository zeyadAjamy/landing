/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "c1": "#1D1D1D",
      "c2": "#232526"
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/pattern & blury circles.png')"
      },
    },
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}
