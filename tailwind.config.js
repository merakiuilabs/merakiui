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
