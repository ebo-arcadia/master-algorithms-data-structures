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
    const lastElementIndex = this.values.length - 1;
    const last = this.values[lastElementIndex];
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown();
    }
    return maxToExtract;
  }

  sinkDown() {
    let parentIndex = 0;
    let length = this.values.length;
    let parentValue = this.values[0];

    while (true) {
      let leftChildIndx = 2 * parentIndex + 1;
      let rightChildIndx = 2 * parentIndex + 2;
      let leftChildValue, rightChildValue;
      let swapIndx = null;

      if (leftChildIndx < length) {
        leftChildValue = this.values[leftChildIndx];
        if (leftChildValue > parentValue) {
          swapIndx = leftChildIndx;
        }
      }

      if (rightChildIndx < length) {
        rightChildValue = this.values[rightChildIndx];
        if (
          (swapIndx === null && rightChildValue > parentValue) ||
          (swapIndx !== null && rightChildValue > leftChildValue)
        ) {
          swapIndx = rightChildIndx;
        }
      }

      if (swapIndx === null) break;
      this.values[parentIndex] = this.values[swapIndx];
      this.values[swapIndx] = parentValue;
      parentIndex = swapIndx;
    }
  }

  print() {
    console.info(this.values);
  }
}

const maxBinaryHeap = new MaxBinaryHeap([41, 39, 55, 18, 27, 12]);
maxBinaryHeap.insert(31);
maxBinaryHeap.print();
maxBinaryHeap.extractMax();
maxBinaryHeap.extractMax();
const extractMax = maxBinaryHeap.extractMax();
console.info(extractMax);
maxBinaryHeap.print();
