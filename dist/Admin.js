"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_js_1 = require("./User.js");
class Admin extends User_js_1.User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes(note) {
        console.log(`Admin is managing note: ${note.title}`);
    }
}
exports.Admin = Admin;
