
// let Book = {} ;
// let name = '';
//
// Object.defineProperty(Book, 'name',{
//     configurable:false ,
//     enumerable: true,
//     get:function () {
//         return name ;
//     },
//     set:function (value) {
//        name = "《" + value + "》" ;
//     }
// });
//
// Book.name = "权威指南";
// console.log(Book.name);
let obj = {
    nav:{
        title: '测试1',
        path: '/index'
    }
};

//监听所有数据并进行劫持
function observer(data) {
    if(!data || typeof data !== "object"){
        return ;
    }
    Object.keys(data).forEach(function (key) {
        defineReactive(data, key, data[key])
    })
}
function defineReactive(data, key, val) {
    let dep = new Dep();
    observer(val);
    Object.defineProperty(data, key,{
        configurable: true,
        enumerable: true,
        get: function () {
            if(Dep.target){ //判断是否添加订阅者,全局的
                console.log(Dep.target);
                console.log("添加订阅器");
                dep.addSub(Dep.target);
            }
            return val ;
        },
        set:function ( newVal ) {
            if( val === newVal){
                return ;
            }
            val = newVal ;
            console.log("属性" + key + ":" + newVal) ;
            dep.notify() ;
        }
    })
}
//消息订阅器
function  Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub:function (sub) {
        this.subs.push(sub);
    },
    notify:function () {
        this.subs.forEach(function (item) {
            item.update(); //订阅者的函数
        })
    }
};
Dep.target = null ; //全局






























