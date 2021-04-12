class Friend {
    private _firstName: string;
    set firstName(value: string) {
        this._firstName = value;
    }
    get firstName(): string {
        return this._firstName;
    }
    showDetail(hi:string){
        console.log(hi+", "+this._firstName );
    }
}

let friend = new Friend();
friend.firstName = "Thomas"; // 感觉就如普通属性一样
console.log(friend.firstName);
friend.showDetail("hi,");
