"use strict";
function printFirstNames(friends) {
    for (let friend of friends) {
        console.log(friend.firstName);
    }
}
printFirstNames([
    { firstName: "张三丰" },
    { firstName: "魏无忌" },
    { firstName: "李小龙" }
]);
