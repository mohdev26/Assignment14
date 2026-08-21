import { User } from "./User.js";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public user: User;

  constructor(
    id: number,
    title: string,
    content: string,
    user: User
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.user = user;
  }

  public preview(): string {
    return this.content.length > 30
      ? this.content.substring(0, 30) + "..."
      : this.content;
  }
}