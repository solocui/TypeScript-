class Friend {
    constructor(public firstName: string,
        public lastName: string,
        public isDeveloper: boolean) { }
}
let friend = new Friend("Thomas", "Huber", true);

// let surname = friend.lastName;
// let isDev = friend.isDeveloper;

let { lastName: surname, isDeveloper: isDev } = friend;
console.log(surname);
console.log(isDev);

let { lastName, isDeveloper } = friend;
console.log(lastName);
console.log(isDeveloper);


function loadFriend(): Friend {
    return new Friend("Julia", "Huber", false);
}

