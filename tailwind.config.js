/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#A855F7', // neon purple — brand accent
                    soft: '#C084FC',
                },
                ink: '#060509', // page background
                surface: '#0E0C14', // raised panels
                line: 'rgba(255, 255, 255, 0.08)',
                muted: '#A1A1AA', // body copy on dark, AA contrast
                faint: '#8B8B95', // meta text (large/bold only)
            },
            fontFamily: {
                display: ['Montserrat', 'system-ui', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
            },
            maxWidth: {
                page: '78rem',
            },
        },
    },
    plugins: [],
};
