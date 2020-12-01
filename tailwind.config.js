module.exports = {
    purge: ["./src/**/*.vue"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto"],
            },
            spacing: {
                80: "20rem",
                96: "24rem",
                112: "28rem",
                128: "32rem",
            },
        },
    },
    variants: {
        transitionProperty: ({ after }) => after(["motion-reduce"]),
    },
    plugins: [],
};
