import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '380px',     // Small phones
      'sm': '640px',     // Large phones and small tablets
      'md': '768px',     // Tablets and small laptops
      'lg': '1024px',    // Desktops and large tablets
      'xl': '1280px',    // Large desktops
      '2xl': '1536px',   // Extra large screens
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgb(var(--primary-color))",
        secondary: "rgb(var(--secondary-color))",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
