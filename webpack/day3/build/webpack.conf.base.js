const  path = require('path');


module.default = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    }
    // module: {
    //     rules: [
    //         {
    //             test: /\.(js|jsx)$/,
    //             loader: 'babel-loader',
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['env', 'react']
    //                 }
    //             },
    //             exclude: /node_modules/
    //         }, {
    //             test: /\.(css|scss)$/,
    //             loader: 'css-loader',
    //             use: ['style-loader', 'css-loader', 'sass-loader']
    //         }
    //     ]
    // },
    // plugin: [
    //     new HtmlWebpackPlugin({
    //         filename: 'index.html',
    //         template: '../index.html'
    //     })
    // ]

};