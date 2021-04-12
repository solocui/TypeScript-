"use strict";
var Dock;
(function (Dock) {
    Dock[Dock["left"] = 0] = "left";
    Dock[Dock["top"] = 3] = "top";
    Dock[Dock["right"] = 5] = "right";
    Dock[Dock["bottom"] = 6] = "bottom";
})(Dock || (Dock = {}));
;
console.log("--枚举遍历--");
for (let d in Dock) {
    console.log(Dock[d]);
}
