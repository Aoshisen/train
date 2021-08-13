const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist",
        hot: true,
        // hotOnly: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                //加载css文件
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                //加载图片
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }, {
                //处理字体
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }
};