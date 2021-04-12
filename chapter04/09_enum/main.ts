"use strict";
//
enum Dock { left, top=3,right=5, bottom };
console.log("--枚举遍历--");
for(let d in Dock){
    console.log(Dock[d]);
}
let xo:any;
//xo as HTML
