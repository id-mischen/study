
// if(1){
//     var x = 5;
// }
// console.log(x);
//
// if(1){
//     let y = 6;
// }
// console.log( x === undefined);
// var x = 3;
// var foo = function () {
//     console.log("hello")
// };
// foo();

// var b = new Boolean(false);
// if(b){ //是否存在
//     console.log(0);
//     console.log(b);
// }
// if(b == true){ //是否等于  true
//     console.log(1)
// }


// function Show(message){
//     this.message = message;
//     this.name = "mischen";
// }
//
// Show.prototype.toString = function () {
//   return this.name + '...' + this.message
// };
//
// throw new Show("hello world");

// function getMonthName(mo) {
//     mo = mo - 1;
//     var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
//         "Aug","Sep","Oct","Nov","Dec"];
//     if (months[mo]) {
//         return months[mo];
//     } else {
//         throw "InvalidMonthNo"; //throw keyword is used here
//     }
// }

// function f() {
//     try {
//         console.log(0);
//     } catch(e) {
//         console.log(e);
//         console.log(1);
//         return true; // this return statement is suspended
//                      // until finally block has completed
//         console.log(2); // not reachable
//     } finally {
//         console.log(3);
//         return false; // overwrites the previous "return"
//         console.log(4); // not reachable
//     }
//     // "return false" is executed now
//     console.log(5); // not reachable
// }
// f(); // console 0, 1, 3; returns false

// let num = 5 ;
// let p = new Promise((resolve, reject)=>{
//     if( num === 6){
//         resolve("成功");
//     }else{
//         reject("失败");
//     }
// });
//
// p.then((a)=>{
//     console.log(a);
// }).catch((b)=>{
//    console.log(b);
// });

// let arr = [1,2,3];
// arr.num = 5;
// for(let key in arr){
//     console.log(key)
// }
// for(let value of arr){
//     console.log(value)
// }

// let pet = function (name) {
//     let getName = function () {
//         return name ;
//     }
//     return getName;
//
// };
//
// console.log(pet("mischen")());

let userInfo = new Map();
userInfo.set("name","mischen");
userInfo.set("age","18");

console.log( userInfo);

























































