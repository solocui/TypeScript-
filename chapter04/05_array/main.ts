"use strict" ;
//1）数组两种声明形式：
let xxxNames1: string[] = ["张三丰", "魏无忌", "李小龙"];
let xxxNames2: Array<string> = ["张三丰", "魏无忌", "李小龙"];
//2）for-of-loop
console.log("for-of-loop：");
let xNames: string[] = ["张三丰", "魏无忌", "李小龙"];
for (let firstname of xNames) {
  console.log(firstname);
}
//3）for-in-loop:for-in循环不会返回值本身，而是返回所有值的下标
console.log("for-in-loop：");
let xxNames: string[] = ["张三丰", "魏无忌", "李小龙"];
for (let index in xxNames) {
 console.log(`${index} - ${ xxNames [index]}`);
}


