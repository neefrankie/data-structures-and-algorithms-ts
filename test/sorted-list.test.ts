import { SortedList } from '../src/chapter5/sorted-list';
import { getRandomInt } from '../src/util/random';

describe('Sorted list', () => {
  it('should display a sorted list', () => {
    const sortedList = new SortedList();

    for (let i = 0; i < 10; i++) {
      const id = getRandomInt(1, 100);
      sortedList.insert(id);
    }

    sortedList.displayList

    expect(sortedList.isEmpty()).toBeFalsy();
  });
});
