import { DoubleEndedList } from '../src/chapter5/double-ended-list';

describe('Double ended list', () => {
  it('insert data', () => {
    const list = new DoubleEndedList();

    list.insertFirst(22);
    list.insertFirst(44);
    list.insertFirst(66);

    list.insertLast(11);
    list.insertLast(33);
    list.insertLast(55);

    list.displayList();

    list.deleteFirst();
    list.deleteFirst();

    list.displayList();
  });
});
