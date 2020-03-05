

function bubbleSort( data ){
    let temp ;
    for( let i = 0, len = data.length ; i < len; i++ ){
        for( let j = 0 ;j < len - i - 1; j++){
            if( data[i] > data[i+1]){
                temp = data[i] ;
                data[i] = data[i+1] ;
                data[i+1] = temp ;
            }
        }
    }
    return data
}

console.log(bubbleSort([1, 2, 1.5, 45, 3, 5]));