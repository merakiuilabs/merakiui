module.exports = {
    purge: ["./src/**/*.vue"],
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
        transitionProperty: ({ after }) => after(["motion-reduce"]),
    },
    plugins: [],
};
