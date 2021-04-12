"use strict";
// 1）声明字符串变量：单引号包围或双引号包围
// let firstName: string = "Thomas";
// firstName = 'Tom'; // like in JavaScript single-quotes work as well
// 2）模版字符串，支持换行
let firstName: string = "Thomas";
let message: string = `Welcome ${firstName}, 
                        how are you?`;

function onKeyUp() {
    // 获取input元素和它的值
    let input = document.getElementById("myInput") as HTMLInputElement;
    let firstname = input.value;
    // 获取输出元素
    let output = document.getElementById("myOutput");
    // 把信息赋给span元素的innerText属性
    output.innerText = `Hi ${firstname},
                             你的名子的长度为 ${firstname.trim().length}!`;
}
