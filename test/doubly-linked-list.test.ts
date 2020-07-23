import { DoublyLinkedList } from '../src/chapter5/doubly-linked-list';

describe('Doubly linked list', () => {
  it('should work', () => {
    const list = new DoublyLinkedList();

    list.insertFirst(22);
    list.insertFirst(44);
    list.insertFirst(66);

    list.insertLast(11);
    list.insertLast(33);
    list.insertLast(55);

    list.displayForward();
    list.displayBackard();

    list.deleteFirst();
    list.deleteLast();
    list.deleteKey(11);

    list.displayForward();

    list.insertAfter(22, 77);
    list.insertAfter(33, 88);

    list.displayForward();
  });
});
