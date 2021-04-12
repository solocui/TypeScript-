"use strict";
var friend = { firstName: "无忌", lastName: "张" };
for (var propName in friend) {
    console.log(propName + ": " + friend[propName]);
}
//元组:name age isStudent
var student = ["Solo", 22, true];
//student[0]="male";student[1]=33;student[2]=false;student[3]=null;
student[3] = "index3";
student[4] = "index4";
student[5] = "falses";
// student[6]=false;//Type 'boolean' is not assignable to type 'string'.
console.log("===元组===");
for (var index in student) {
    console.log(student[index]);
}
