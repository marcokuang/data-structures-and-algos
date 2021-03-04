/**
 * This demonstrate Kadane algorithm
 * @param {number[]} array
 */
function findMaxSumSubarray(array) {
  let localMax = array[0];
  let globalMax = array[0];
  let dp = new Array(array.length);
  dp[0] = array[0];
  /**
   * Let’s say somehow I know the local_maximum[4].
   * Then we see that to calculate the local_maximum[5],
   * we don’t need to compute the sum of all subarrays ending with A[5]
   * since we already know the result from arrays ending with A[4].
   * Note that if array [4, -1] had the maximum sum,
   * then we only need to check the arrays highlighted with the red arrows to calculate local_maximum[5].
   * And this leads us to the principle on which Kadane’s Algorithm works.
   */
  for (let i = 1; i < array.length; i++) {
    // local max is the max of a[i] and the sum of a[i-1] + a[i]
    dp[i] = Math.max(array[i] + dp[i - 1], array[i]);
    globalMax = Math.max(globalMax, dp[i]);
  }

  return globalMax;
}

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSumSubarray(array));
