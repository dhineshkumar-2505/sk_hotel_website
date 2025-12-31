/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Vibrant new colors
                saffron: {
                    DEFAULT: '#FF6B35',
                    light: '#FF8C61',
                    dark: '#E85A2A',
                },
                turmeric: {
                    DEFAULT: '#F7931E',
                    light: '#FFB347',
                    dark: '#E67E00',
                },
                'curry-red': {
                    DEFAULT: '#C1121F',
                    light: '#D92636',
                    dark: '#9A0E19',
                },
                // Updated legacy colors
                ivory: {
                    DEFAULT: '#FFF8F0',
                    light: '#FFFEF9',
                },
                gold: {
                    DEFAULT: '#FFD700',
                    light: '#FFE44D',
                    dark: '#FFC700',
                },
                brown: {
                    DEFAULT: '#3E2723',
                    light: '#5D4037',
                    dark: '#2C1810',
                },
                maroon: {
                    DEFAULT: '#C1121F',
                    light: '#D92636',
                    dark: '#9A0E19',
                },
                sage: {
                    DEFAULT: '#10B981',
                    light: '#34D399',
                    dark: '#059669',
                },
                cream: {
                    DEFAULT: '#FFF8F0',
                    dark: '#FFF0DC',
                },
                charcoal: {
                    DEFAULT: '#1A1A1D',
                    light: '#2D2D30',
                },
            },
            fontFamily: {
                tamil: ['Noto Sans Tamil', 'sans-serif'],
                heading: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 2s infinite',
                'spin-slow': 'spin 8s linear infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            boxShadow: {
                'golden': '0 4px 20px rgba(212, 175, 55, 0.3)',
                'golden-lg': '0 10px 40px rgba(212, 175, 55, 0.4)',
                'saffron': '0 4px 20px rgba(255, 107, 53, 0.3)',
                'saffron-lg': '0 10px 40px rgba(255, 107, 53, 0.5)',
                'turmeric': '0 4px 20px rgba(247, 147, 30, 0.3)',
                'turmeric-lg': '0 10px 40px rgba(247, 147, 30, 0.5)',
                'glow': '0 0 20px rgba(255, 107, 53, 0.4), 0 0 40px rgba(255, 107, 53, 0.2)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
