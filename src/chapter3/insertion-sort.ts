export class InsertionSort {
  private arr: number[] = [];
  private nElems: number = 0;

  insert(value: number) {
    this.arr[this.nElems] = value;
    this.nElems++;
  }

  display() {
    console.log('%o', this.arr);
  }

  sort() {
    // Start from the second element of the array.
    for (let outerIndex = 1; outerIndex < this.nElems; outerIndex++) {
      // Put the the flag element away.
      const temp = this.arr[outerIndex];

      // Inner loop start from outer index, counting backward.
      let innerIndex = outerIndex;

      // Counting from the element before the flag element.
      // Walk backward to find out which element if smaller than the flag element.
      while (innerIndex > 0 && this.arr[innerIndex - 1] >= temp) {
        this.arr[innerIndex] = this.arr[innerIndex - 1];
        --innerIndex;
      }

      this.arr[innerIndex] = temp;
    }
  }
}
