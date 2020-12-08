/**
 * The function takes an interger array and return any repeated number
 *
 * @param {Array} - An array with nth number of integers
 * @returns {Number} - the arbitary repeated number
 *
 */

function findRepeatNumber(array) {
  if (!array || array.length === 0) {
    return -1;
  }

  for (let i = 0; i < array.length; i++) {
    // We need to swap the value of array[i] with array[array[i]]
    // until array element which value is i fall into the i^th bucket in the array
    while (i != array[i]) {
      // if array[i] === array[array[i]], it means the i^th bucket contains the same value as array[array[i]], the value of i^th bucket is repeated
      if (array[i] === array[array[i]]) {
        return array[i];
      }
      // keep swapping array[i] and array[array[i]] util array[i] === array[array[i]]
      _swap(array, i, array[i]);
    }
  }

  return -2;
}

/**
 *
 * @param {Array} array - original array
 * @param {Number} left - left index to be swapped
 * @param {Number} right - right index to be swapped
 */
function _swap(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

const input = [2, 5, 1, 0, 3, 5];
const res = findRepeatNumber(input);
console.log(`The repeated number is : ${res}`);
