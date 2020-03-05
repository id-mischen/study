const DefaultConfig = require('./webpack.conf.base');

DefaultConfig.devServer = {
    port: 8080,
    host: 'localhost'
}
module.exports = DefaultConfig;