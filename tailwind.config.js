/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 기본 색상
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#5E8EEB",
        background: "#F9F9FB",
        foreground: "#3A3A3C",
        
        // 주요 색상
        primary: {
          DEFAULT: "#5E8EEB",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F0F2F5",
          foreground: "#3A3A3C",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F0F2F5",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#FF7F7F",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#3A3A3C",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#3A3A3C",
        },
        
        // 커스텀 색상
        softBlue: "#5E8EEB",
        lightCoral: "#FF7F7F",
        softTurquoise: "#64D2FF",
        mintGreen: "#5ECCA9",
        offWhite: "#F9F9FB",
        lightGray: "#F0F2F5",
        mediumGray: "#E5E7EB",
        darkGray: "#6B7280",
        textPrimary: "#3A3A3C",
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      gradientColorStops: {
        'blue-start': '#5E8EEB',
        'blue-end': '#64D2FF',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

