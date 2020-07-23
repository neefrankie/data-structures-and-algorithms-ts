import { Link } from "./link";

export class SortedList {
  private first: Link | null = null;

  isEmpty() {
    return this.first === null;
  }

  insert(id: number) {
    const newLink = new Link(id);

    this.insertLink(newLink);
  }

  insertLink(l: Link) {
    let previous: Link | null = null;
    let current = this.first;

    // Find the position to insert the new link.
    // The loop won't execute if either first is null, of the new link's id
    // the the smallest.
    while (current != null && l.id > current.id) {
      // Remember what's before the pointer.
      previous = current;
      // Move the pointer to the next element.
      current = current.next;
    }

    // If previous is null, the new link shoud goes to the front of the list.
    if (previous === null) {
      this.first = l;
    } else {
      // otherwise insert the new link after previous and before current.
      previous.next = l;
    }

    // New link's next always points to current.
    l.next = current
  }

  // Remove elemnent on the front. Returns the removed element, or null if the list is empty.
  remove(): Link | null {
    if (this.first == null) {
      return null;
    }

    const temp = this.first;
    this.first = this.first.next;

    return temp;
  }

  displayList() {
    console.log('List (first--> last): ');

    let current = this.first;
    while (current != null) {
      current.displayLink();
      current = current.next;
    }
  }
}
