
// let str = 'hello world';
// console.log(str.includes(''));


function takeNumber(str) {
    let arr = [];
    let tmp = '' ;
    for(let i = 0; i <= str.length; i++){
        let cur = str[i] ;
        if(isNaN(cur) || !isNaN(str[str.length])){
            if(tmp){
                arr.push(tmp) ;
                tmp = '' ;
            }
            continue ;
        }
        tmp += str[i] ;
    }
    return arr ;
}
let str = "abc123de45fgh6789qqq111";
let arr = takeNumber(str) ;
console.log(arr);
