// let obj = new Proxy({},{
//     get(target, p, receiver) {
//         return 38 ;
//     },
//     set(target, p, value, receiver) {
//         console.log(`setting: ${p}`) ;
//         return Reflect.set(target, p, receiver) ;
//     }
// });

// obj.num = 1;
// ++obj.num ;
// console.log(obj.num) ;

// var target = {};
// var handler = {};
// var proxy = new Proxy(target, handler);
// proxy.a = 'b';
// console.log(target.a); // "b"

// let proxy = new Proxy({},{
//     get(target, p, receiver) {
//         return 35
//     },
//     set(target, p, value, receiver) {
//     }
// });
// let obj = Object.create(proxy) ;
// console.log(obj.time);

var handler = {
    get: function (target, name) {
        console.log("get", name);
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },

    apply: function (target, thisBinding, args) { //目标函数  undefined  参数
        console.log("apply");
        console.log(target, thisBinding, args);
        return Reflect.apply(target, thisBinding, args);
        // return target;
    },

    construct: function (target, args) {
        console.log("construct");
        return { value: args[1] };
    }
};

var fproxy = new Proxy(function (x, y) {
    return x + y;
}, handler);

// console.log(fproxy(1, 2)); //运行
//  // 1
// new fproxy(1, 2) // {value: 2}
// console.log(fproxy.rainy === Object.prototype); // true

// fproxy.foo === "Hello, foo" // true

// let person = {
//     name: 'rainy'
// };
// let proxy = new Proxy(person ,{
//     get(target, key) {
//         console.log('get') ;
//         if(key in target){
//             return target[key] ;
//         } else {
//
//             throw new ReferenceError(`${key} does not exist `)
//         }
//     }
// });
// console.log(proxy.name) ;
// console.log(proxy.age) ;

let arr_1 = [1, 2, 3],
    arr_2 = [4, 5, 6];
// arr_1.push(...arr_2) ;
// console.log(arr_1) ;
// console.log([...arr_1, ...arr_2]) ;

//实现 数组负数下标也可以读取
// function createArray( ...elements){
//     let arr = [] ;
//     return new Proxy(arr.push(...elements),{
//         get(target, key) {
//             if(key < 0){
//                 return target[target.length + Number(key)] ;
//             }
//             return target[key]
//         }
//     })
// }
//
// console.log(function () {} !== 0) ;
// if(function () {
//
// }){
//     console.log("hello world") ;
// }

// let promise = new Promise((resolve, reject)=>{
//     console.log("promise") ;
//     resolve() ;
// });
//
// promise.then(()=>{
//    console.log("end!!!")
// });
// console.log("Hi") ;
// console.log("rainy") ;


// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
// });
//
// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// });
//
// console.log(p2) ;
// p2.then(result => console.log("hello",result))
//     .catch(error => console.log("error:",error)) ;

// const someAsyncThing = function() {
//     return new Promise(function(resolve, reject) {
//         // 下面一行会报错，因为x没有声明
//         resolve(x + 2);
//     });
// };
//
// someAsyncThing().then(function() {
//     console.log('everything is great');
// });
//
// setTimeout(() => { console.log(123) }, 2000);
Promise.prototype._finally = function (cb) {
    this.then(() => {
        console.log("成功");
        cb();
    }).catch(() => {
        console.log("失败");
        cb();
    })
};
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    console.log(this);
    console.log(P);
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};

function _promise(num) {
    return new Promise((resolve, reject) => {
        if (num > 5) {
            return resolve("hello world")
        }
        reject("出错了")

    });
}
// _promise(2).then( (res)=>{
//     console.log(res)
// }).catch((error)=>{
//     return new Promise((resolve, reject) => {
//         console.log(error);
//         reject(error) ;
//     })
//
// })._finally(()=>{
//     console.log("最后的最后")
// });

_promise(7).finally(() => {
    console.log("最后的最后1")
});























