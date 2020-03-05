// console.log("TypeScript Number 属性: ");
// console.log("最大值为: " + Number.MAX_VALUE);
// console.log("最小值为: " + Number.MIN_VALUE);
// console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
// console.log("正无穷大:" + Number.POSITIVE_INFINITY);

//NaN
// let month = 0 ;
// if(month >= 0 && month <= 12 ){
//     month = Number.NaN ;
//     console.log("月份是：", month) ;
// } else {
//     console.log("error") ;
// }
//prototype

// let num = 110.5422 ;
// console.log(num.toPrecision(2)) ;
//
// let arr: any[][] = [ [1,2,3],["rainy","mis_chen"]] ;
// console.log(arr) ;
// var mytuple = [10,"Hello","World","typeScript"];
// console.log("添加前元素个数："+mytuple.length)    // 返回元组的大小
//
// mytuple.push(12)                                    // 添加到元组中
// console.log("添加后元素个数："+mytuple.length)
// console.log("删除前元素个数："+mytuple.length)
// console.log(mytuple.pop()+" 元素从元组中删除") // 删除并返回删除的元素
//
// console.log("删除后元素个数："+mytuple.length)

/**
 * @Description: 
 * @author Rainy
 * @date 2019/7/17 
*/
interface IPerson{
    first_name: string ,
    alia_name: string,
    sayHi: ()=> number
}

let c:IPerson = {
    first_name: 'rainy' ,
    alia_name: 'mis_chen',
    sayHi: () =>{return 1}
} ;



interface Father {
    name:string
}
interface GrandFather {
    work: string
}
interface  Son extends Father,GrandFather{
    age: number
}

let person = <Son>{} ;
person.name = 'rainy' ;
person.age = 18 ;
person.work = "c" ;
// let person:Son = {
//     name: 'rainy',
//     age: 18,
//     work: '热'
// };
class Rainy{
    name:string ;
    constructor(aff_name: string){
        this.name = aff_name ;
    }
    showHi():void{
        console.log("我的名字：", this.name) ;
    }
}

class Shape{
    Area: number ;
    constructor(a: number){
        this.Area = a ;
    }
}
class Circle extends Shape{
    disp():number{
        console.log(this.Area) ;
        return this.Area ;
    }
}
class Other extends Circle{
    sayHi(): string{
        console.log(this) ;
        return "hello";
    }
    disp(): number {
        super.disp() ;
        console.log("方法的重写") ;
        return super.disp();
    }
}

class Rainy_M {
    static name_a:string ;
    constructor(str: string){
        Rainy_M.name_a = str ;
    }
    static sayHi():void{
        console.log("hello：",Rainy_M.name_a) ;
    }
}
let z = new Rainy_M("雨柔") ;
Rainy_M.sayHi() ;
class Person{ }
let obj = new Person();
let isPerson = obj instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
































