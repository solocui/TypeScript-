"use strict";
// 1）简单装饰器
// function Component(firstName: string, lastName: string) {
//     return function MyDecorator(target: Function) {
//     }
// }
// @Component("Solo", "Cui")
// class Human {
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
require("./node_modules/reflect-metadata/Reflect");
var componentDataKey = "componentData";
function Component(data) {
    return function Component(target) {
        Reflect.defineMetadata(componentDataKey, data, target);
    };
}
var Human = /** @class */ (function () {
    function Human() {
    }
    Human = __decorate([
        Component({
            firstName: "Solo",
            lastName: "Cui"
        })
    ], Human);
    return Human;
}());
var compData = Reflect.getMetadata(componentDataKey, Human);
console.log(compData.firstName); // Logs "Solo"
console.log(compData.lastName); // Logs "Cui"
