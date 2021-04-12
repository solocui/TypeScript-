class Friend {
    constructor(public firstName: string) { }
}
class Developer extends Friend {
    knowsTypeScript: boolean;
}

let dev = new Developer("Thomas");
dev.knowsTypeScript = true;
console.log(dev.firstName);
console.log(dev.knowsTypeScript);

//继承并定义自己的构造函数
class Friendx {
    constructor(public firstName: string) { }
}
class Developerx extends Friendx {
    constructor(firstName: string, public knowsTypeScript: boolean) {
        super(firstName);
    }
}

