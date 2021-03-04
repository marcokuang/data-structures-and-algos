var findKthLargest = function (nums, k) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let targetIdx = nums.length - k;
  return quickSelect(nums, 0, nums.length - 1, targetIdx);
  //return quickSelect(nums, 0, nums.length - 1, targetIdx);
};

// recursive function to perform quick select
function quickSelect(nums, left, right, k) {
  while (true) {
    // get the index of the pivot number
    let index = partitionWithRandomPivot(nums, left, right);
    // if the index matches with the desired index k
    if (index == k) {
      // return the number
      return nums[index];
      // if the index is to the left of the desired index k, shrink the left boundry
    } else if (index < k) {
      left = index + 1;
    } else {
      // otherwise, shrink the right boundry of the search
      right = index - 1;
    }
  }
}

function partition(nums, left, right) {
  // set the pivot as the right most number in range
  let pivot = nums[right];
  // storeIdx indicates the last *index* which number is smaller than the pivot
  let storeIdx = left;

  for (let i = left; i <= right; i++) {
    // scans from left to right, if the number at i is smaller than pivot, swap it
    if (nums[i] < pivot) {
      // after the swap, increase the storeIdx
      swap(nums, storeIdx++, i);
    }
  }
  // swap the pivot to the last storeIdx to get the number
  swap(nums, storeIdx, right);

  return storeIdx;
}

function partitionWithRandomPivot(nums, left, right) {
  // swap the pivot to the right most position
  let pivotIdx = Math.floor(Math.random() * (right - left) + left);
  swap(nums, right, pivotIdx);
  let position = left;
  let pivot = nums[right];

  for (let i = left; i <= right; i++) {
    if (nums[i] < pivot) {
      swap(nums, i, position);
      position++;
    }
  }

  swap(nums, right, position);
  return position;
}

function swap(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}

let array = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let array2 = [6, 3, 4];
let array3 = [8, 5, 2, 9, 7, 6, 3];
//console.log(partition(array2, 0, array.length - 1));
console.log(findKthLargest(array2, 1));
