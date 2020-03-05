const DefaultConfig = require('./webpack.conf.base');
const path = require('path');

DefaultConfig.devServer = {
    post: 8080,
    host: 'localhost',
    contentBase: path.resolve(__dirname, '../dist')
};
module.exports = DefaultConfig ;