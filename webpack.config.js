// ===============================================
// Config file for Webpack
// ===============================================


const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',

    output: {
        filename: 'index.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve('babel-loader'),
                    query: {
                        presets: [['@babel/preset-env', { modules: false }]],
                    },
                },
            },
        ],
    },
};
