interface IHaveId {
    id: number;
}


// class GenericRepo<T> {
class GenericRepo<T extends IHaveId> {
    private _items = new Array<T>();
    getById(id: number) {
        return this._items.filter(item => item.id === id)[0];
    }
    getAll() {
        return this._items;
    }
    insert(item: T): void {
        this._items.push(item);
    }
}
