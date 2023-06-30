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

  print() {
    console.info(this.values);
  }
}

const maxBinaryHeap = new MaxBinaryHeap([41, 39, 55, 18, 27, 12]);
console.info(maxBinaryHeap);
maxBinaryHeap.insert(100);
maxBinaryHeap.print();
