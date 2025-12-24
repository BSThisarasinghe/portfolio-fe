import type { Config } from 'tailwindcss'

export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4b2bee',
                'primary-light': '#6d52f4',
                'primary-dark': '#3a1eb8',
                'background-light': '#f6f6f8',
                'background-dark': '#131022',
                'surface-dark': '#1d1c27',
                'card-dark': '#1d1c27',
                'text-subtle': '#a19db9',
                'text-muted': '#a19db9',
                'border-dark': '#2b2839',
            },
            fontFamily: {
                display: ['Inter', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'grid-pattern': "linear-gradient(to right, #2b2839 1px, transparent 1px), linear-gradient(to bottom, #2b2839 1px, transparent 1px)",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fadeInUp 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config
