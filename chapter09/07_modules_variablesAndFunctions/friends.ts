class Friend {
    constructor(public firstName: string) { }
}
export let FRIENDS: Friend[] = [
    new Friend("Sara"),
    new Friend("Anna"),
    new Friend("Thomas")];
export function printFriend(friend: Friend) {
    console.log(friend.firstName);
}
//另一种导出变量和函数的方式：单一语句导出
// class Friend {
//     constructor(public firstName: string) { }
// }
// let FRIENDS: Friend[] = [
//     new Friend("Sara"),
//     new Friend("Anna"),
//     new Friend("Thomas")];
// function printFriend(friend: Friend) {
//     console.log(friend.firstName);
// }
// export { FRIENDS, printFriend }
