"use strict";
interface Friend{
    firstName:string;
}
function printFirstNames(friends:Friend[]) {
    for (let friend of friends) {
        console.log(friend.firstName);
    }
}
printFirstNames([
    { firstName: "张三丰" },
    { firstName: "魏无忌" },
    { firstName: "李小龙" }
    ]
);

