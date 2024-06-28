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
    console.log(sortedSetArray);
    if (sortedSetArray.length === 0) return null;
    const mid = parseInt(sortedSetArray.length / 2);
    const root = new Node(
      sortedSetArray[mid],
      this.buildTree(sortedSetArray.slice(0, mid)),
      this.buildTree(sortedSetArray.slice(mid + 1))
    );
    return root;
  }
}
