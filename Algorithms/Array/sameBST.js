function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  return checkBST(arrayOne, arrayTwo);
}

function checkBST(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }

  if (arr1[0] !== arr2[0]) {
    return false;
  }

  let arr1Smaller = getSmallerSubarray(arr1);
  let arr2Smaller = getSmallerSubarray(arr2);

  let arr1Larger = getEqualOrLargerSubarray(arr1);
  let arr2Larger = getEqualOrLargerSubarray(arr2);

  return checkBST(arr1Smaller, arr2Smaller) && checkBST(arr1Larger, arr2Larger);
}

function getSmallerSubarray(array) {
  let root = array[0];
  let result = array.filter((elem, index) => elem < root && index !== 0);

  return result;
}

function getEqualOrLargerSubarray(array) {
  let root = array[0];
  let result = array.filter((elem, index) => elem >= root && index !== 0);
  return result;
}
let array1 = [10, 15, 8, 12, 94, 81, 5, 2, 11];
let arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81];
console.log(sameBsts(array1, arrayTwo));
