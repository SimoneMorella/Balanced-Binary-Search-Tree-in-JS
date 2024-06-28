import { Node } from "./node.js";

export class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  #setNSort(array) {
    return [...new Set(array)].sort((a, b) => a - b);
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
}
