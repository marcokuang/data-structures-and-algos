class Heap {
  constructor(array) {
    this.heap = array;
    this.heap = this.heapify(this.heap, 0, this.heap.length - 1);
  }

  heapify(array, start, end) {
    // parent i, left: 2i + 1, right: 2i + 2;
    let firstParentIdx = Math.floor((end - 1) / 2);
    for (let i = firstParentIdx; i >= start; i--) {
      this.bubbleDown(array, i, array.length - 1);
    }
    return array;
  }

  swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  bubbleDown(array, start, end) {
    let leftChildIdx = 2 * start + 1;
    while (leftChildIdx <= end) {
      let rightChildIdx = 2 * start + 2;
      let toBeSwapped = leftChildIdx;

      if (rightChildIdx < end && array[leftChildIdx] < array[rightChildIdx]) {
        toBeSwapped = rightChildIdx;
      }

      if (array[start] < array[toBeSwapped]) {
        this.swap(array, start, toBeSwapped);
      }

      start = toBeSwapped;
      leftChildIdx = 2 * start + 1;
    }
  }

  sort() {
    let array = this.heap;
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
      this.swap(array, endIdx, 0);
      this.bubbleDown(array, 0, endIdx - 1);
    }
  }
}
function heapSort(array) {
  // Write your code here.
  let myHeap = new Heap(array);
  //console.log(myHeap.heap);
  myHeap.sort();
  console.log(myHeap.heap);
  return myHeap.heap;
}

heapSort([8, 5, 2, 9, 5, 6, 3]);
