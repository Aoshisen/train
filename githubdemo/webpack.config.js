const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
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
            title:"Github热门项目",
            template: "./public/index.html",
            minify:{
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyCSS:true,
                minifyJS:true,
                minifyURLs:true,
            }
        }),
    ],
    output: {
        filename: "[name].[contenthash:8].js",
        path: path.resolve(__dirname, "dist"),
        // publicPath:'/train/'
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
            },{
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
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
                exclude:/node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                enforce:"pre",
                use: [
                    'eslint-loader'
                ]
            }
        ]
    },
    resolve:{
        alias:{
            '@':path.resolve('./src')
        }
    },    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin(),
            new OptimizeCssAssetsPlugin(),
        ]
    }
};