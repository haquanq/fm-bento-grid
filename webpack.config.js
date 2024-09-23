const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackRemoveEmptyScript = require("webpack-remove-empty-scripts");

/** @type { import('webpack').Configuration } */
module.exports = {
    mode: "development",
    entry: "./app/main.css",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
                exclude: path.resolve(__dirname, "node_modules"),
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
    },
    plugins: [
        new WebpackRemoveEmptyScript(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "app/index.html",
        }),
    ],
};
