//定义类
class Friend {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        let fullName = this.firstName;
        if (this.lastName) {
            fullName += " " + this.lastName;
        }
        return fullName;
    }
}
let friend1 = new Friend("Thomas", "Huber");
let friend2 = new Friend("Julia");
console.log(friend1.getFullName()); // 输出 “Thomas Huber”
console.log(friend2.getFullName()); // 输出 “Julia”
