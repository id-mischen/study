
// var isPalindrome = function(x) {
//     if(x <= 0) return  false ;
//     console.log(x.split("")) ;
//     return [...x].reverse().join("") == x ? true : false ; 
// };

// console.log(isPalindrome("124"))

let str = "abcddd adefg" ;
var lengthOfLongestSubstring = function(s) {
    let arr = [] , max = 0;
    for(let i = 0, len = s.length; i < len; i++){
        for(let j = i + 1; j < len; j++){
            if(s[i] == s[j]){
                arr.push(s.slice(i, j).length) ;
            }
        }
    }
    if(!arr.length) return s ;
    console.log(arr) ;
    /*寻出最大的长度 - 冒泡*/
    for(let i = 0, len = arr.length; i < len; i++){
        if(arr[i] > max){
            max = arr[i] ;
        }  
    }
    return max ;
};

console.log(lengthOfLongestSubstring(str)) ;