"use strict";
exports.__esModule = true;
var B = require("./b");
var C = require("./c");
function show(data) {
    data.draw();
}
show(new B.B); //类必须new
show(new C.C);
