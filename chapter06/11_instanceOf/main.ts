class Friend {
    constructor(public firstName: string) { }
}
class Developer extends Friend {
    knowsTypeScript: boolean;
}
class ExcelGuru extends Friend { }

let friend: Friend = new Developer("Thomas");
if (friend instanceof Developer) {
    console.log("Yeah, it's a dev");
    console.log("Knows TypeScript: " + friend.knowsTypeScript)
}

