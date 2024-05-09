// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {primary: '#0CAF60', secondary: '#797B89', body: '#FAFAFA'}
        },
    },
    plugins: [
        typography,
        forms,
        aspectRatio,
    ],
}
