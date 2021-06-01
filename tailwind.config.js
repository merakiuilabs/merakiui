const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    mode: 'jit',
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                teal: colors.teal,
            },
            fontFamily: {
                roboto: ["Roboto"],
            },
            spacing: {
                128: "32rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
