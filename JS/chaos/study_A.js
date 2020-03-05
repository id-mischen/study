    /*
    *  let 和var
    *  1, let 只在它存在的代码块有效
    *  2，let 不存在变量提升
    *  3, let 不允许重复声明
    * */
    // for(let i = 0 ; i < 5; i++){
    //
    // }
    // var a = [] ;
    // for(var i = 0; i < 10; i++){
    //     a[i] = function () {
    //         console.log(i)
    //     }
    // }
    // a[6]() ; //10  var 定义的类似于全局变量，i只有一个值  10
    // let b = [] ;
    // for(let i = 0; i < 10; i++){
    //     b[i] = function () {
    //         console.log(i)
    //     }
    // }
    // b[9]() ; //10  let 定义的 块级作用域，

    // (function f() {
    //     console.log("hello world")
    // }()) ;
    // {
    //     console.log("hello")
    // }

    // function f() { console.log('I am outside!'); }
    //
    // (function () {
    //     if (false) {
    //         // 重复声明一次函数f
    //         function f() { console.log('I am inside!'); }
    //     }
    //
    //     f();
    // }());
    // const a = [] ;
    // a.push('hello') ;
    // console.log(a) ;




























