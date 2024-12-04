/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkRed: 'hsl(14, 86%, 42%)',
      Green: 'hsl(159, 69%, 38%)',
      Rose50: 'hsl(20, 50%, 98%)',
      Rose100: 'hsl(13, 31%, 94%)',
      Rose300: 'hsl(14, 25%, 72%)',
      Rose400: 'hsl(7, 20%, 60%)',
      Rose500: 'hsl(12, 20%, 44%)',
      Rose900: 'hsl(14, 65%, 9%)'
    },
  
    
    fontFamily :{
      'redhat-bold': ["redhat-bold","sans-serif"],
      'redhat-regular': ["redhat-regular","sans"],
      'redhat-semibold': ["redhat-semibold","sans"]
    }
  },
  plugins: [],
}
