class Heap {
  constructor(comparator, array = []) {
    this.comparator = comparator;
    this.heap = this.heapify(array);
  }

  heapify(array) {
    if (array.length === 0) {
      return [];
    }

    /**
     * parent: i
     * left child: 2i+1
     * right child: 2i+2
     *
     * find parent: assume last index is j
     * parentIdx = Math.floor((i - 1) /2);
     */
    let lastParentIdx = Math.floor((array.length - 2) / 2);
    for (let i = lastParentIdx; i >= 0; i--) {
      this.bubbleDown(array, i);
    }
    return array;
  }

  bubbleDown(array, index) {
    let currentIdx = index;

    while (currentIdx < array.length) {
      // calculate the children indice first
      let leftChildIdx = Math.floor(2 * currentIdx + 1);
      let rightChildIdx = Math.floor(2 * currentIdx + 2);

      if (leftChildIdx > array.length - 1) {
        // it's first child out of boundry
        return;
      }
      let toBeSwappedIdx = leftChildIdx;
      // if right child index is valid and it is going to be swapped, update the tobeSwappedIdx
      if (
        rightChildIdx <= array.length - 1 &&
        this.comparator(array[rightChildIdx], array[leftChildIdx]) === 1
      ) {
        toBeSwappedIdx = rightChildIdx;
      }

      // if the currentIdx is not going to be swapped, return immediately.
      if (this.comparator(array[toBeSwappedIdx], array[currentIdx]) !== 1) {
        return;
      }

      this.swap(array, currentIdx, toBeSwappedIdx);

      // update the index after two values swapped
      currentIdx = toBeSwappedIdx;
    }
  }

  insert(number) {
    this.heap.push(number);
    this.bubbleUp(this.heap.length - 1);
  }

  delete() {
    let res = this.heap.shift();
    let index = Math.floor((this.heap.length - 1) / 2);
    while (index >= 0) {
      this.bubbleDown(this.heap, index);
      index--;
    }
    return res;
  }

  peek() {
    return this.heap[0];
  }

  bubbleUp(index) {
    let parentIdx = Math.floor((index - 1) / 2);
    let array = this.heap;
    while (parentIdx >= 0) {
      if (this.comparator(array[index], array[parentIdx]) !== 1) {
        return;
      }

      this.swap(array, parentIdx, index);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

let array = [4, 10, 3, 5, 1];
let comparator = (a, b) => {
  if (a > b) {
    return 1;
  }

  if (a === b) {
    return 0;
  }

  return -1;
};

//let myHeap = new Heap(comparator, array);
//myHeap.insert(0);
//myHeap.delete();
//myHeap.delete();
//console.log(myHeap.heap);

class ContinuousMedianHandler {
  constructor() {
    // Write your code here.
    this.median = null;

    // min heap stores the max half of the numbers
    this.greaterHeap = new Heap((a, b) => {
      if (a < b) {
        return 1;
      }
      return -1;
    }, []);

    // max heap stores the min half of the numbers
    this.lowerHeap = new Heap((a, b) => {
      if (a > b) {
        return 1;
      }
      return -1;
    }, []);
    this.length = 0;
  }

  insert(number) {
    // Write your code here.
    this.length += 1;

    if (this.lowerHeap.length === 0 || number < this.greaterHeap.peek()) {
      this.lowerHeap.insert(number);
    } else {
      this.greaterHeap.insert(number);
    }

    this.rebalanceHeaps();
    this.updateMedian();
  }

  rebalanceHeaps() {
    // the max difference of two heap sizes are
    if (this.greaterHeap.heap.length - this.lowerHeap.heap.length === 2) {
      let number = this.greaterHeap.delete();
      this.lowerHeap.insert(number);
    } else if (
      this.lowerHeap.heap.length - this.greaterHeap.heap.length ===
      2
    ) {
      let number = this.lowerHeap.delete();
      this.greaterHeap.insert(number);
    }
  }

  updateMedian() {
    if (this.greaterHeap.heap.length > this.lowerHeap.heap.length) {
      this.median = this.greaterHeap.peek();
    } else if (this.lowerHeap.heap.length > this.greaterHeap.heap.length) {
      this.median = this.lowerHeap.peek();
    } else {
      if (this.greaterHeap.heap.length > 0) {
        let sum = this.greaterHeap.peek() + this.lowerHeap.peek();
        this.median = sum / 2;
      }
    }
  }

  getMedian() {
    return this.median;
  }
}

let myCM = new ContinuousMedianHandler();
myCM.insert(5);
myCM.insert(10);
//console.log(myCM.getMedian());
myCM.insert(100);
//console.log(myCM.getMedian());
myCM.insert(200);
myCM.insert(6);
myCM.insert(13);

console.log(myCM.lowerHeap.heap);
console.log(myCM.greaterHeap.heap);
console.log(myCM.getMedian());
