'use strict';
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.css/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(js|vue)$/,
                use: 'eslint-loader',
                enforce: 'pre',
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '..', 'src/assets/images'),
            to: path.join(__dirname, '..', 'dist/assets/images'),
            toType: 'dir'
        }]),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}