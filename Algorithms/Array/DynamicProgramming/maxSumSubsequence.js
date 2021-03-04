function maxSumIncreasingSubsequence(array) {
  // Write your code here.
  let length = array.length;
  let dp = [...array];
  let sequences = new Array(length);
  //dp[0] = array[0];
  let max = -Infinity;
  let maxIdx = -1;
  for (let right = 1; right < length; right++) {
    for (let left = 0; left < right; left++) {
      let currentSum = dp[left] + array[right];
      let prevSum = dp[right];
      if (array[right] > array[left] && currentSum > prevSum) {
        dp[right] = currentSum;

        sequences[right] = left;
      }
    }

    //dp[i] = max sum subsequence from i-th to j-th elements
  }

  dp.forEach((val, index) => {
    if (val > max) {
      maxIdx = index;
      max = val;
    }
  });

  let resultArr = [array[maxIdx]];
  let prevIdx = sequences[maxIdx];
  while (prevIdx != null) {
    resultArr.unshift(array[prevIdx]);
    prevIdx = sequences[prevIdx];
  }

  return [max, [...resultArr]];
  //return dp[array.length - 1];
}

let array = [5, 4, 3, 2, 1];
let array2 = [10, 70, 20, 30, 50, 11, 30];
let array3 = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let array4 = [-1, 1];
let array5 = [1, 2, 3, 4, 5];
let array6 = [10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50];
let array7 = [8, 12, 2, 3, 15, 5, 7];
console.log(maxSumIncreasingSubsequence(array6));
