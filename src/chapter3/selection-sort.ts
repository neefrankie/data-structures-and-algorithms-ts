export class SelectionSort {
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
    for (let outerIndex = 0; outerIndex < this.nElems - 1; outerIndex++) {
      let minIndex = outerIndex;

      for (let innerIndex = outerIndex + 1; innerIndex < this.nElems - 1; innerIndex++) {
        if (this.arr[innerIndex] < this.arr[minIndex]) {
          minIndex = innerIndex;
        }
      }

      this.swap(outerIndex, minIndex);
    }
  }

  private swap(aIndex: number, bIndex: number) {
    const temp = this.arr[aIndex];
    this.arr[aIndex] = this.arr[bIndex];
    this.arr[bIndex] = temp;
  }
}
