let node = {};

let node1 = {};
let node2 = {};
let node3 = {};

node.val = 1;
node.next = node1;
node1.val = 2;
node1.next = node2;
node2.val = 3;
node2.next = node3;
node3.val = 4;

function printList(node) {
  while (node) {
    console.log(node.val);
    node = node.next;
  }
}

// printList(node);

function reverseList(node) {
  let placeholder = {};

  while (node) {
    //find the next node and store it
    let next = node.next;
    //reverse the chain
    // current node will now point to the next item of the placeholder
    node.next = placeholder.next;
    // placeholder -> next is set to the current node
    placeholder.next = node;

    // move down the original list
    node = next;
  }
  return placeholder.next;
}

// let newList = reverseList(node);
// printList(newList);

function stackReverseList(node) {
  let stack = [];

  while (node) {
    stack.push(node);
    node = node.next;
  }

  let head = {};
  let current = head;
  while (stack.length != 0) {
    current.next = stack.pop();
    // iterate down the new list by moving to current.next
    current = current.next;
  }
  current.next = null;
  return head.next;
}

let newList = stackReverseList(node);
printList(newList);
