function minHeightBst(array) {
  // Write your code here

  return helper(array, 0, array.length - 1, null);
}

function helper(array, left, right) {
  if (left > right) {
    return null;
  }
  let mid = Math.floor((left + right) / 2);
  let currentNode = new BST(array[mid]);

  currentNode.left = helper(array, left, mid - 1);
  currentNode.right = helper(array, mid + 1, right);

  return currentNode;
}

// Takes an array and return a binary search tree with minimum height.
let array = [1, 2, 5, 7, 10, 13, 14, 15, 22];
console.log(minHeightBst(array));
