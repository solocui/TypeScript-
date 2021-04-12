class Friend {
    constructor(public firstName: string) { }
}
export class Developer extends Friend {
    knowsTypeScript: boolean;
}
export class Skateboarder extends Friend {
    makeKickflip() {
        console.log(this.firstName + " made a kickflip");
    }
}
//一次导出多个类型
// class Friend {
//     constructor(public firstName: string) { }
// }
// class Developer extends Friend {
//     knowsTypeScript: boolean;
// }
// class Skateboarder extends Friend {
//     makeKickflip() {
//         console.log(this.firstName + " made a kickflip");
//     }
// }
// export { Developer, Skateboarder }
