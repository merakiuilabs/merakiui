module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './nuxt.config.{js,ts}',
    ],
    darkMode: "class",
    theme: {
        extend: {
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
