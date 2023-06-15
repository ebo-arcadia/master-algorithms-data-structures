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

  insert() {
    const newNode = new Node();

    if (!this.root) this.root = newNode;

    if (newNode.value > this.root.value) {
      if (this.root.right) {
        this.root.right.right;
      } else {
        this.root.right = newNode;
      }
    }

    if (newNode.value < this.root.value) {
      if (this.root.left) {
        if (this.root.left) {
          this.root.left.left;
        } else {
          this.root.left = newNode;
        }
      }
    }
    return this;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(9);
tree.root.right = new Node(11);
console.log(tree);
