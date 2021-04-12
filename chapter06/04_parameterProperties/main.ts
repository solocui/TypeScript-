
// class Friend {
//     firstName: string;//默认为public
//     constructor(firstName: string) {
//         this.firstName = firstName;
//     }
// }

// class Friendx {
//     constructor(public firstName: string) { }
// }
class Friend {
    constructor(public firstName: string,
        public lastName?: string) { }
    getFullName(): string {
        let fullName = this.firstName;
        if (this.lastName) {
            fullName += " " + this.lastName;
        }
        return fullName;
    }
}

