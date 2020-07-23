import { Link } from './link';

export class LinkList {
  private first: Link | null = null;

  get link(): Link | null {
    return this.first;
  }

  isEmpty(): boolean {
    return this.first == null;
  }

  insertFirst(id: number) {
    const newLink = new Link(id);
    newLink.next = this.first;
    this.first = newLink;
  }

  deleteFirst(): Link | null {
    if (this.first == null) {
      return null;
    }

    const temp = this.first;
    this.first = this.first.next;

    return temp;
  }
}
