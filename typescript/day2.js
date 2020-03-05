// console.log("TypeScript Number 属性: ");
// console.log("最大值为: " + Number.MAX_VALUE);
// console.log("最小值为: " + Number.MIN_VALUE);
// console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
// console.log("正无穷大:" + Number.POSITIVE_INFINITY);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var c = {
    first_name: 'rainy',
    alia_name: 'mis_chen',
    sayHi: function () { return 1; }
};
var person = {};
person.name = 'rainy';
person.age = 18;
person.work = "c";
// let person:Son = {
//     name: 'rainy',
//     age: 18,
//     work: '热'
// };
var Rainy = /** @class */ (function () {
    function Rainy(aff_name) {
        this.name = aff_name;
    }
    Rainy.prototype.showHi = function () {
        console.log("我的名字：", this.name);
    };
    return Rainy;
}());
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log(this.Area);
        return this.Area;
    };
    return Circle;
}(Shape));
var Other = /** @class */ (function (_super) {
    __extends(Other, _super);
    function Other() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Other.prototype.sayHi = function () {
        console.log(this);
        return "hello";
    };
    Other.prototype.disp = function () {
        _super.prototype.disp.call(this);
        console.log("方法的重写");
        return _super.prototype.disp.call(this);
    };
    return Other;
}(Circle));
var Rainy_M = /** @class */ (function () {
    function Rainy_M(str) {
        Rainy_M.name_a = str;
    }
    Rainy_M.sayHi = function () {
        console.log("hello：", Rainy_M.name_a);
    };
    return Rainy_M;
}());
var z = new Rainy_M("雨柔");
Rainy_M.sayHi();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj = new Person();
var isPerson = obj instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
