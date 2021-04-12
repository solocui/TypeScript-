interface AdminNameCallback {
    (adminName: string): void
}

class DataLoader {
    loadAdminName(callback: AdminNameCallback) {
        callback("Thomas");
    }
}

class AdminController {
    private _adminName: string;
    constructor(private dataLoader: DataLoader) { }
    get adminName(): string { return this._adminName; }
    // loadName() {
    //     this.dataLoader.loadAdminName(function (loadedName) {
    //         this._adminName = loadedName;
    //     })
    // }
    loadName() {
        let _this = this;
        this.dataLoader.loadAdminName(function (loadedName) {
            _this._adminName = loadedName;
        })
    }

}
let ac = new AdminController(new DataLoader());
ac.loadName();
console.log(ac.adminName); // Logs “undefined”, not “Thomas”


