"use strict";
// 1）声明字符串变量：单引号包围或双引号包围
// let firstName: string = "Thomas";
// firstName = 'Tom'; // like in JavaScript single-quotes work as well
// 2）模版字符串，支持换行
var firstName = "Thomas";
var message = "Welcome " + firstName + ", \n                        how are you?";
function onKeyUp() {
    // 获取input元素和它的值
    var input = document.getElementById("myInput");
    var firstname = input.value;
    // 获取输出元素
    var output = document.getElementById("myOutput");
    // 把信息赋给span元素的innerText属性
    output.innerText = "Hi " + firstname + ",\n                             \u4F60\u7684\u540D\u5B50\u7684\u957F\u5EA6\u4E3A " + firstname.trim().length + "!";
}
