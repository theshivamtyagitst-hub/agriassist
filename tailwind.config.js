/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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
      colors: {
        border: "var(--color-border)", /* slate-200 */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* deep-green-800 */
        background: "var(--color-background)", /* white */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* deep-green-800 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* green-600 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* slate-100 */
          foreground: "var(--color-muted-foreground)", /* slate-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* harvest-gold */
          foreground: "var(--color-accent-foreground)", /* gray-900 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        surface: "var(--color-surface)", /* green-50 */
        success: {
          DEFAULT: "var(--color-success)", /* green-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-600 */
          foreground: "var(--color-warning-foreground)", /* gray-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        // Brand Colors
        brand: {
          primary: "var(--color-brand-primary)", /* green-500 */
          secondary: "var(--color-brand-secondary)", /* navy-900 */
        },
        conversion: {
          accent: "var(--color-conversion-accent)", /* amber-500 */
        },
        trust: {
          builder: "var(--color-trust-builder)", /* green-700 */
        },
        cta: "var(--color-cta)", /* orange-500 */
        // Text Colors
        text: {
          primary: "var(--color-text-primary)", /* gray-900 */
          secondary: "var(--color-text-secondary)", /* gray-600 */
        },
        // Weather Dynamic
        weather: {
          primary: "var(--weather-primary)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)", /* 0.75rem */
        md: "var(--radius-md)", /* 0.5rem */
        sm: "var(--radius-sm)", /* 0.25rem */
        xl: "var(--radius-xl)", /* 1rem */
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "sans-serif"],
      },
      fontSize: {
        'responsive-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
        'responsive-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
        'responsive-base': 'clamp(1rem, 3vw, 1.125rem)',
        'responsive-lg': 'clamp(1.125rem, 4vw, 1.25rem)',
        'responsive-xl': 'clamp(1.25rem, 5vw, 1.5rem)',
        'responsive-2xl': 'clamp(1.5rem, 6vw, 2rem)',
        'responsive-3xl': 'clamp(2rem, 8vw, 3rem)',
      },
      spacing: {
        'xs': 'var(--spacing-xs)', /* 0.25rem */
        'sm': 'var(--spacing-sm)', /* 0.5rem */
        'md': 'var(--spacing-md)', /* 1rem */
        'lg': 'var(--spacing-lg)', /* 1.5rem */
        'xl': 'var(--spacing-xl)', /* 2rem */
        '2xl': 'var(--spacing-2xl)', /* 3rem */
      },
      boxShadow: {
        'brand-sm': 'var(--shadow-sm)',
        'brand-md': 'var(--shadow-md)',
        'brand-lg': 'var(--shadow-lg)',
        'brand-xl': 'var(--shadow-xl)',
        'agricultural': '0 4px 12px rgba(45, 90, 61, 0.1)',
        'harvest': '0 8px 24px rgba(244, 162, 97, 0.15)',
      },
      animation: {
        'weather-pulse': 'weather-pulse 2s ease-in-out infinite',
        'voice-pulse': 'voice-pulse 1.5s ease-in-out infinite',
        'stagger-reveal': 'stagger-reveal 0.6s ease-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'weather-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8',
          },
        },
        'voice-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.7',
          },
        },
        'stagger-reveal': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'agricultural': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      aspectRatio: {
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
        'landscape': '4 / 3',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}