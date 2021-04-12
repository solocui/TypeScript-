interface Human{
    firstName:string;//默认为public类型
    lastName:string;
    age:number;
}
function showDetail(humans:Human[]):string{
    let count = 0 ;
    let ulHTML = "<ul>";
    for(let human of humans){
        let hi ="<li>"+human.firstName+" "+human.lastName+" 年龄为："+human.age+"岁。</li> \n" ;
        console.log(hi);
        count++;
        ulHTML +=hi ;
    }
    let sumMsg = "<h3>共计人数为："+count+"位。</h3>" ;
    console.log(sumMsg);
    ulHTML +=sumMsg ;
    return ulHTML ;
}
//若生成的js出现类似提示：let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). (W104)
//解决办法：在同级目录下新建 .jshintrc 文件，文件内容为：
// {
//     "esversion": 6
// }
// 常见 .jshintrc 验证规则说明
// {
//     "esversion": 6,     //指定的ECMAScript版本代码
//     "sub": true,        //允许 [] . 形式来访问对象
//     "laxbreak": true,   //不检查换行
//     "regexp": true,     //不允许使用.和[^...]的正则
//     "asi": true,        //无视没有加分号的行尾
//     "bitwise": true,    //会禁用位运算符
//     "curly": true,      //要求使用if和while等结构语句时加上{}来明确代码块
//     "immed": true,      //要求匿名函数的调用为(function(){//}());
//     "eqeqeq": true,     //要求代码中使用===或!==，而不是使用==和!=
//     "eqnull": true,     //允许使用"== null"作比较
//     "newcap": true,     //要求每一个构造函数名都要大写字母开头
//     "noarg": true,      //禁止arguments.caller和arguments.callee的使用
//     "undef": true,      //要求所有的非全局变量，在使用前都被声明
//     "strict": false     //要求使用use strict;语法
// }
