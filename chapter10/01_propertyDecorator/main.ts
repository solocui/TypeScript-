
//装饰器
function logAccess(target: Object, propertyKey: string) {
    
    // 获取属性值
    let value = this[propertyKey];
    // 定义setter
    let setter = (newValue) => {
        value = newValue;
        console.log(`set ${propertyKey}: ${value}`);
    };
    // 定义 getter
    let getter = () => {
        console.log(`get ${propertyKey}: ${value}`);
        return value;
    };
    // 替换属性
    if (delete this[propertyKey]) {
        Object.defineProperty(
            target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
//应用属性装饰器
class Friend {
    @logAccess
    name: string;
}
let friend = new Friend();
friend.name = "Thomas";
friend.name = "Julia";
let firstName = friend.name;


