var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//装饰器
function logAccess(target, propertyKey) {
    // 获取属性值
    var value = this[propertyKey];
    // 定义setter
    var setter = function (newValue) {
        value = newValue;
        console.log("set " + propertyKey + ": " + value);
    };
    // 定义 getter
    var getter = function () {
        console.log("get " + propertyKey + ": " + value);
        return value;
    };
    // 替换属性
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
//应用属性装饰器
var Friend = /** @class */ (function () {
    function Friend() {
        this.name = "unkown";
    }
    __decorate([
        logAccess
    ], Friend.prototype, "name", void 0);
    return Friend;
}());
var friend = new Friend();
friend.name = "Thomas";
friend.name = "Julia";
var firstName = friend.name;
