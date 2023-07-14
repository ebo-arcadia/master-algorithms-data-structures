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
  }

  dequeue() {
    let nodeToRemove = this.values.shift();
    this.values.sort((a, b) => a.priority - b.priority);
    return nodeToRemove;
  }
}
