
const fs = require('fs');
let data = '';

let readerStream = fs.createReadStream( __dirname + '/input.txt');

// readerStream.setEncoding('UTF8');
//
// readerStream.on('data',function (chunk) {
//     data += chunk;
// });
//
// readerStream.on('end',function (chunk) {
//     console.log(data);
// });
//
// readerStream.on('error',function (error) {
//    console.log(error);
// });

let writeStream = fs.createWriteStream( __dirname + '/output.txt');
// writeStream.write('我是写入的流数据','UTF8');
// writeStream.end() ;
// writeStream.on('finish',function () {
//     console.log('success');
// });
// writeStream.on('error',function (error) {
//    console.log(error);
// });

readerStream.pipe(writeStream);
console.log('项目结束');

