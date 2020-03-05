/* function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  
  var p = new Point(1, 2);
  console.log(p) */

class Point{
    constructor(x, y){ //传入的参数
      this.x = x ;
      this.y = y ;
    }
    showName(){
        return this.x + this.y ;
    }
    get name(){
      console.log("get")
    }
    set name(value){
      console.log("set",value);
      return value ;
    }
}
class Show{
    constructor(){
        this.printName = this.printName.bind(this) ;
    }
    static test(){
        console.log("静态方法") ;
    }
    printName(name = "rainy"){
        console.log(this) ;
        this.print(name) ;
    }
    print(text){ 
        console.log(text) ;
    }

}
class Father{
  constructor(name = 'Rainy'){
    this.name = name ;
  }
  inputName(){
    console.log(this.name) ;
  }
}
/**
 *  class继承
 */
class Son extends Father{
  constructor(name, age = 18){
    super(name) ;
    this.age = age ;
  }
  inputAge(){
    console.log("age:",this.age)
  }
}

let sn = new Son('Main',20);
// console.log(sn)  ;
// sn.inputName() ;
// sn.inputAge() ;
// type: purchase_sale




