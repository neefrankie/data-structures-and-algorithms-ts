import { InsertionSort } from '../src/chapter3/insertion-sort';
import { getRandomInt } from '../src/util/random';

describe('Insertion sort', () => {
  it('ascending', () => {
    const a = new InsertionSort();

    for (let i = 0; i < 999; i++) {
      a.insert(getRandomInt(1, 9999));
    }

    a.display();

    a.sort();

    a.display();
  });
});
