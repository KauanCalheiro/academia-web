import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        lime: {
            50: '#f8ffe0',
            100: '#f0ffb3',
            200: '#e6ff80',
            300: '#dcff4d',
            400: '#d2ff26',
            500: '#ccff0c',
            600: '#b8e600',
            700: '#99b800',
            800: '#7a9300',
            900: '#617700',
            950: '#384400'
        }
      }
    }
  }
}
