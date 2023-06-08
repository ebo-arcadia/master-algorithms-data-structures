class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    const toPop = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = toPop.previous;
      this.tail.next = null;
      toPop.previous = null;
    }
    this.length--;
    return toPop;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let count, currentNode;
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index <= this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.previous;
        count--;
      }
    }
    return currentNode;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    const prevNode = this.get(index - 1);
    const currentNode = prevNode.next;
    const newNode = new Node(val);

    prevNode.next = newNode;
    newNode.previous = prevNode;

    newNode.next = currentNode;
    currentNode.previous = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const removedNode = this.get(index);
    const previousNode = removedNode.previous;
    const afterNode = removedNode.next;

    previousNode.next = afterNode;
    afterNode.previous = previousNode;
    removedNode.previous = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
console.info(list);
console.log('----before remove-----');
let removed = list.remove(1);
console.log('----after remove-----');
console.info(list);
console.log('----removed node-----');
console.warn(removed);
