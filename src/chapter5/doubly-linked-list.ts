import { Link } from './link';

export class DoublyLinkedList {
  private first: Link | null = null;
  private last: Link | null = null;

  isEmpty(): boolean {
    return this.first == null;
  }

  insertFirst(id: number) {
    const newLink = new Link(id);

    if (this.isEmpty()) {
      this.last = newLink;
    } else {
      this.first!.previous = newLink;
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
      newLink.previous = this.last;
    }

    this.last = newLink;
  }

  deleteFirst(): Link | null {
    if (!this.first) {
      return null;
    }

    const temp = this.first;

    if (!this.first.next) {
      this.last = null
    } else {
      this.first.next.previous = null;
    }

    this.first = this.first?.next;
    return temp;
  }

  deleteLast(): Link | null {
    if (!this.last) {
      return null;
    }

    const temp = this.last;

    if (!this.last.previous) {
      this.first = null;
    } else {
      this.last.previous.next = null;
    }

    this.last = this.last.previous;
    return temp;
  }

  insertAfter(id: number, insertId: number): boolean {

    let current: Link | null = this.first;

    while (current?.id != id) {
      current = current?.next || null;
      if (!current) {
        return false;
      }
    }

    const newLink = new Link(insertId);

    if (current === this.last) {
      newLink.next = null;
      this.last = newLink;
    } else {
      newLink.next = current.next;
      current.next!.previous = newLink;
    }

    newLink.previous = current;
    current.next = newLink;

    return true;
  }

  deleteKey(id: number): Link | null {
    let current: Link | null = this.first;

    while (current?.id != id) {
      current = current?.next || null;
      if (!current) {
        return null;
      }
    }

    if (current == this.first) {
      this.first = current.next;
    } else {
      current.previous!.next = current.next;
    }

    if (current == this.last) {
      this.last = current.previous;
    } else {
      current.next!.previous = current.previous;
    }

    return current;
  }

  displayForward() {
    console.log('List (first --> last): ');

    let current = this.first;
    while (current) {
      current.displayLink();
      current = current.next;
    }
  }

  displayBackard() {
    console.log('List (last --> first): ');

    let current = this.last;
    while (current) {
      current.displayLink();
      current = current.previous;
    }
  }
}
