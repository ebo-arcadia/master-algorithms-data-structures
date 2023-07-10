class MaxBinaryHeap {
  constructor(values) {
    this.values = values;
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let childValue = this.values[childIndex];

    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      let parentValue = this.values[parentIndex];

      if (childValue <= parentValue) break;

      this.values[parentIndex] = childValue;
      this.values[childIndex] = parentValue;
      childIndex = parentIndex;
    }
  }

  extractMax() {
    const maxToExtract = this.values[0];
    const childIndex = this.values.length - 1;
    this.values[0] = this.values[childIndex];

    let parentIndex = 0;
    let parentValue = this.values[parentIndex];

    while (parentValue <= leftChildIndex || parentValue <= rightChildValue) {
      let leftChildIndex = Math.floor(2 * parentIndex + 1);
      let rightChildIndex = Math.floor(2 * parentIndex + 2);
      let leftChildValue = this.values[leftChildIndex];
      let rightChildValue = this.values[rightChildIndex];

      if (parentIndex <= leftChildIndex && parentIndex <= rightChildIndex)
        break;

      if (leftChildIndex > rightChildIndex) {
        this.values[parentIndex] = this.values[leftChildIndex];
        parentIndex = leftChildIndex;
      }

      if (leftChildIndex < rightChildIndex) {
        this.values[parentIndex] = this.values[rightChildIndex];
        parentIndex = rightChildIndex;
      }
    }

    return maxToExtract;
  }

  print() {
    console.info(this.values);
  }
}

const maxBinaryHeap = new MaxBinaryHeap([41, 39, 55, 18, 27, 12]);
maxBinaryHeap.insert(100);
// console.info(maxBinaryHeap);
maxBinaryHeap.print();
