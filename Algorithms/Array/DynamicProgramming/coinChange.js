var coinChange = function (coins, amount) {
  if (!coins || coins.length === 0) {
    return -1;
  }

  let coinMemo = new Array(amount + 1).fill(amount + 1);

  //initialized coin array with value of 1 + amount
  // index number represents the number of dollars
  coinMemo[0] = 0;

  for (let i = 1; i < coinMemo.length; i++) {
    let currentAmount = i;

    for (let j = 0; j < coins.length; j++) {
      //set the boundry conditions for the coinMemo array lookup
      if (
        coins[j] <= currentAmount &&
        coinMemo[currentAmount - coins[j]] !== amount + 1
      ) {
        coinMemo[i] = Math.min(
          coinMemo[i],
          coinMemo[currentAmount - coins[j]] + 1
        );
      }
    }
  }

  if (coinMemo[amount] === amount + 1) {
    return -1;
  }

  return coinMemo[amount];
};

function coinChange2(coins, amount) {
  if (!coins || coins.length === 0) {
    return -1;
  }

  let coinMemo = new Array(amount + 1).fill(Infinity);
  coinMemo[0] = 0;

  for (let coin of coins) {
    for (let i = 1; i < coinMemo.length; i++) {
      if (coin <= i) {
        coinMemo[i] = Math.min(coinMemo[i], 1 + coinMemo[i - coin]);
      }
    }
  }

  coinMemo[amount] === Infinity ? (coinMemo[amount] = -1) : null;
  return coinMemo[amount];
}

let array = [1, 2, 5];
console.log(coinChange2(array, 3));
