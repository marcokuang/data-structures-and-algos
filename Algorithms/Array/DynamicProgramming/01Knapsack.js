function knapsackProblem(items, capacity) {
  // Write your code here.
  // Replace return below.
  let dp = new Array(items.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(capacity + 1).fill(0);
  }

  for (let i = 1; i < dp.length; i++) {
    let cValue = items[i - 1][0];
    let cWeight = items[i - 1][1];

    for (let j = 1; j < dp[0].length; j++) {
      // diff is the difference between current weight and the capacity j
      let diff = cWeight - j;
      // if the current weight is smaller than or equal to the capacity j

      /*
      dp[i][w] 表示：对于前 i 个物品，当前背包的容量为 w 时，这种情况下可以装下的最大价值是 dp[i][w]。

      如果你没有把这第 i 个物品装入背包，那么很显然，最大价值 dp[i][w] 应该等于 dp[i-1][w]，继承之前的结果。

      如果你把这第 i 个物品装入了背包，那么 dp[i][w] 应该等于 dp[i-1][w - wt[i-1]] + val[i-1]。

      首先，由于 i 是从 1 开始的，所以 val 和 wt 的索引是 i-1 时表示第 i 个物品的价值和重量。

      而 dp[i-1][w - wt[i-1]] 也很好理解：
      
      你如果装了第 i 个物品，就要寻求剩余重量 w - wt[i-1] 限制下的最大价值，加上第 i 个物品的价值 val[i-1]。
      */
      if (diff <= 0) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - cWeight] + cValue);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  let track = dp[items.length];
  let res = [];
  let valueSoFar = dp[items.length][capacity];
  let index = items.length - 1;
  while (index >= 1) {
    if (track[index] === track[index - 1]) {
    } else {
      //valueSoFar = track[index - 1];
      res.push(items[index]);
    }
    index--;
  }

  return [dp[items.length][capacity], [...res]];
}
