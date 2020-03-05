
import IF = require("./a") ;

export class B implements IF.A {
    public draw() {
        console.log("我是b文件的方法")
    }
}
