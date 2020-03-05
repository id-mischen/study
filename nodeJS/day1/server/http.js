/*const http = require('http');

http.createServer(function (req , res) {
    res.writeHead(200, {'Content-type':'text/plain'}); //发送响应头部
    res.end('hello world');
}).listen(8080);

console.log("8080服务进行启动");*/

/*let fs = require('fs');

fs.readFile(__dirname + '/input.txt',function (err,data) {
    if(!err){
        console.log("readFile");
        console.log(data.toString());
    }
});
fs.writeFile(__dirname + '/input.txt','写入的文件',function (err) {
    console.log("writeFile");
    console.log(err);
})
fs.appendFile(__dirname + '/input.txt','追加的文件2',function (err) {
    console.log(err)
});*/

/*let events = require('events');
let eventEmitter = new events.EventEmitter();

//创建事件处理程序
let connectHandler = function connected() {
    console.log('连接成功');
    eventEmitter.emit('data_received')
};

eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function () {
   console.log('数据接受成功');
});

eventEmitter.emit('connection');
console.log('传送完毕');*/
















