//接口
interface Friend {
    firstName: string;
    lastName?: string;
}
//声明参数类型
function getFullName(friend: Friend): string {
    let fullName = friend.firstName;
    if (friend.lastName) {
        fullName += " " + friend.lastName;
    }
    return fullName;
}
// 调用与传参
console.log(getFullName({firstName:"Thomas",lastName:"Huber"}));
console.log(getFullName({firstName:"Thomas"}));
//console.log(getFullName({})); // Error: firstName is missing

