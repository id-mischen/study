const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');

let obj  = {
    entry: path.resolve(__dirname,"../src/main.js"),
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,  //匹配你的文件后缀名
                use: {
                    loader: 'babel-loader',  //使用什么模块处理你的这个文件
                    options: {
                       presets: ['env','react']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,  //匹配你的文件后缀名
                // use: ['style-loader',"css-loader","sass-loader"],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,  //匹配你的文件后缀名
                use: ["url-loader",'file-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"../index.html"),
            filename: 'index.html'
        })
    ]
}

module.exports = obj;