function mergeSort(array) {
  // Write your code here.

  if (array.length <= 1) {
    return array;
  }

  let middleIdx = Math.floor(array.length / 2);
  let left = array.slice(0, middleIdx);
  let right = array.slice(middleIdx);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArray = [];
  // create pointers to keep track of sorted index;
  let i = 0; // left half array pointer
  let j = 0; // right half array pointer
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }
  // push the left over elements for both arrays
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }
  return sortedArray;
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
