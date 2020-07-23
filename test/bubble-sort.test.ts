import { BubbleSort } from '../src/chapter3/bubble-sort';
import { getRandomInt } from '../src/util/random';

describe('Bubble sort', () => {
  it('asceding', () => {
    const bubble = new BubbleSort();

    for (let i = 0; i < 999; i++) {
      const n = getRandomInt(1, 9999);

      bubble.insert(n);
    }

    bubble.display();

    bubble.sort();

    bubble.display();
  });
});
