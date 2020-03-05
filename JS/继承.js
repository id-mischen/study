/**
 * 原型链继承
 * @constructor
 */
/*function Father(){
    this.name = 'Father';
    this.info = ['A','B','C'] ;
}

Father.prototype.Say = function () {
    console.log(this.name) ;
};

function Son() {
    this.name = "cc" ;
}
Son.prototype = new Father() ;
Son.prototype.SayFather = function () {
    console.log("son:",this.name) ;
};*/

/**
 * 构造函数继承
 * @constructor
 */
/*function Father(){
    this.info = ['A','B'] ;
}
Father.prototype.Say = function () {
   console.log('Father:', this.info)
} ;

function Son(){
    Father.call(this) ;
}

let father = new Father(),
    son = new Son() ;

son.info.push('C');

console.log(son.Say());
console.log(son.info);


console.log(father.info);
father.Say() */;

/**
 * 组合继承 [ 原型链 + 构造函数]
 * @constructor
 */
/*function Father(){
    this.name = 'Father';
}

Father.prototype.SayFather = function () {
    console.log("Father: ",this.name) ;
} ;

function Son() {
    Father.call(this) ;
    this.name = "Son" ;
}

Son.prototype = new Father() ;

Son.prototype.constructor = Son ; //指向自己

// Son.prototype.SayFather = function () {
//     console.log("Son Reload: ",this.name) ;
// } ;

let father = new Father() ,
    son = new Son() ;

father.SayFather() ;

son.SayFather() ;*/

/*
function Father(){
    this.name = "Father" ;
}

Father.prototype.SayFather = function () {
    console.log("Father:", this.name) ;
};

function Son() {
    this.age = 18 ;
    Father.call(this) ;
}

Son.prototype = new Father() ;
Son.prototype.constructor = Son ;

Son.prototype.SaySon = function () {
    console.log("Son:", this.age) ;
};

let father = new Father(),
    son = new Son() ;

father.SayFather() ;

son.SaySon() ;
*/

/**
 * 寄生组合继承
 * @param name
 * @constructor
 */
/*
function Father(name) {
    this.name = name;
}

Father.prototype.SayName = function () {
    console.log("Father:", this.name);
};

function inheritProto(son, father) {
    let prototype = Object.create(father.prototype);
    prototype.constructor = son;
    son.prototype = prototype;
}

function Son(name, age) {
    Father.call(this, name );
    this.age = age;
}

inheritProto(Son, Father);
Son.prototype.SayAge = function () {
    console.log("Son", this.age ,this.name, );
};
*/




































