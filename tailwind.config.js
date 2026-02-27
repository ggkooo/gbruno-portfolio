/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#A855F7", // Neon Purple
                "background-dark": "#050505",
                "card-dark": "rgba(255, 255, 255, 0.03)",
            },
            fontFamily: {
                display: ["Montserrat", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "12px",
            },
        },
    },
    plugins: [],
}
