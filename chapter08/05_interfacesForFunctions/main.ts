// class DataLoader {
//     loadAdminName(callback: (adminName: string) => void) {
//         callback("Thomas");
//     }
// }

interface AdminNameCallback {
    (adminName: string): void
}

class DataLoader {
    loadAdminName(callback: AdminNameCallback) {
        callback("Thomas");
    }
}

