/**
 * Leetcode 543
 * Utilize DFS and recursion to solve the problem
 * the path is the height of right subtree and the height of left subtree
 * @param {Node} root - root node of tree
 */

function bstDiameter(root) {
  if (!root) {
    return 0;
  }

  let maxDiameter = 0;
  DFShelper(root);
  function DFShelper(root) {
    if (!root) {
      return 0;
    }

    let leftHeight = DFShelper(root.left);
    let rightHeight = DFShelper(root.right);
    let currentDiameter = leftHeight + rightHeight;
    maxDiameter = Math.max(maxDiameter, currentDiameter);

    // return the height of the current subtree -> add 1 to ensure the current node is counted
    return Math.max(leftHeight, rightHeight) + 1;
  }

  return maxDiameter;
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}

let node1 = new Node(1);

let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(bstDiameter(node1));
