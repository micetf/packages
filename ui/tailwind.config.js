/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
        },
      },
    },
    plugins: [],
    // Assurez-vous que les classes Tailwind sont incluses même si elles ne sont pas 
    // directement utilisées dans les composants (utile pour les classes dynamiques)
    safelist: [
      {
        pattern: /^(bg|text|border|h|w)-(primary|gray|red|green|blue|yellow)-\d+$/,
      },
    ],
  }