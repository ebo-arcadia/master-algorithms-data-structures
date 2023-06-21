class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return undefined;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(value) {
    let currentNode = this.root,
      found = false;

    if (this.root === null) return undefined;

    while (currentNode && !found) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.left) {
        currentNode = currentNode.left;
      } else {
        found = true;
      }
    }
    if (!found) return 'Node not found!';
    return currentNode;
  }

  contains(value) {
    if (this.root === null) return false;
    let currentNode = this.root,
      found = false;
    while (currentNode && !found) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }
    return false;
  }
  // breadth first search
  breadthFirstSearch() {
    let result = [];
    let queue = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      result.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(5);
tree.insert(11);
tree.insert(6);
tree.insert(9);
tree.insert(13);
console.info(tree.breadthFirstSearch());
