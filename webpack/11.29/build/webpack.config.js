
/*
const path = require('path') ;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development', //development production
    entry: path.resolve(__dirname, '../src/main.js'),
    //多个入口 一个出口， 但不能多个出口
    // entry: {
    //   index: path.resolve(__dirname, '../src/index.js'),
    //   main:  path.resolve(__dirname, '../src/main.js')
    // },
    output: {
        path: path.resolve(__dirname, '../dist'), //绝对路径
        filename: 'rainy.js'
    },
    plugins: [
       /!* new HtmlWebpackPlugin({
            title: 'Rainy新闻头条', //需要定义变量 <%= htmlWebpackPlugin.options.title %>
            template: path.resolve(__dirname, '../index.html'), //自定义模板，注入js
            filename: path.resolve(__dirname, '../dist'), //生成文件路径
        })*!/
    ],
    // devServer:{
    //     contentBase: path.resolve(__dirname, '../dist'),
    //     host: 'localhost',
    //     port: 8080
    // },
};



module.exports = config ;*/

const path = require('path') ;


const  config = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/mai.js'),
    output:{
        path: path.resolve(__dirname, 'rainy'),
        filename: 'cc.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/  , //匹配你的文件后缀名
                loader: 'babel-loader', //使用那些模块解析
                // use:{
                //     loader: '',
                //     options: {
                //         presets: ['env','react']
                //     }
                // },
                exclude: /node_modules/
            }
        ]
    }

} ;
module.exports = config ;















