import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'dark-gray': 'hsl(0, 0%, 63%)',
        'Very Dark Gray': 'hsl(0, 0%, 27%)'

        

      },

      fontFamily:{
        'display': ['League Spartan'],
      }
      
    },
  },
  plugins: [],
}
export default config
