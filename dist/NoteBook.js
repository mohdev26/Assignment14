"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteBook = void 0;
const Note_js_1 = require("./Note.js");
class NoteBook {
    notes = [];
    addNote(id, title, content, userId) {
        const note = new Note_js_1.Note(id, title, content, userId);
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter((note) => note.id !== id);
    }
    getNotes() {
        return this.notes;
    }
}
exports.NoteBook = NoteBook;
