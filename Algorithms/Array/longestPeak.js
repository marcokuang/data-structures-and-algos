function longestPeak(array) {
  // Write your code here.

  if (array.length < 3) {
    return 0;
  }

  let longest = 0;
  for (let i = 1; i < array.length - 1; i++) {
    let left = i - 1;
    let right = i + 1;
    let peakLength = 1;

    if (array[i] > array[left] && array[i] > array[right]) {
      let currentLeftDiff = array[left + 1] - array[left];
      while (left >= 0 && currentLeftDiff >= 1) {
        peakLength++;
        left--;
        currentLeftDiff = array[left + 1] - array[left];
      }
      let currentRightDiff = array[right - 1] - array[right];
      while (right < array.length && currentRightDiff >= 1) {
        peakLength++;
        right++;
        currentRightDiff = array[right - 1] - array[right];
      }
    }

    // after checking the current peak length, compare it with the previous longest
    if (longest < peakLength) {
      longest = peakLength;
    }
  }

  return longest;
}

let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
longestPeak(array);
