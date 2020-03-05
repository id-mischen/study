

/**
 * 获取无重复最长子串
 * */
let lengthOfLongestSubstring = function(s) {
    let i=0, res=0, n=0;
    for (let j = 0; j < s.length; j++){
        n = s.slice(i,j).indexOf(s[j]) ;
        if (n === -1){
            res = Math.max(res,j+1-i);
            console.log("res: " , res) ;
        }else{
            i += n+1;
        }
    }
    return res;
};

/**  罗马文字 转换 - 数组
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    let new_str = s,
        num = 0,
        rule = {I: 1,V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000},
        rule_special = {IV: 4,IX: 9, XL: 40, XC: 90, CD: 400, CM: 900} ;

    //特殊值计算
    for(let i = 0, len = s.length; i < len; i++){
        for(let key in rule_special){
            if(s.substring(i, i+2) === key){
                let reg = new RegExp(key) ;
                new_str = new_str.replace(reg,"") ;
                num += rule_special[key] ;
                i++ ;
            }
        }
    }
    //正常规则计算
    for (let i = 0, len = new_str.length; i < len; i++){
        for(let key in rule){
            if(new_str[i] === key){
                num += rule[key] ;
            }
        }
    }
    return num ;
};
let _romanToInt = function(s) {
    let obj = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900} ;

    let res = 0;
    for(let i = 0; i<s.length; i++) {
        //判断是否为特殊值，否：跳过次单词
        if(s[i+1] && obj[s[i]+s[i+1]]) {
            res += obj[s[i]+s[i+1]];
            i++;
        }
        else {
            res += obj[s[i]];
        }
    }

    return res;
};
let __romanToInt = function(s) {
    const obj = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    const len = s.length;

    let sum = obj[s[0]];
    for (let i = 1; i < len; i++) {
        if (obj[s[i]] > obj[s[i - 1]]) {
            sum -= obj[s[i - 1]];
            sum += obj[s[i]] - obj[s[i - 1]];
        }
        else
            sum += obj[s[i]];
    }
    return sum;
};

/**
 * 获取重复前缀
 * @params str[]
 * @return string
 * */
let longestCommonPrefix = function(strs) {
    //获取字符串集合第一个匹配
    let fin_prefix = "" ;
    if(strs.length > 1){
        for(let i = 0, len = strs[0].length; i < len; i++){
            let prefix = strs[0].substring(0, i+1) ,
                isYes = true;
            for(let j = 1; j < strs.length; j++){
                strs[j].substring(0, i+1) !== prefix &&  (isYes = false) ;
            }
            isYes && (fin_prefix = prefix) ;
        }
        return fin_prefix ;
    }
    return !strs.length ? "" : strs[0] ;
};
let _longestCommonPrefix = function(strs) {
    let str='';
    if(strs.length==0){
        return str;
    }
    for(let i=0;i<strs[0].length;i++){
        for(let j=1;j<strs.length;j++){
            if(strs[0][i]!=strs[j][i]){  //半路截胡
                return str;
            }
        }
        str+=strs[0][i];
    }
    return str;
};

/**
 * indexOf 实现
 * */
let strStr = function(haystack, needle) {
    if(!needle.length) return 0 ;
    for(let i = 0, len = haystack.length; i < len; i++ ){
        if(haystack.substring(i, i + needle.length) === needle){
            return i
        }
    }
    return -1 ;

};

/**
 * 寻找第三个大数，若无找出数组中最大数字
 * @nums array
 * @return number
 * */
let thirdMax = function(nums) {
    let new_arr = bSort(unique5(nums)) ;
    if(new_arr.length >= 3){
        return new_arr[new_arr.length - 3] ;
    } else {
        return new_arr[new_arr.length - 1] ;
    }
};
/**
 * 消除重复
 */
function unique5(arr){
    let x = new Set(arr);
    return [...x];
}
// unique5([2,3,4,2,65,5]) ;
/**
 * 冒泡排序
 * */
function bSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len-1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到后面
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }   1
    }
    return arr;
}
/**
 * 有效的字符串
 * 空字符有效
 * @params [()[]{}]
 * */
var isValid = function(str) {
    if(typeof str === "string" && !str.length){
        return true
    }
    let newStr = clearAlike(str) ;
    //判断是否符合
    for(let i = 0, len = newStr.length; i < len / 2  ; i++){
        if(newStr[i] !== flipCharacter(newStr[len - i - 1])){
            return false
        }
    }
    return true
};
/* 消除相邻相同字符*/
function clearAlike(str){
    if(str.indexOf("()") === -1 &&  str.indexOf("{}") === -1 &&  str.indexOf("[]") === -1){
        return str ;
    }
    let newStr = str ,
        arr = ["{}","[]","()"] ;
    for(let i = 0,len = arr.length; i < len; i++){
        newStr = newStr.replace(arr[i],"") ;
    }
    return clearAlike(newStr) ;
}
function flipCharacter(str){
    let newStr = "" ;
    switch (str) {
        case ')':
            newStr = '(';
            break;
        case "}":
            newStr = "{";
            break;
        case "]":
            newStr = "[";
            break;
    }
    return newStr ;
}

function isRule(str){
    let  max = str.length  ;
    if(!str.length){
        return true
    }
    for(let i = 0, len = str.length; i <=  Math.ceil(len / 2); i++){
        let isSearch = false ;
        for(let j = i + 1; j < len; j++){
            //相邻相同元素
            if(str[i]  === flipCharacter(str[j]) && i === j - 1){
                isSearch = true ;
                i++ ;
                console.log(i);
                break ;
            } else if(str[i]  === flipCharacter(str[j])){
                isSearch = true ;
                if( max >= j){
                    max = j ;
                } else {
                    return false
                }
                break ;
            }
        }
        if(!isSearch){
            console.log("he")
            return false
        }
    }
    return true
}

// console.log(isRule("()[]{}"));
console.log(isRule("(()("));








































