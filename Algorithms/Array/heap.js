class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
    let node = Math.floor((array.length - 1 - 1) / 2);
    for (let i = node; i >= 0; i--) {
      this.siftDown(i, array);
    }
    return array;
  }

  siftDown(currentIndex, heap) {
    // Write your code here.
    let endIndex = heap.length - 1;

    let childOneIndex = 2 * currentIndex + 1;
    // moving the items till reaching the end of heap
    while (childOneIndex <= endIndex) {
      let childTwoIndex = 2 * currentIndex + 2;
      // find the min of the two children node
      let nodeToSwap = childOneIndex;
      if (
        childTwoIndex <= endIndex &&
        heap[childTwoIndex] < heap[childOneIndex]
      ) {
        nodeToSwap = childTwoIndex;
      }

      // if the parent is smaller than the chosen node
      if (heap[currentIndex] > heap[nodeToSwap]) {
        this.swap(currentIndex, nodeToSwap, heap);
        currentIndex = nodeToSwap;
        childOneIndex = 2 * currentIndex + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIndex, heap) {
    // Write your code here.
    // calculate parent index this because if the left node is at 1, then
    // (i - 2) /2 would have negative value

    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (parentIndex >= 0 && heap[parentIndex] > heap[currentIndex]) {
      this.swap(parentIndex, currentIndex, heap);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0];
  }

  remove() {
    // Write your code here.
    this.swap(0, this.heap.length - 1, this.heap);
    this.siftDown(0, this.heap);

    return this.heap.pop();
  }

  insert(value) {
    // Write your code here.
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(left, right, heap) {
    let temp = heap[left];
    heap[left] = heap[right];
    heap[right] = temp;
  }
}

let array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];
let heap = new MinHeap(array);
// heap.insert(-1);
console.log(heap.peek());
