const http = require('http');
const url = require('url');
const qs = require('querystring');

let data = {
    name: " mischen ",
    age: 18
};
let content = qs.stringify(data);
let postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req ,res) {
    //暂存请求体信息
    var body = "";
    console.log(req.url);

    req.on('data', function (chunk) {
        body += chunk;
        console.log("chunk:",chunk);
    });

    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        // 解析参数
        body = qs.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);
        // 设置响应头部信息及编码\<br><br>      res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(body.name && body.url) { // 输出提交的数据
            res.writeHead(200,{'Content-type':'text/plain'});

            res.write("name：" + body.name);
            res.write("<br>");
            res.write("URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });

}).listen(3000);
console.log('start');