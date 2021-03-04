function longestSubstringWithoutDuplication(string) {
  // Write your code here.
  let set = new Set();
  let result = {
    len: 1,
    start: 0,
  };
  // let i be the left pointer;
  for (let i = 0; i < string.length; i++) {
    set.add(string[i]);
    let rightIdx = i + 1;
    while (rightIdx < string.length && !set.has(string[rightIdx])) {
      // add the rightIdx character to the set
      set.add(string[rightIdx]);
      let currentLen = rightIdx + 1 - i;
      if (currentLen > result.len) {
        result.len = currentLen;
        result.start = i;
      }
      rightIdx++;
    }
    // after the while loop, the rightIdx is either a duplicate char,
    // or it has reach the end of string;
    set = new Set();
  }
  return string.slice(result.start, result.start + result.len);
}

console.log(longestSubstringWithoutDuplication("abcda"));
