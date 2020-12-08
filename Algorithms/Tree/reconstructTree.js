const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

function buildTree(preOrder, inOrder) {
  // preOrder traversial: root => left => right
  // inOrder traversial: left => root => right
  //
  // It implies the first node in preOrder is the root node, and any nodes to the left of
  //    the same node in inOrder is left subtree; any nodes to the right of the same root node
  //    in inOrder is right subtree
  //
  // Step 1:
  //    construct a map storing the inOrder node values as key, the position in inOrder as
  //    value to enhance the time complexity of building the root nodes
  let inOrderMap = new Map();
  for (let i = 0; i < inOrder.length; i++) {
    inOrderMap.set(inOrder[i], i);
  }

  // Step 2:
  //    use a helper function to recursively break down the subtrees and construct root nodes
  //    of the subtrees
  // initial boundries:
  //    left boundry for preOrder: 0
  //    Right boundry for preOrder: preOrder.length - 1
  //    left boundry for inOrder: 0
  //    Right boundry for inOrder: inOrder.length - 1
  //
  let preOrderLength = preOrder.length;
  let inOrderLength = inOrder.length;

  let root = helper(
    preOrder,
    0,
    preOrderLength - 1,
    inOrderMap,
    0,
    inOrderLength - 1
  );
  return root;
}

function helper(preOrder, preLeft, preRight, map, inLeft, inRight) {
  // base case of the recursive helper
  // if the shrinked boundries of the subtrees are collapsed to the same node
  // return a null node
  if (preLeft > preRight || inLeft > inRight) {
    return null;
  }

  // as mentioned above, the root node is always the first element of preOrder array
  let node = new Node(preOrder[preLeft]);
  // pInOrderIndex: pivot element index which is the root node in inOrder array
  let pInOrderIndex = map.get(node.val);

  // calculate left subtree's right boundry
  // assume the right boundry index is X:
  //    length of left subtree represented in preOrder: X - (preLeft + 1)
  //    length of left subtree represented in inOrder: pInorderIndex - 1 - inLeft
  // => X - (preLeft + 1) = pInorderIndex - 1 - inLeft
  // => X = pInorderIndex - 1 - inLeft + (preLeft + 1)
  // => X = pInorderIndex - inLeft + preLeft

  // shrink the boundries as dividing subtrees
  // left subtree elements represented in preOrder:
  //    left boundry: preLeft + 1
  //    right boundry: pInOrderIndex - inLeft + preLeft
  // left subtree elements represented in inOrder:
  //    left boundry: inLeft
  //    right boundry: pInOrderIndex - 1

  node.left = helper(
    preOrder,
    preLeft + 1,
    pInOrderIndex - inLeft + preLeft,
    map,
    inLeft,
    pInOrderIndex - 1
  );

  // Calculate the left boundry of right subtree represended in preOrder
  // the right boundry of left subtree is: pInOrderIndex - inLeft + preLeft + 1
  // therefore the left boundry of right subtree is 1 more position to the right
  // X = pInOrderIndex - inLeft + preLeft + 1;

  // right subtree elements represented in preOrder:
  //    left boundry: pInOrderIndex - inLeft + preLeft + 1
  //    right boundry: preRight
  // right subtree elements represented in inOrder:
  //    left boundry: pInOrderIndex + 1
  //    right boundry: inRight
  node.right = helper(
    preOrder,
    pInOrderIndex - inLeft + preLeft + 1,
    preRight,
    map,
    pInOrderIndex + 1,
    inRight
  );

  return node;
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let res = buildTree(preorder, inorder);
// console.log(res);

function branchSums(root) {
  // Write your code here.
  let output = [];
  let stack = [root];
  let subSums = [root.val];

  while (stack.length) {
    let currentNode = stack.pop();
    let sum = subSums.pop();

    if (!currentNode.left && !currentNode.right) {
      output.push(sum);
    }

    if (currentNode.right) {
      stack.push(currentNode.right);
      subSums.push(sum + currentNode.right.val);
    }

    if (currentNode.left) {
      stack.push(currentNode.left);
      subSums.push(sum + currentNode.left.val);
    }
  }

  return output;
}

console.log(branchSums(res));
