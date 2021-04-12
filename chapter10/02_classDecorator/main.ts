// 1）简单装饰器
// function Component(firstName: string, lastName: string) {
//     return function MyDecorator(target: Function) {
//     }
// }
// @Component("Solo", "Cui")
// class Human {
// }

// 2）规约化数据
// interface ComponentData {
//     firstName: string;
//     lastName: string;
// }

// function Component(data: ComponentData) {
//     return function Component(target: Function) {
//         //要做的事情：……满足需要的业务逻辑
//     }
// }


// @Component({
//     firstName: "Solo",
//     lastName: "Cui"
// }
// )
// class Human {
// }

// 3) 元数据反射
//import 'reflect-metadata';
import  './node_modules/reflect-metadata/Reflect';

interface ComponentData {
    firstName: string;
    lastName: string;
}
let componentDataKey = "componentData";

function Component(data: ComponentData) {
    return function Component(target: Function) {
        Reflect.defineMetadata(componentDataKey, data, target);
    }
}

@Component({
    firstName: "Solo",
    lastName: "Cui"
}
)
class Human {
}

let compData = Reflect.getMetadata(componentDataKey, Human) as ComponentData;
console.log(compData.firstName); // Logs "Solo"
console.log(compData.lastName); // Logs "Cui"


