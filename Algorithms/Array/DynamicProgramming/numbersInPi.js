function numbersInPi(pi, numbers) {
  // Write your code here.
  let hashmap = new Map();
  for (let num of numbers) {
    hashmap.set(num, true);
  }

  let memo = new Map();

  let ans = helper(memo, hashmap, pi, 0);

  return ans === Infinity ? -1 : ans;
}

function helper(memo, map, pi, left) {
  // base case, if the prefix to the left index is the length of pi,
  // it will be always -1
  // e.g. pi = '3', numbers = ['3'];
  // when left is 1, and pi.length = 1, it's not allows to add space at the to the left of 1
  if (left === pi.length) {
    return -1;
  }

  if (memo.get(left)) {
    return memo.get(left);
  }

  let min = Infinity;
  for (let i = left; i < pi.length; i++) {
    let prefix = pi.slice(left, i + 1);
    if (map.get(prefix)) {
      let nextMin = helper(memo, map, pi, i + 1);
      min = Math.min(min, nextMin + 1);
    }
  }

  memo.set(left, min);
  return memo.get(left);
}
let pi = "312";
let numbers = ["31", "0"];
console.log(numbersInPi(pi, numbers));
