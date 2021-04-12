//1)类型推断
// let isVisible = true; // TypeScript 推断为boolean类型
// isVisible = "hidden"; // Error: string not assignable to boolean

//2)r任意类型
// let isVisible; // 没有类型标注的声明
// isVisible = true; // 赋予布尔值
// isVisible = "hidden"; // 这样也可以，没有编译时错误

//3)显式声明类型
let isVisible: boolean; // 带类型标注的变量声明
isVisible = true; // assignment of bool
// isVisible = "hidden"; // Error: string not assignable to boolean

