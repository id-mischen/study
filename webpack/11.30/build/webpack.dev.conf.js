
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf') ;

//热启动
baseWebpackConfig.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: '8300'
};
module.exports = baseWebpackConfig ;