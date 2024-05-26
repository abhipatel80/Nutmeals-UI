/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '430px',
      // => @media (min-width: 430px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'x-md': '907px',
      // => @media (min-width: 768px) { ... }

      'l-md': '980px',
      // => @media (min-width: 980px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '1lg': '1230px',
      // => @media (min-width: 1124px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1366px',
      // => @media (min-width: 1366px) { ... }

      'large': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1600px',
      // => @media (min-width: 1600px) { ... }

      '4xl': '1680px',
      // => @media (min-width: 1680px) { ... }

      '4xl-md': '1777px',
      // => @media (min-width: 1777px) { ... }

      '4xl-lg': '1884px',
      // => @media (min-width: 1884px) { ... }

      '5xl': '1920px',
      // => @media (min-width: 1920px) { ... }

      '5xl-lg': '2000px',
      // => @media (min-width: 1920px) { ... }

      '6xl': '2400px',
      // => @media (min-width: 2400px) { ... }
    }
  },
  plugins: [],
};
