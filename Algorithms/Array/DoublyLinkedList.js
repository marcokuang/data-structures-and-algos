class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this.head;
    } else {
      this.insertBefore(this.head, node);
    }
  }

  setTail(node) {
    // Write your code here.
    if (!this.tail) {
      this.setHead(node);
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);

    // insert the node in between of existing nodes
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    // fix the link
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.

    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);

    // insert the node in between of existing nodes
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    // fix the link
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    if (position === 1) {
      this.setHead(nodeToInsert);
    }

    let node = this.head;
    let currentPos = 1;
    while (node != null && currentPos !== position) {
      node = node.next;
      currentPos++;
    }

    if (node === null) {
      this.setTail(nodeToInsert);
    } else {
      this.insertBefore(node, nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    // Write your code here.
    let node = this.head;
    while (node !== null) {
      let nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    // Write your code here.
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;

    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    node.prev = null;
    node.next = null;
  }

  containsNodeWithValue(value) {
    // Write your code here.
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }

    return false;
  }
}

let list = new DoublyLinkedList();
let node = {
  value: 1,
  next: null,
  prev: null,
};
list.setHead(node);
