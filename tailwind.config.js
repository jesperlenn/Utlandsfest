/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'map-blure': "url('/map-bg-blur.jpg')",
      }
    },
  },
  plugins: [],
}

