/**
 * basic fibonacci solution - iterative brute force
 * @param {number} - nth number
 * @returns {number} - fibonacci number
 */

function fib(num) {
  if (num <= 1) {
    return num;
  }

  let fib = [0];
  fib[1] = 1;
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[num];
}

/**
 * optimize 1 - iterative
 * @param {number} num
 */
function fib1(num) {
  if (num <= 1) {
    return num;
  }

  let pre1 = 1;
  let pre2 = 0;
  let res = 0;

  for (let i = 2; i <= num; i++) {
    res = pre1 + pre2;
    pre2 = pre1;
    pre1 = res;
  }

  return res;
}

console.log(fib1(9));
