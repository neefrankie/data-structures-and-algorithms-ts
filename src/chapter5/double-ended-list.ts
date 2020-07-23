import { Link } from "./link";

export class DoubleEndedList {
  private first: Link | null = null;
  private last: Link | null = null;

  isEmpty(): boolean {
    return this.first === null;
  }

  insertFirst(id: number) {
    const newLink = new Link(id);

    if (this.isEmpty()) {
      this.last = newLink;
    }

    newLink.next = this.first;
    this.first = newLink;
  }

  insertLast(id: number) {
    const newLink = new Link(id);

    if (this.isEmpty()) {
      this.first = newLink;
    } else {
      this.last!.next = newLink;
    }

    this.last = newLink;
  }

  deleteFirst(): Link | null {
    if (!this.first) {
      return null;
    }

    const temp = this.first;

    if (this.first.next) {
      this.last = null;
    }

    this.first = this.first.next;

    return temp;
  }

  displayList() {
    console.log('List (first --> last): ');

    let current = this.first;

    while (current != null) {
      current.displayLink();
      current = current.next;
    }
  }
}
