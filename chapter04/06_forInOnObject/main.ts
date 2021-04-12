"use strict";

interface Friend {
    firstName: string;
    lastName: string;
}
let friend: Friend = { firstName: "无忌", lastName: "张" };

for (let propName in friend) {
    console.log(`${propName}: ${friend[propName]}`);
}
//元组:name age isStudent
let student: [string,number,boolean,...string[]] = ["Solo",22, true];
//student[0]="male";student[1]=33;student[2]=false;student[3]=null;
student[3]="index3";student[4]="index4";student[5]="falses";
// student[6]=false;//Type 'boolean' is not assignable to type 'string'.
console.log("===元组===");
for(let index in student){
    console.log(student[index]);
}
let xtype:[string,number|boolean,string?] = ["CRUD",false];
 xtype[2] = "[]";

