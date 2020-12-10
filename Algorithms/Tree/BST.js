// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let newNode = new BST(value);

    let root = this;
    while (root) {
      if (value >= root.value) {
        if (!root.right) {
          root.right = newNode;
          break;
        } else {
          root = root.right;
        }
      } else {
        if (!root.left) {
          root.left = newNode;
          break;
        } else {
          root = root.left;
        }
      }
    }

    return this;
  }

  contains(value) {
    // Write your code here.
    let root = this;
    while (root) {
      if (value === root.value) {
        return true;
      } else if (value > root.value) {
        root = root.right;
      } else {
        root = root.left;
      }
    }
    return false;
  }

  remove(value, parentNode = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let root = this;
    while (root) {
      if (value === root.value) {
        // parentNode is detected.
        // case 1, it does not have any child
        if (!root.left && !root.right) {
          if (parentNode) {
            parentNode.left === root
              ? (parentNode.left = null)
              : (parentNode.right = null);
            root = null;
          } else {
            return null;
          }
        }
        // case 2, it has at least one child
        else if (!root.left || !root.right) {
          // no parentNode is found
          if (!parentNode) {
            // move the child of the found node
            if (root.left) {
              root.value = root.left.value;
              root.right = root.left.right;
              root.left = root.left.left;
            } else {
              root.value = root.right.value;
              root.left = root.right.left;
              root.right = root.right.right;
            }
          } else {
            if (parentNode.left == root) {
              parentNode.left = root.left ? root.left : root.right;
            } else {
              parentNode.right = root.left ? root.left : root.right;
            }
          }
          root = null;
        }
        // case 3, root has 2 children
        else {
          // get the smallest element from right subtree;
          let parentOfSmallestNode = null;
          let smallestRightNode = root.right;

          while (smallestRightNode.left) {
            parentOfSmallestNode = smallestRightNode;
            smallestRightNode = smallestRightNode.left;
          }

          // it is more accurate than using parenNode of root to check the "root" node is a root node or not.
          if (!parentOfSmallestNode) {
            root.right = root.right.right;
          } else {
            parentOfSmallestNode.left = smallestRightNode.right;
          }

          // it is the root node -> the pointer has not been updated
          root.value = smallestRightNode.value;
          root = null;
        }
      } else if (value > root.value) {
        parentNode = root;
        root = root.right;
      } else {
        parentNode = root;
        root = root.left;
      }
    }

    return this;
  }

  // returns parent node of smallest node, and the smallest node
  getSmallestNode() {
    let current = this;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }
}

// Do not edit the line below.
let node1 = new BST(30);

let node2 = new BST(10);

let node3 = new BST(40);

let node4 = new BST(50);
let node5 = new BST(45);
node1.left = node2;
node1.right = node3;
node3.right = node4;
node3.left = node5;

console.log(node1.remove(30));
