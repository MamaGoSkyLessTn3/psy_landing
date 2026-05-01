/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./main.js",
        "./style.css",
    ],
    theme: {
        extend: {
            colors: {
                accent: 'var(--accent)',
            }
        },
    },
    plugins: [],
}