var isValidBST = function (root) {
  if (!root) {
    return true;
  }
  const stack = [];
  let prev = null;
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    if (prev && prev.val >= node.val) {
      return false;
    }
    prev = node;
    root = node.right;
  }
  return true;
};
