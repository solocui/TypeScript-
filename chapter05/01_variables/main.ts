//1 var 声明变量
function getNumber(init) {
    if (init) {
        var x = 9;
    }
    return x;//x在整个函数内都可见
}
// 2 let声明变量
// function getNumber2(init) {
//     if (init) {
//         let x = 9;
//     }
//     return x; // 错误：x此处不可见,因为是 “let” 是块作用域的
// }
// 3 相同作用域，禁止同名变量
// let firstName: string = "Thomas"; // Compile-time error
// let firstName: string = "Julia"; // Compile-time error

// 4 不同作用域的同名变量:变量隐藏
// let firstName: string = "Thomas";
// {
//     let firstName: string = "Bill";
//     console.log(firstName); // 输出 "Bill”
// }
// console.log(firstName); // 输出 “Thomas”

