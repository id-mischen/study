// var a = 10;
// function foo() {
//     console.log(a); // ??
//     // var a = 20;
// }
// foo();

// var a = 10;
// function foo() {
//     console.log(a); // ??
//     let a = 20;
// }
// foo();
var array = [];
for(var i = 0; i <3; i++) {
    array.push(() => {
        console.log(i)
        return i
    }); //添加了三个函数
}
console.log("i:",i) ;
console.log(array) ;
var newArray = array.map(el => el());
console.log(newArray); // ??
