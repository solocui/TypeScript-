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
    loadName() {
        this.dataLoader.loadAdminName((loadedName) => {
            this._adminName = loadedName;
        })
    }
}

let ac = new AdminController(new DataLoader());
ac.loadName();
console.log(ac.adminName); // Logs "Thomas"

