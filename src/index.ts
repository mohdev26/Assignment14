import { User } from "./User.js";
import { Admin } from "./Admin.js";
import { Note } from "./Note.js";
import { NoteBook } from "./NoteBook.js";
import { Storage } from "./Storage.js";


const user = new User(
  1,
  "Mohamed",
  "mohamed@gmail.com",
  "123456",
  "01012345678",
  25
);

user.displayInfo();


const admin = new Admin(
  2,
  "Admin",
  "admin@gmail.com",
  "admin123",
  "01112345678",
  30
);

admin.displayInfo();


const noteBook1 = new NoteBook();
const noteBook2 = new NoteBook();


user.addNoteBook(noteBook1);
user.addNoteBook(noteBook2);

console.log("User NoteBooks:");
console.log(user.noteBooks);


noteBook1.addNote(
  1,
  "TypeScript",
  "Learning TypeScript OOP is very important",
  user
);

noteBook1.addNote(
  2,
  "JavaScript",
  "Learning JavaScript fundamentals",
  user
);

console.log("Notes:");

for (const note of noteBook1.getNotes()) {
  console.log(note.title);
  console.log(note.preview());
}


const note = new Note(
  3,
  "My Note",
  "This note belongs to Mohamed",
  user
);

console.log("Note Author:");
console.log(note.user.name);


admin.manageNotes(note);


const numberStorage = new Storage<number>();

numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);

console.log("Number Storage:");
console.log(numberStorage.getAllItems());


numberStorage.removeItem(20);

console.log("After removing 20:");
console.log(numberStorage.getAllItems());