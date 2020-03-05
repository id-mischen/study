var Rainy;
(function (Rainy) {
    var Chen;
    (function (Chen) {
        var ShowName = /** @class */ (function () {
            function ShowName(data) {
                this.name = data;
            }
            ShowName.prototype.inputName = function () {
                return this.name;
            };
            return ShowName;
        }());
        Chen.ShowName = ShowName;
    })(Chen = Rainy.Chen || (Rainy.Chen = {}));
})(Rainy || (Rainy = {}));
var a = new Rainy.Chen.ShowName("rainy");
console.log(a.inputName());
console.log(Rainy) ;
