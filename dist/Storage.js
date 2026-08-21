"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((currentItem) => currentItem !== item);
    }
    getAllItems() {
        return this.items;
    }
}
exports.Storage = Storage;
