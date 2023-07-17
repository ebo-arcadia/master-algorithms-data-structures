class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor(values) {
    this.values = values;
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let childValue = this.values[childIndex];

    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      let parentValue = this.values[parentIndex];

      if (childValue.priority >= parentValue.priority) break;

      this.values[parentIndex] = childValue;
      this.values[childIndex] = parentValue;
      childIndex = parentIndex;
    }
  }

  dequeue() {
    const minToExtract = this.values[0];
    const lastElementIndex = this.values.pop();
    const last = this.values[lastElementIndex];
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown();
    }
    return minToExtract;
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
        if (leftChildValue.priority < parentValue.priority) {
          swapIndx = leftChildIndx;
        }
      }

      if (rightChildIndx < length) {
        rightChildValue = this.values[rightChildIndx];
        if (
          (swapIndx === null &&
            rightChildValue.priority < parentValue.priority) ||
          (swapIndx !== null &&
            rightChildValue.priority < leftChildValue.priority)
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
}

let priority = new PriorityQueue([]);
priority.enqueue('read the Bible', 1);
priority.enqueue('exercise', 2);
priority.enqueue('reach out to support group', 3);
priority.enqueue('work', 5);
priority.dequeue();
priority.dequeue();
console.info(priority);
