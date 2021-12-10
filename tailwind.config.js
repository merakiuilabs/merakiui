const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    mode: "jit",
    darkMode: "class",
    theme: {
        extend: {
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translatey(0px)",
                    },
                    "50%": {
                        transform: "translatey(-20px)",
                    },
                },
            },
            animation: {
                float: "float 4s ease-in-out infinite",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            spacing: {
                104: "26rem",
                128: "32rem",
                164: "41rem",
            },
        },
    },
    plugins: [],
};
