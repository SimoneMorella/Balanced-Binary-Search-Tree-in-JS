import { Tree } from "./tree.js";

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.num}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

function generateRandomArray(size) {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * 100)
  );
}
const genArray = generateRandomArray(11);
const tree = new Tree(genArray);
prettyPrint(tree.root);
tree.insert(32);
prettyPrint(tree.root);
