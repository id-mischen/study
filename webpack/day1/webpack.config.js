


module.exports = {
    devtool: "eval-source-map",
    entry: __dirname + '/app/main.js', //唯一入口文件
    output: {
        path: __dirname + '/public', //打包存放的地方
        filename: 'bundle.js' //文件名
    },
    devServer: {
        contentBase: "./public",//根目录
        port:8080,
        inline:true
    },
    module:{
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
};