// let friend = { firstName: "Thomas" };
// printFirstName(friend);
interface Friend {
    firstName: string;
}
declare function printFirstName(friend: Friend): void;
let friend = { firstName: "Solo" };
printFirstName(friend);
