const webpack = require('webpack'),
    path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    BUILD_DIR = path.resolve(__dirname, ''),
    CLIENT_DIR = path.resolve(__dirname, 'src'),
    APP_DIR = `${CLIENT_DIR}/`;

const config = {
    entry: {
        app: APP_DIR + 'index.tsx',
        vendor: [
            'react-dom',
            'react'
        ]
    },
    output: {
        path: BUILD_DIR,
        // filename: "[name].[hash].bundle.js",
        filename: "[name].bundle.js",
        // chunkFilename: "[id].[hash].bundle.js"
        chunkFilename: "[id].bundle.js"
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            },
            {
                test: /.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /.png$/,
                loader: 'file'
            },
            {
                test: /.svg$/,
                loader: 'file'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'home',
            template: APP_DIR + '/index.template.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', 
            // filename: '[name].[hash].js'
            filename: '[name].js'
        })
    ]
};

module.exports = config;
