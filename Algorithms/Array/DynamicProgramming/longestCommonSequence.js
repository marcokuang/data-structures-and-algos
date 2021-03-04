function longestCommonSubsequence(str1, str2) {
  // Write your code here.
  let dp = new Array(str1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(str2.length + 1).fill(0);
  }

  let sequence = [];
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = str1.length;
  let j = str2.length;
  while (i > 0 && j > 0) {
    if (dp[i][j - 1] === dp[i][j]) {
      j--;
    } else if (dp[i - 1][j] === dp[i][j]) {
      i--;
    } else {
      sequence.unshift(str2.charAt(j - 1));
      i--;
      j--;
    }
  }

  return sequence;
}

let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let str2 = "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAG";

console.log(longestCommonSubsequence(str1, str2));
