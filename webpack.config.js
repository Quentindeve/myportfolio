const path = require("path")

module.exports = {
    entry: "./static/js/carousel.js",
    output: {
        filename: "carousel.min.js",
        path: path.resolve(__dirname, "static/js")
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}