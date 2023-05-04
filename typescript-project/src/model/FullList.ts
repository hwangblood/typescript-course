import ListItem from "./ListItem";

const listStorageKey = "myList";

interface List {
  /**
   * list of items
   */
  list: ListItem[];
  /**
   * Read list from localStorage
   */
  load(): void;
  /**
   * Save list to localStorage
   */
  save(): void;
  /**
   * Clear list and save it to localStorage
   */
  clearList(): void;
  /**
   * Add item to list and save it to localStorage
   * @param itemObj item to be added to list
   */
  addItem(itemObj: ListItem): void;
  /**
   * Remove item from list and save it to localStorage
   * @param id id of item that will be removed
   */
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem(listStorageKey);
    if (typeof storedList !== "string") return;

    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem(listStorageKey, JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
