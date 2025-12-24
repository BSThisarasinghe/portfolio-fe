import type { Config } from 'tailwindcss'

export default {
    darkMode: 'class',  // ← Change from ["class"] to 'class'
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4b2bee',
                'primary-dark': '#3a1bc9',
                'background-card': '#1a1a2e',
                'border-dark': '#2d2d3a',
            },
        },
    },
    plugins: [],
} satisfies Config
