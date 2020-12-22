/**
 * The function will get the permutations by swapping the numbers in the array "in place",
 * and save the snapshot of the permutation to output. Then it will
 * backtrack the changes to original once the call finishes
 * @param {number[]} array - input array containing the numbers
 */

function getPermutations(array) {
  // Write your code here.

  if (!array) {
    return null;
  }
  let output = [];
  let swap = function (array, left, right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  };

  let permutationDFS = function (array, start) {
    if (array.length - 1 === start) {
      output.push([...array]);
    } else {
      for (let i = start; i < array.length; i++) {
        swap(array, start, i);
        permutationDFS(array, start + 1);
        swap(array, start, i);
      }
    }
  };
  permutationDFS(array, 0);
  return output;
}

let array = [1, 2, 3];
//console.log(getPermutations(array));

/**
 * This is the solution implementing backtracking algo
 * @param {number[]} array - input number array
 */
function permutationBT(array) {
  let output = [];
  let permutation = [];
  let backtracking = (array, permutation, used) => {
    if (permutation.length === array.length) {
      output.push([...permutation]);
      return;
    }

    for (let i = 0; i < array.length; i++) {
      if (used[i] === false) {
        permutation.push(array[i]);
        used[i] = true;

        console.log("\t before backtracking", permutation);
        backtracking(array, permutation, used);
        // after finding the combination with current number array[i], we continue with next number
        // so we backtrack the index in used array to be true, and pop the previous current number out from permutation subset.
        used[i] = false;

        // note: DO NOT use slice as it will return a shallow copy of the original array. splice modifies the original array
        permutation.pop();

        console.log("after backtracking", permutation);
      }
    }
  };

  if (!array || !array.length) {
    return output;
  }

  let used = new Array(array.length).fill(false);

  backtracking(array, permutation, used);
  return output;
}

console.log(permutationBT(array));
