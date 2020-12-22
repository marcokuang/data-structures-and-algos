function maxSubsetSumNoAdjacent(array) {
  if (!array || array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  if (array.length === 2) {
    return Math.max(array[0], array[1]);
  }

  let sumArray = [array[0], Math.max(array[0], array[1])];
  for (let i = 2; i < array.length; i++) {
    // when there are more than 3 numbers
    // 2 choices:
    // -> 1. add the current number 'i', that means the new sum will be
    //		sumArray[i] = array[i] + sumArray[i - 2]
    // -> 2. Do NOT add current number 'i', the new sum is;
    // 		sumArray[i] = sumArray[i - 1];
    // In the program, we calculate both cases, and store the max to the new sum
    sumArray[i] = Math.max(array[i] + sumArray[i - 2], sumArray[i - 1]);
  }
  return sumArray[sumArray.length - 1];
}

// example: [7, 10, 12, 7, 9, 14];
// output: 33

function maxSubsetSumNoAdjacent2(array) {
  if (!array || array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  // for array having more than 3 elements
  let currentMax = Math.max(array[0], array[1]);
  let previousMax = array[0];
  for (let i = 2; i < array.length; i++) {
    let temp = currentMax;
    currentMax = Math.max(array[i] + previousMax, currentMax);
    previousMax = temp;
  }

  return currentMax;
}

let array = [7, 10, 12, 7, 9, 14];
let array1 = [7, 10];
console.log(maxSubsetSumNoAdjacent2(array1));
