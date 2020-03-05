
const http = require("http") ;
const fs = require('fs') ;

http.createServer(function (req, res) {
    // res.writeHead(200, { 'Content-Type':'text/plain;charset=utf-8'}) ;
    // res.write("这是一个中文") ;
    // res.end("hello world") ;
    /*console.log(req.url) ;
    console.log(req.method) ;*/

    /*if(req.url !== '/favicon.ico'){
        if(req.url === '/a' ){
            res.end("this is a") ;
        }else{
            res.end('hello world') ;
        }
    }*/

    if(req.url !== '/favicon.ico'){
        if(req.url === '/a'){
            // fs.readFile('./static/a.css',function (err, data) {
            //     console.log(err) ;
            //     console.log(data) ;
            //     res.end(data) ;
            // }) ;
            fs.readFile('./static/a.css',function (err, data) {
                // err 文件找不到 或者文件不对
                // data 文件内容  .body{
                //     background-color: red;
                //  }
                console.log(data.toString());
                res.end(data.toString());
            });
        }
    }

}).listen(3000,function (error) {
   console.log("start") ;
});