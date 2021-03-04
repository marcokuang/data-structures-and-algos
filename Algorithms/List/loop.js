class LinkedList {
  constructor(val) {
    this.next = null;
    this.value = val;
  }
}

/**
 * set up the linkedlist
 *    0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
 *
 */
let head = new LinkedList(0);
let current = head;
for (let i = 1; i < 10; i++) {
  current.next = new LinkedList(i);
  current = current.next;
}

let loop = head;
for (let j = 0; j < 4; j++) {
  loop = loop.next;
}
current.next = loop;

function findLoop(node) {
  let head = node;
  let slow = node.next;
  let fast = node.next.next;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // now slow and fast run meets at the same node.
  while (head !== fast) {
    head = head.next;
    fast = fast.next;
  }

  return head;
}

console.log(findLoop(head));
