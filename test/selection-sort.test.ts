import { SelectionSort } from '../src/chapter3/selection-sort';
import { getRandomInt } from '../src/util/random';

describe('Selection sort', () => {
  it('ascending', () => {
    const selection = new SelectionSort();

    for (let i = 0; i < 999; i++) {
      selection.insert(getRandomInt(1, 9999));
    }

    selection.display();

    selection.sort();

    selection.display();
  });
});
