import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '82.5rem',
      },
      divideWidth: {
        1: '1px'
      },
      colors: {
        background: "var(--background)",
        green: {
          g1: "#1DA84F"
        },
        gray: {
          g1: "#5E5E5E",
          g2: '#A2A1A1',
          g3: '#414742',
          g4: '#D6D6D6',
          g5: '#869791',
          w1: "#EFF0EF",
          w2: "#F8F6F4",
          b1: "#202020"
        },
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
