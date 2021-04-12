"use strict" ;
var Friend = /** @class */ (function () {
    function Friend() {
        Friend.friendCounter++;
    }
    Friend.friendCounter = 0;
    return Friend;
}());
new Friend();
new Friend();
new Friend();
console.log(Friend.friendCounter); // Logs 3
