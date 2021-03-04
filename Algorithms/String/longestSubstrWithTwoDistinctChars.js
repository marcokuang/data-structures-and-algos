/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length <= 2) {
    return s.length;
  }

  let max = -1;
  let left = 0;
  let right = 0;

  let positions = new Map();

  while (right < s.length) {
    let char = s[right];
    positions.set(s[right], right);

    if (positions.size > 2) {
      let leftMostKey = "";
      let leftMostVal = s.length;
      for (let [key, val] of positions) {
        if (val < leftMostVal) {
          leftMostKey = key;
          leftMostVal = val;
        }
      }
      // delete left most char in the postions map;
      positions.delete(leftMostKey);
      // set the left pointer to the delete Index
      left = leftMostVal + 1;
    }

    let currentLen = right + 1 - left;
    max = Math.max(max, currentLen);

    right++;
  }

  return max;
};

console.log(lengthOfLongestSubstringTwoDistinct("cabbae"));
