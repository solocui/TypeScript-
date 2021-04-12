"use strict";
//1）数组两种声明形式：
var xxxNames1 = ["张三丰", "魏无忌", "李小龙"];
var xxxNames2 = ["张三丰", "魏无忌", "李小龙"];
//2）for-of-loop
console.log("for-of-loop：");
var xNames = ["张三丰", "魏无忌", "李小龙"];
for (var _i = 0, xNames_1 = xNames; _i < xNames_1.length; _i++) {
    var firstname = xNames_1[_i];
    console.log(firstname);
}
//3）for-in-loop:for-in循环不会返回值本身，而是返回所有值的下标
console.log("for-in-loop：");
var xxNames = ["张三丰", "魏无忌", "李小龙"];
for (var index in xxNames) {
    console.log(index + " - " + xxNames[index]);
}
