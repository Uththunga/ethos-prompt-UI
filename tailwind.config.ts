import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "-apple-system", "Roboto", "Helvetica", "sans-serif"],
        poppins: ["Poppins", "-apple-system", "Roboto", "Helvetica", "sans-serif"],
      },
      spacing: {
        // Standardized spacing system based on 8px/0.5rem base unit
        // Standard container padding pattern: px-4 sm:px-6 lg:px-8
        // Standard section padding pattern: py-12 md:py-16 lg:py-20 xl:py-24
        // Standard grid gaps: gap-6 md:gap-8 lg:gap-10 xl:gap-12
      },
      fontSize: {
        // Standardized typography scale based on 1.25 (Major Third) ratio
        // Base size: 16px (1rem)
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],            // 16px
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],    // 18px
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.015em' }],    // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],  // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],    // 36px
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],      // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],    // 60px
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.045em' }],   // 72px
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em' }],         // 96px
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],         // 128px
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
        'relaxed': '1.4',
        'loose': '1.6',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        ethos: {
          purple: "#7409C5",
          "purple-light": "#8235F4",
          "purple-gradient-start": "#7471E0",
          "purple-gradient-end": "#EA73D4",
          navy: "#030823",
          "navy-light": "#0D1144",
          gray: "#484848",
          "gray-light": "#717493",
          "gray-lighter": "#9E9898",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
