function selectionSort(array) {
  if (array.length < 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        minIdx = j;
        min = array[j];
      }
    }
    // swap indices
    let temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }

  return array;
}

let array = [8, 5, 2, 9, 5, 6, 3];
console.log(selectionSort(array));
