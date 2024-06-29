import { Node } from "./node.js";

export class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  #setNSort(array) {
    return [...new Set(array)].sort((a, b) => a - b);
  }

  #minVal(node) {
    let minV = node.key;
    while (node.left !== null) {
      minV = node.left.key;
      node = node.left;
    }
    return minV;
  }

  buildTree(array) {
    const sortedSetArray = this.#setNSort(array);
    if (sortedSetArray.length === 0) return null;
    const mid = parseInt(sortedSetArray.length / 2);
    const root = new Node(
      sortedSetArray[mid],
      this.buildTree(sortedSetArray.slice(0, mid)),
      this.buildTree(sortedSetArray.slice(mid + 1))
    );
    return root;
  }

  insert(value, root = this.root) {
    if (root === null) {
      return new Node(value);
    }
    value > root.num
      ? (root.right = this.insert(value, root.right))
      : (root.left = this.insert(value, root.left));
    return root;
  }

  delete(value, root = this.root) {
    if (root === null) return root;
    if (value > root.num) {
      root.right = this.delete(value, root.right);
    }
    else if (value < root.num) {
      root.left = this.delete(value, root.left);
    }
    else {
      if (root.left === null) return root.right;
      else if (root.right === null) return root.left;
      root.key = this.#minVal(root.right);
      root.right = this.delete(value, root.right);
    }
    return root;
  }

  find(value) {
    let current = this.root;
    while (current.num !== value) {
      if (value > current.num) current = current.right;
      else current = current.left;
      if (current === null) return "No Node found";

    }
    return current;
  }

  levelOrder(callback) {
    if (this.root === null) return;
    let queue = [this.root];
    let result = [];
    while (queue.length !== 0) {
      let current = queue.shift();
      if (callback) callback(current);
      result.push(current.num);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    if (!callback) return result;

  }
}
