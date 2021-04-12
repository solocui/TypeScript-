"use strict" ;

function log() {
    console.log(firstName); // Ok to access firstName here
}
//log();//输出undefined
let firstName: string = "Thomas";

log();//输出Thomas
