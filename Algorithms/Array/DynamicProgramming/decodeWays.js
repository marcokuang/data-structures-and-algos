/**
 * Leetcode 91.
 * https://leetcode.com/problems/decode-ways/
 *
 * @param {string} s
 * @returns
 */
var numDecodings = function (s) {
  if (s[0] === "0") {
    return 0;
  }

  let dp = new Array(s.length + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < dp.length; i++) {
    // if previous letter is a leading zero.
    if (s[i - 1] === "0") {
      if (s[i - 2] === "1" || s[i - 2] === "2") {
        dp[i] = dp[i - 2];
      }
      // if no valid letter before the leading zero, therefore it fails to decode
      else {
        return 0;
      }
    } else {
      // if the chosen letters are having 2 possible ways of decoding
      if (
        parseInt(s[i - 2] + s[i - 1]) > 10 &&
        parseInt(s[i - 2] + s[i - 1]) <= 26
      ) {
        dp[i] = dp[i - 1] + dp[i - 2];
      } else {
        dp[i] = dp[i - 1];
      }
    }
  }

  return dp[s.length];
};

const memoDecode = (s) => {
  let memo = new Map();

  return dp2(0, s, memo);
};

const dp = (index, s, memo) => {
  if (memo.has(index)) {
    return memo.get(index);
  }

  if (index === s.length) {
    return 1;
  }

  if (s.charAt(index) === "0") {
    return 0;
  }

  if (index === s.length - 1) {
    return 1;
  }

  let ans = dp(index + 1, s, memo);

  if (parseInt(s.slice(index, index + 2)) <= 26) {
    ans += dp(index + 2, s, memo);
  }

  memo.set(index, ans);

  return ans;
};

const dp2 = (index, s, memo) => {
  if (index >= s.length - 1) {
    return 1;
  }

  if (memo.has(index)) {
    return memo.get(index);
  }

  if (s[index] === "0") {
    return 0;
  }

  let ans = dp(index + 1, s, memo);
  if (
    parseInt(s.slice(index, index + 2)) <= 26 &&
    parseInt(s.slice(index, index + 2)) >= 10
  ) {
    ans += dp(index + 2, s, memo);
  }

  memo.set(index, ans);
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let n = s.length;
  let arr = new Array(n).fill(0).map((_) => new Array(n));
  return count(s, 0, s.length - 1, arr);
};

let count = function (s, l, r, arr) {
  if (s.charAt(l) == "0") return 0;
  if (l >= r) return 1;
  if (arr[l][r] != undefined) return arr[l][r];

  let c = count(s, l + 1, r, arr);
  if (s.slice(l, l + 2) <= 26) {
    c += count(s, l + 2, r, arr);
  }
  arr[l][r] = c;
  return c;
};

let string = "0";
console.log(memoDecode(string));
