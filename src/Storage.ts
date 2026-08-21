export class Storage<T> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
  }

  public removeItem(item: T): void {
    this.items = this.items.filter(
      (currentItem) => currentItem !== item
    );
  }

  public getAllItems(): T[] {
    return this.items;
  }
}