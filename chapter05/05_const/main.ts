// 1、const变量不能二次赋值
const firstName: string = "Thomas";
//firstName = "Julia"; // Error: firstName is a const

// 2、const对象的自身值可变
const friend = { firstName: "Thomas", lastName: "TypeScripter" };
friend.firstName = "Julia"; // OK
friend.lastName = "Huber"; // OK
// friend = { firstName: "x", lastName: "y" }; // Error: friend is const
