
const path = require('path') ;
const HtmlWebpackPlugin = require('html-webpack-plugin');


let config = {
    mode: 'development',
    entry: path.resolve(__dirname,"../src/main.js" ),
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../index.html'),
            filename: 'index.html',
            inject: true
        })
    ]
};

module.exports = config ;