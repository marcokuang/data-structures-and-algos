function longestPalindromicSubstring(string) {
  // Write your code here.
  let maxSubstringLength = 0;
  let maxSubstring = [0, 0];
  let dp = new Array(string.length);

  // initialize the array;
  for (let i = 0; i < string.length; i++) {
    dp[i] = new Array(string.length);
  }
  // dp[i][j] stands for substring [i - j] is palindrome or not
  // dp[i][j] depends on character string[j] === string[i], and it's inner substring dp[i+1][j-1]
  // boundry condition: l + 1 should be always smaller than r - 1 => (l+1) < (r-1)
  //  => r - l > 2
  // base case when we do not need to consider dp[l+1][r-1]: we check the boundry condition of r - l <= 2 and s[l] === s[r]
  // base case 1 - when the length of substring is 1: dp[l][l] will always be True
  // base case 2 - when the length of substring is 2: dp[l][l+1] = string[l] === string[l+1]
  for (let len = 0; len < string.length; len++) {
    // looping from start and checking the substring length from 1:
    for (let l = 0; l + len < string.length; l++) {
      // let right index R be l + len;
      let r = len + l;
      // l = r, substring length is 1
      if (len === 0) {
        dp[l][r] = true;
      }
      // l + 1 = r, substring length is 2;
      else if (len === 1) {
        dp[l][r] = string[l] === string[r];
      }
      // substring length is greater than 3
      else {
        dp[l][r] = dp[l + 1][r - 1] && string[l] === string[r];
      }

      // find the max length
      if (dp[l][r] && len + 1 > maxSubstringLength) {
        maxSubstringLength = len + 1;
        maxSubstring[0] = l;
        maxSubstring[1] = r;
      }
    }
  }

  return string.slice(maxSubstring[0], maxSubstring[1] + 1);
}

var longestPalindrome2 = function (s) {
  let len = s.length;
  let maxlen = 0;
  let maxstr = "";
  let dp = [];
  for (let j = 0; j < len; j++) {
    dp[j] = [];
    for (let i = 0; i <= j; i++) {
      if (i == j) dp[i][j] = true;
      else if (j - i == 1) {
        dp[i][j] = s[i] == s[j];
      } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
      }
      if (dp[i][j] && j - i + 1 > maxlen) {
        maxlen = j - i + 1;
        maxstr = s.slice(i, j + 1);
      }
    }
  }

  return maxstr;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome3 = function (s) {
  /* 暴力 */
  /* 
  if(s.length < 2) return s
  let maxStr = ''
  for(let i = 0; i < s.length - 1; i++ ) {
      for(let j = i + 1; j <= s.length; j++ ) {
          let nowStr = s.slice(i, j)
          if(nowStr === nowStr.split('').reverse().join('')){
              maxStr = maxStr.length >= nowStr.length? maxStr: nowStr
          }
      }
  }
  return maxStr 
  */

  /* 动态规划 */
  /*  填表, 先填小的, 大的回文参照小的，最后从小递推出大直至所有
      状态: j ~ i  闭区间  代表是否回文
      状态转移方程: i j相等 且 区间内为回文 则为回文; i - 1 - (j + 1) + 1 < 2 为回文 => i - j < 3
      初始值: 单个字符为回文  状态转移方程用不到 可以不设
      输出: 标记最长的i j, 最后在截取
   */
  const status = [];
  const length = s.length;
  let right = 0;
  let left = 0;
  for (let i = 0; i < length; i++) {
    const col = [];
    for (let j = 0; j < i; j++) {
      const state = s[i] === s[j] && (i - j < 3 || status[i - 1][j + 1]);
      col.push(state);
      if (state && right - left < i - j) {
        right = i;
        left = j;
      }
    }
    status.push(col);
  }
  return s.slice(left, right + 1);
};

let string = "aacabdkacaa";
console.log(longestPalindromicSubstring(string));
