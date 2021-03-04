function longestPalindromicSubstring(string) {
  // Write your code here.
  let maxSubstringLength = 0;
  let maxSubstring = [0, 0];
  for (let i = 0; i < string.length; i++) {
    // expand a left and right pointer from the index i to find longest palindrome
    let currentSubstring = findPalindromeLength(i, string);
    let currentLength = currentSubstring[1] - currentSubstring[0];
    if (currentLength > maxSubstringLength) {
      maxSubstring = currentSubstring;
      maxSubstringLength = currentLength;
    }
  }

  return string.slice(maxSubstring[0], maxSubstring[1] + 1);
}

function findPalindromeLength(i, string) {
  let left = i;
  let right = i;

  let res = [i, i];

  // expand left and right pointer is the char is the same as the current char
  while (left - 1 >= 0 && string.charAt(left) === string.charAt(left - 1)) {
    left--;
  }
  while (
    right + 1 < string.length &&
    string.charAt(right) === string.charAt(right + 1)
  ) {
    right++;
  }
  while (left >= 0 && right < string.length) {
    //start comparing char at left and right
    if (string.charAt(left) === string.charAt(right)) {
      res = [left, right];
    } else {
      break;
    }
    left--;
    right++;
  }

  return res;
}

let string = "it's highnoon";
console.log(longestPalindromicSubstring(string));
