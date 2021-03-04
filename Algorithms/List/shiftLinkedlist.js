function shiftLinkedList(head, k) {
  // Write your code here.

  let newHead = head;
  let tail = head;
  let len = 0;
  while (tail.next !== null) {
    tail = tail.next;
    len++;
  }

  // accounted for the last node which has null as the node.next
  len += 1;

  // calculate the shift number k when it's 0, positive or negative value
  k = (k % len) * -1;
  if (k === 0) {
    return head;
  } else if (k < 0) {
    k = len + k;
  }

  // move k - 1th node forward, and swap the lists
  let prev = null;
  for (let i = 0; i < k; i++) {
    prev = newHead;
    newHead = newHead.next;
  }

  prev.next = null;
  tail.next = head;

  return newHead;
}

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
