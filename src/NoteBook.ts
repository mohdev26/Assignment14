import { Note } from "./Note.js";

export class NoteBook {
  private notes: Note[] = [];

  public addNote(
    id: number,
    title: string,
    content: string,
    userId: any
  ): void {
    const note = new Note(id, title, content, userId);

    this.notes.push(note);
  }

  public removeNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  public getNotes(): Note[] {
    return this.notes;
  }
}