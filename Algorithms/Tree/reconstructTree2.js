var buildTree = function (inorder, postorder) {
  // store the element position in inorder to a map
  let inOrderMap = new Map();
  inorder.forEach((element, index) => {
    inOrderMap.set(element, index);
  });

  return helper(postorder, 0, postorder.length - 1, inOrderMap, 0);
};

function helper(postOrder, postLeft, postRight, map, inLeft) {
  if (postLeft > postRight) {
    return null;
  }

  let rootVal = postOrder[postRight];
  let root = new TreeNode(rootVal);
  let pInorderRootIndex = map.get(rootVal);
  let leftTreeSize = pInorderRootIndex - inLeft;

  root.left = helper(
    postOrder,
    postLeft,
    postLeft + leftTreeSize - 1,
    map,
    inLeft
  );
  root.right = helper(
    postOrder,
    postLeft + leftTreeSize,
    postRight - 1,
    map,
    pInorderRootIndex + 1
  );

  return root;
}

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];
let res = buildTree(inorder, postorder);

function inorderTraversial(node) {
  if (node == null) {
    return;
  }

  inorderTraversial(node.left);
  console.log(node.val);
  inorderTraversial(node.right);
}

function inorderTraversial2(node) {
  let stack = [];
  let output = [];
  let current = node;

  while (current || stack.length) {
    // go to the left most child and push all parent nodes to stack
    while (current != null) {
      stack.push(current);
      current = current.left;
    }

    // add node value to output file
    current = stack.pop();
    output.push(current.val);
    //
    current = current.right;
  }
  return output;
}

inorderTraversial2(res);

function preorderTraversial(root) {
  if (root == null) {
    return [];
  }
  let current = root;
  let stack = [root];
  let output = [];

  while (stack.length) {
    current = stack.pop();
    output.push(current.val);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return output;
}

// console.log(res);
console.log(preorderTraversial(res));
