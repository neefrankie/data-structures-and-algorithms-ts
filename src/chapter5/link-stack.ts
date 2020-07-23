import { LinkList } from "./link-list";
import { Link } from "./link";

export class LinkStack {
  private list: LinkList;

  constructor() {
    this.list = new LinkList();
  }

  push(id: number) {
    this.list.insertFirst(id);
  }

  pop(): number | null {
    return this.list.deleteFirst()?.id || null;
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }
}
