// function greeter(person) {
//     return "Hello, " + person;
// }
//
// let user = "Jane User";
//
// document.body.innerHTML = greeter(user);
var name_o = "rainy";
console.log(name_o);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("RunBoy");
    };
    return Site;
}());
var show = new Site();
show.name();
// let age = true ;
var arr = ["9", "2"];
console.log(arr[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Greed"] = 1] = "Greed";
})(Color || (Color = {}));
var enum_a = Color.Greed;
var str = "1";
var str2 = str;
console.log(str2);
var global_name = "mis_chen"; //全局变量
var Rainy = /** @class */ (function () {
    function Rainy() {
        this.kind_name = 'class_chen'; //类变量
    }
    Rainy.prototype.show_name = function () {
        var local_name = "local_chen"; //局部变量
    };
    Rainy.s_name = 's_chen'; //静态变量
    return Rainy;
}());
console.log(global_name);
console.log(Rainy.s_name);
console.log(new Rainy().kind_name);
// function show_info(name?: string, age? : number){
//     return name + age ;
// }
// let c = show_info() ;
// console.log(c) ;
function create_name(name, age) {
    var rest_name = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest_name[_i - 2] = arguments[_i];
    }
    return name + rest_name;
}
console.log(create_name('rainy', 17, 'mis_rainy'));
