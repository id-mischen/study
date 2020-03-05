// function greeter(person) {
//     return "Hello, " + person;
// }
//
// let user = "Jane User";
//
// document.body.innerHTML = greeter(user);

let name_o:string = "rainy" ;
console.log(name_o) ;

class Site{
    name():void{
        console.log("RunBoy")
    }
}

let show = new Site();
show.name() ;

// let age = true ;
let arr: string[] = ["9", "2"] ;
console.log(arr[0]) ;

enum Color {Red, Greed}
let enum_a: Color = Color.Greed ;

let str = "1" ;
let str2:number  = <number> <any> str ;
console.log(str2) ;

let global_name = "mis_chen" ; //全局变量
class Rainy{
    kind_name = 'class_chen' ;  //类变量
    static s_name = 's_chen' ;  //静态变量
    show_name(): void{
        let local_name = "local_chen" ; //局部变量
    }
}
console.log(global_name) ;
console.log(Rainy.s_name);
console.log(new Rainy().kind_name);

// function show_info(name?: string, age? : number){
//     return name + age ;
// }
// let c = show_info() ;
// console.log(c) ;

function create_name(name: string, age: number,...rest_name: string[]){
    return name + rest_name ;
}

console.log(create_name('rainy', 17, 'mis_rainy'))
;













