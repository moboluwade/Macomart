import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'FBBC04', 
        secondary: '#9333EA', 
        accent: 'F7F7F7', 
        background: 'FFFFFF', 
        // text: '#111827', 
        red: 'FF0000',
        gray: '8C8C8C',
        gray2: '525252',
        offwhite: 'D9D9D9',
       
      },
    },
  },
  plugins: [],
};
export default config;
