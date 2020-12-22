function levenshteinDistance(str1, str2) {
  // Write your code here.
  let columns = str1;
  let rows = str2;

  let dp = new Array(rows.length + 1);
  for (let row = 0; row < dp.length; row++) {
    let tempArray = [];
    if (row === 0) {
      for (let i = 0; i < columns.length + 1; i++) {
        tempArray.push(i);
      }
    } else {
      tempArray = new Array(columns.length + 1).fill(0);
      tempArray[0] = row;
    }

    dp[row] = tempArray;
  }

  if (columns.length === 0 || rows.length === 0) {
    if (!columns.length) {
      return rows.length;
    } else {
      return columns.length;
    }
  }

  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[0].length; col++) {
      if (rows[row - 1] === columns[col - 1]) {
        dp[row][col] = dp[row - 1][col - 1];
      } else {
        dp[row][col] =
          1 +
          Math.min(dp[row - 1][col - 1], dp[row - 1][col], dp[row][col - 1]);
      }
    }
  }

  console.log(dp[str2.length][str1.length]);
}

console.log(levenshteinDistance("abc", ""));
