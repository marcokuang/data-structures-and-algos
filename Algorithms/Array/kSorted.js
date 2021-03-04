function sortKSortedArray(array, k) {
  // Write your code here.
  let minheap = new Heap();
  let minRounds = Math.min(array.length - 1, k);
  for (let i = 0; i <= minRounds; i++) {
    minheap.insert(array[i]);
  }

  for (let j = 0; j < array.length; j++) {
    let next = j + minRounds + 1;
    array[j] = minheap.delete();
    if (next <= array.length - 1) {
      minheap.insert(array[next]);
    }
  }

  return array;
}

class Heap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(number) {
    this.heap.push(number);
    let i = this.heap.length - 1;
    this.bubbleUp(i);
  }

  get length() {
    return this.heap.length;
  }

  bubbleUp(index) {
    while (index >= 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      // parent index is out of range, or parent is smaller than current number
      // break the loop
      if (parentIdx < 0 || this.heap[parentIdx] <= this.heap[index]) {
        break;
      }

      // number at index is greater than parent
      this.swap(parentIdx, index);
      index = parentIdx;
    }
  }

  delete() {
    let res = null;
    if (this.heap.length > 0) {
      res = this.heap.shift();
      let firstParentIdx = Math.floor((this.heap.length - 2) / 2);
      while (firstParentIdx >= 0) {
        this.bubbleDown(firstParentIdx);
        firstParentIdx--;
      }
    }
    // heap is empty, return null
    return res;
  }

  bubbleDown(index) {
    while (index <= this.heap.length - 1) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let toBeSwapped = leftChild;
      if (
        rightChild <= this.length - 1 &&
        this.heap[rightChild] < this.heap[leftChild]
      ) {
        toBeSwapped = rightChild;
      }

      // check toBeSwapped index with current index
      if (
        toBeSwapped > this.length - 1 ||
        this.heap[toBeSwapped] >= this.heap[index]
      ) {
        break;
      }

      this.swap(toBeSwapped, index);
      index = toBeSwapped;
    }
  }
}

let array = [3, 2, 1, 5, 4, 7, 6, 5];
// let heap = new Heap();
// array.forEach((i) => {
//   heap.insert(i);
// });
// heap.delete();
// console.log(heap.heap);

let sorted = new sortKSortedArray([1], 3);
console.log(sorted);
