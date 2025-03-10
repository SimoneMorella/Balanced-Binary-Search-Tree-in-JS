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
const genArray = generateRandomArray(30);
const tree = new Tree(genArray);
// prettyPrint(tree.root);
tree.insert(32);
tree.insert(31);
tree.delete(31);
prettyPrint(tree.root);
console.log(tree.find(32));
console.log(tree.find(31));
// console.log(tree.levelOrder());
// console.log(tree.preOrder());
// console.log(tree.inOrder());
// console.log(tree.postOrder());
// console.log(tree.height(tree.find(70)));
console.log(tree.depth(tree.find(32)));
