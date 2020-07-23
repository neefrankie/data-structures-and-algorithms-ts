export class BubbleSort {
  private arr: number[] = [];
  private nElems = 0;

  insert(value: number) {
    this.arr[this.nElems] = value;
    this.nElems++;
  }

  display() {
    console.log(`%o`, this.arr);
  }

  sort() {
    for (let outIndex = this.nElems - 1; outIndex > 1; outIndex--) {
      for (let innerIndex = 0; innerIndex < outIndex; innerIndex++) {
        if (this.arr[innerIndex] > this.arr[innerIndex + 1]) {
          this.swap(innerIndex, innerIndex + 1);
        }
      }
    }
  }

  private swap(aIndex: number, bIndex: number) {
    const temp = this.arr[aIndex];
    this.arr[aIndex] = this.arr[bIndex];
    this.arr[bIndex] = temp;
  }
}
