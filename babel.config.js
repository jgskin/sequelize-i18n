const presets = [
    [
        "@babel/env",
        {
            targets: {
                node: "11"
            },
            useBuiltIns: false,
        },
    ],
];

module.exports = { presets };