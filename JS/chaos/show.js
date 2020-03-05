
//Iterator 遍历器

//模拟 next方法

function makeIterator(array){
    let nextIndex = 0 ;
    return {
        next: function () {
            return array.length > nextIndex ? { value: array[nextIndex++],done: false} : { value: undefined, done: true}
        }
    }
}

let it = makeIterator([2,3]) ;

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

// console.log(iter.next()); // { value: 'a', done: false }
// console.log(iter.next()); // { value: 'b', done: false }
// console.log(iter.next()); // { value: 'c', done: false }
// console.log(iter.next()); // { value: undefined, done: true }



// let set = new Set(['hello','rainy','mis']) ;
// for(let value of set){
//     console.log(value) ;
// }
//
// let map = new Map() ;
// console.log(map);
// map.set('rainy','123') ;
// for(let [index, item] of map){
//     console.log(index, item);
// }

let newObj = {
    rainy: '123'
};

for(let key in newObj){
    // console.log(newObj[key])
}

function* RainyGenerator() {
    yield 'hello' ;
    yield 'world' ;
    return 'ending'
}

let gene = RainyGenerator();

// console.log(gene.next());
// console.log(gene.next());
// console.log(gene.next());

class Sleep{
    constructor(timeout){
        this.timeout = timeout;
    }
    then(resolve, reject){
        let startTime = Date.now();
        setTimeout(()=>{
            resolve(Date.now() - startTime)
        }, this.timeout)
    }
}

( async ()=>{
    let sleepTime = await new Sleep(1000) ;
    console.log(sleepTime) ;
})() ;
































