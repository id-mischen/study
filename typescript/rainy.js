

// var reverse = function(x) {
//     if(!x) return 0 ;
//     if(x < 0){
//         console.log([...x.toString()].unshift().reverse().join("").;
//         return Number([...x.toString()].reverse().join("").substr(1)) * -1
//     }
//     return Number([...x.toString()].reverse().join(""))
// };

// console.log(reverse(-123));
var reverse = function(x) {
    if(!x) return 0 ;
    let arr = [...Math.abs(x).toString()] , //取绝对值转化为数组
        new_num = arr.reverse().join("");  //翻转数值
    return new_num > 2147483647 ? 0 : (x > 0 ? new_num : -new_num)
};


console.log(reverse(123));
