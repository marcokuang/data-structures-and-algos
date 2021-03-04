function fourNumberSum(array, targetSum) {
  // Write your code here.
  let length = array.length;
  if (length < 4) {
    return [];
  }
  //let sorted = array.sort();
  let result = [];
  let uniqueSet = {};
  // looping first and second numbers
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      let k = 0;
      let map = {};

      // put remaining number into map;
      while (k < length) {
        if (k !== i && k !== j) {
          let remaining = targetSum - array[i] - array[j] - array[k];
          if (map[array[k]] != null) {
            let currentRes = [array[i], array[j], array[k], remaining].sort();
            if (!uniqueSet[currentRes.join(",")]) {
              uniqueSet[currentRes.join(",")] = true;
              result.push(currentRes);
            }
          } else {
            map[remaining] = array[k];
          }
        }
        k++;
      }
    }
  }
  return result;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let length = nums.length;
  if (length < 4) {
    return [];
  }
  let result = [];

  nums.sort();
  // looping first and second numbers
  for (let i = 0; i < length - 3; i++) {
    for (let j = i + 1; j < length - 2; j++) {
      let k = j + 1;
      let l = length - 1;

      while (k < l) {
        let currentSum = nums[i] + nums[j] + nums[k] + nums[l];

        if (currentSum > target) {
          l--;
        } else if (currentSum < target) {
          k++;
        } else {
          // push answer to result;
          result.push([nums[i], nums[j], nums[k], nums[l]]);

          // don't consider duplicate values in the nums array
          while (k < l && nums[k] === nums[k - 1]) {
            k++;
          }

          while (k < l && l <= length - 2 && nums[l] === nums[l + 1]) {
            l--;
          }
          k++;
        }
      }
    }
  }
  return result;
};

var fourSum3 = function (nums, target) {
  const quadruplets = [];
  if (nums == undefined || nums.length < 4) {
    return quadruplets;
  }
  //nums.sort((a, b) => a - b);
  nums.sort();
  const n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < n - 2; j++) {
      if (j != i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        const currentSum = nums[i] + nums[j] + nums[k] + nums[l];
        if (currentSum < target) {
          k++;
        } else if (currentSum > target) {
          l--;
        } else {
          quadruplets.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;
          while (k < l && nums[k] == nums[k - 1]) {
            k++;
          }
          while (k < l && nums[l] == nums[l + 1]) {
            l--;
          }
        }
      }
    }
  }
  return quadruplets;
};

let array = [-1, 0, -5, -2, -2, -4, 0, 1, -2];
let sum = -9;
console.log(fourSum3(array, sum));
