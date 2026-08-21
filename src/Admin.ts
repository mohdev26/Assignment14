import { User } from "./User.js";
import { Note } from "./Note.js";

export class Admin extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
    super(id, name, email, password, phone, age);
  }

  public manageNotes(note: Note): void {
    console.log(`Admin is managing note: ${note.title}`);
  }
}