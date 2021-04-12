"use strict";


//元组:name age isStudent
let studentx: [string,number,boolean,...string[]] = ["Solo",22, true];
//student[0]="male";student[1]=33;student[2]=false;student[3]=null;
studentx[3]="index3";studentx[4]="index4";studentx[5]="falses";
// student[6]=false;//Type 'boolean' is not assignable to type 'string'.
console.log("===元组===");
for(let index in studentx){
    console.log(studentx[index]);
}
let xxtype:[string,number|boolean,string?] = ["CRUD",false];
 xxtype[2] = "[]";

