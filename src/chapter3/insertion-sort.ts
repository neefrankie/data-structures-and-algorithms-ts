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
    for (let outerIndex = 1; outerIndex < this.nElems; outerIndex++) {
      const temp = this.arr[outerIndex];

      let innerIndex = outerIndex;

      while (innerIndex > 0 && this.arr[innerIndex - 1] >= temp) {
        this.arr[innerIndex] = this.arr[innerIndex - 1];
        --innerIndex;
      }

      this.arr[innerIndex] = temp;
    }
  }
}
