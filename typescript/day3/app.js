/// <reference path="./IShape.ts" />
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("Triangle is drawn");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
/// <reference path="./IShape.ts" />
/// <reference path="./Circle.ts"  />
/// <reference path="./Triangle.ts" />
console.log(Drawing) ;
function drawAllShape(shape) {
    shape.draw();
}
drawAllShape(new Drawing.Circle);
drawAllShape(new Drawing.Triangle);
