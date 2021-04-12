//定义类
class Friend {
    firstName: string;
    lastName?: string;

    constructor(firstName: string, lastName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        let fullName = this.firstName;
        if (this.lastName) {
            fullName += " " + this.lastName;
        }
        return fullName;
    }
}

let friend1 = new Friend("Thomas","Huber");
let friend2 = new Friend("Julia");
console.log(friend1.getFullName()); // 输出 “Thomas Huber”
console.log(friend2.getFullName()); // 输出 “Julia”


