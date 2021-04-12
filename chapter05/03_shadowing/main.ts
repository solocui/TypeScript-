//变量隐藏：内部作用域隐藏外部作用域同名变量
let firstName: string = "Thomas";
{
    let firstName: string = "Bill";
    console.log(firstName); // 输出 "Bill”
}
console.log(firstName); // 输出 “Thomas”
