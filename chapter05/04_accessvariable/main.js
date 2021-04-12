"use strict";
function log() {
    console.log(firstName); // Ok to access firstName here
}
log();
var firstName = "Thomas";
log();
