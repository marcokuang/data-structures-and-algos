function waysOfMakeChange(n, denoms) {
  // the ways array is to store number of ways to make change for number n using the denomination array[1, 5, 10, 20]
  // for example: ways[10] will store 'x' number of ways to make change for 10 dollars
  let ways = new Array(n + 1).fill(0);
  // first element is the base case when n = 0;
  ways[0] = 1;

  for (let denom of denoms) {
    // test the denomination against number 1...n, which represents the amount of money
    // for Dynamic Programming, the ways array represents the states of the smaller subproblems.
    //     -> if we reach ways[n] that contains the answer we need for number n
    for (let i = 1; i < ways.length; i++) {
      // when the demon is less than the given amount of dollars, it looks at the subproblem of ways[i - denom] e.g. ways[i - 5]
      //
      if (denom <= i) {
        // update the state of the current ways
        ways[i] = ways[i] + ways[i - denom];
      }
    }
  }

  // note: if the two for loops are flipped, means the outter loop is the ways length, then the output is to find the number of
  //      "combinations" of making change. -> this would double count the ways of make change.
  //       example: first pick coin A1 then An is counted in the result; and the way of first pick An then A1 is also counted
  return ways[n];
}
