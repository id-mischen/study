
//调用方法
import A = require("./a");
import B = require("./b");
import C = require("./c");


function show(data:A.A) {
        data.draw() ;
}
show(new B.B) ;  //类必须new
show(new C.C) ;