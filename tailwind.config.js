/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07070A',
        surface: '#0D0D14',
        surface2: '#121225',
        text: '#F4F5FF',
        muted: 'rgba(244,245,255,0.72)',
        primary: '#766BFF',
        accent: '#A79FFF',
        success: '#39D98A',
        warning: '#FFB020',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
