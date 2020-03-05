
// let max = Math.max.apply(null,[1,2,3]) ;
// console.log(max) ;

// let person = {
//   getName: function (arguments) {
//       //this --> 指向body
//         console.log(arguments) ;
//       return this.name ;
//   }
// };
// let body = {
//     name: 'Rainy'
// };
// console.log(person.getName.apply(body,[1,2]));

// Function.prototype._bind = function (context) {
//     //保存函数的引用，这里只 getName
//     let self = this ;
//     return function () {
//         //context 对象 指引给 getName
//         self.apply(context, arguments)
//     }
// };
//
// let person = {
//     name: 'M_Rainy'
// };
//
// let getName = function () {
//     console.log(this.name) ;
// }._bind(person);


// try {
//     console.log(s(1, 2));
//     var s = function sum(a, b) {
//         return a + b;
//     };
//
// } catch (e) {
//    console.log(1);
// }

// let i = 4;
// console.log( i++ ) ;
// console.log(i) ;

// set
// let arr = [1,2,2,3,3,44,5] ;
// let set = new Set(arr) ;
// console.log(set) ;

// let json = {
//     name : 'M_Rainy',
//     age: 18
// } ;
// let arr  = ['hello','world'] ;
// for( let [key,value] of arr){
//     console.log([key,value]) ;
// }
// let num = 100 ;
// console.log(Number.isNaN(NaN)) ;

// let arr = [1,2,3] ;
// console.log(arr.slice(1)) ;

 let foo =  function() {
    this.name = 'Chen' ;
   setTimeout(()=>{
       console.log(this.name) ;
   }, 1000)
 } ;


function rainy(){
    console.log(this) ;
}
let obj = {
    id: 'M_Rainy'
};


function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setTimeout(function () {
        this.s1++ ;        //this指向定时器
    },1000) ;
    setTimeout(()=>{
        this.s2++ ;         //this 指向 Timer
    }, 1000)
}

let timer = new Timer();

// setTimeout(()=> {
//     console.log("s2:" , timer.s2) ;
// }, 3000);
// setTimeout(()=> {
//     console.log("s1:" , timer.s1) ;
// }, 3000);

const cat = {
    live: 9,
    add: function () {
       this.live-- ;
       console.log(this) ;
    }
};
// cat.add();

// let arr_1 = [1,2,3] ,
// //     arr_2 = [4,5,6] ;
// // let rainy_1 = Array.prototype.push.apply(arr_1, arr_2) ;
// //
// // const a1 = [1, 2] ;
// // const a2 = a1 ; //浅拷贝，指向的为地址
// // a2[0] = 3 ;
// // a1[0] = 4 ;
// // console.log(a2) ;
// // console.log(a1) ;
// //
// // let a = 2,
// //     b = a ;
// // console.log(b) ;
// // b = 3;
// // console.log(b) ;

// 实现一个深拷贝
    let a = [1,2,3] ,
        b = deepClone(a);
    function deepClone(data) {
        let obj = Array.isArray(data) ? [] : {} ;
        if(typeof data == "object"){
            for(let key in data){
                if(data[key] && typeof data[key] == "object"){
                    obj[key] = deepClone(data[key]) ;
                } else {
                    obj[key] = data[key] ; //简单复制
                }
            }
       }
       return obj ;
    }

    let person = {
        name: 'Rainy' ,
        age: 18
    };
    for(let item of a.values()){
        console.log(item) ;
    }
































