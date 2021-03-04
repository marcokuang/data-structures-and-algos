function interweavingStrings(one, two, three) {
  // Write your code here.

  let dp = new Array(one.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(two.length + 1).fill(false);
  }

  // dp[i][j] = the first i-th char of one and first j-th char of two is valid to form first (i + j) chars of three
  // set up initial conditions
  dp[0][0] = true;
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = dp[i - 1][0] && one[i - 1] === three[i - 1];
  }
  for (let j = 1; j < dp[0].length; j++) {
    dp[0][j] = dp[0][j - 1] && two[j - 1] === three[j - 1];
  }

  // state transition:
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      // the current state depends on:
      // condition 1: if (i - 1) char of one can make up [i + j - 1] char of three, and the current char of one
      // 		matches with the current char of three
      // condition 2: if j - 1 char of two can make up [i+j-1] char of three and current char of two matches
      // 		with the current char of three
      dp[i][j] =
        (dp[i - 1][j] && one[i - 1] === three[i + j - 1]) ||
        (dp[i][j - 1] && two[j - 1] === three[i + j - 1]);
    }
  }
  return dp[one.length][two.length];
}

let one = "abc";
let two = "def";
let three = "abcdef";
console.log(interweavingStrings(one, two, three));
