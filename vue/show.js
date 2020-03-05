
/**
 * 数组去重的几种方式
 * */

function ClearRepeat(arr){
    this.arr = arr ;
}
ClearRepeat.prototype = {
    //set
    method_one: function (){
        return [...new Set(this.arr)] 
    },
    //对象
    method_two: function () {
        let obj = {} , new_arr = [];
        for(let i = 0, len = this.arr.length; i < len; i++){
            if(!obj[this.arr[i]]){
                obj[this.arr[i]] = this.arr[i] ;
                new_arr.push(this.arr[i]) ;
            }
        }
        return  new_arr
    },
    //indexOf
    method_three: function () {
        let new_arr = [];
        for(let i = 0; i < this.arr.length; i++){
            if(new_arr.indexOf(this.arr[i]) === -1){
                new_arr.push(this.arr[i]) ;
            }
        }
        return new_arr ;
    }
    //

    
};

// function SortNums(){
//
// }
// SortNums.prototype = {
//     //冒泡
//     method_one: function (arr) {
//             var len = arr.length;
//             for (var i = 0; i < len-1; i++) {
//                 for (var j = 0; j < len - 1 - i; j++) {
//                     // 相邻元素两两对比，元素交换，大的元素交换到后面
//                     if (arr[j] > arr[j + 1]) {
//                         var temp = arr[j];
//                         arr[j] = arr[j+1];
//                         arr[j+1] = temp;
//                     }
//                 }
//             }
//             return arr;
//         }
//     },
// };
function bSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len-1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到后面
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("i:",arr)
    }
    return arr;
}


/*let clear = new ClearRepeat([22,22,23,24,25,23]);
console.log(clear.method_two());
console.log(clear.method_one());
console.log(clear.method_three());*/

let arr = [1,2,3,4,5] ;

let c = arr.map( (item)=>{
    return item * 2 ;
});
console.log(c, arr);



































