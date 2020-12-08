function bubbleSort(array) {
  // Write your code here.

  let i = 0;

  while (i < array.length) {
    if (array[i] > array[i + 1] && i + 1 < array.length) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;

      i = -1;
    }
    i++;
  }

  return array;
}

let array = [8, 5, 2, 9, 5, 6, 3];
console.log(bubbleSort(array));
