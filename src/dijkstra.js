class PriorityQueue {
  constructor() {
    this.values = [];
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  enqueue(value, priority) {
    this.values.push({value, priority});
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }
}
