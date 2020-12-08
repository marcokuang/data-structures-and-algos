function productSum(array) {
  // Write your code here.
  let sum = 0;
  let arrayStack = [array];
  let levelStack = [1];
  let partSumStack = [];

  while (arrayStack.length) {
    let currentArray = arrayStack.pop();
    let currentLevel = levelStack.pop();
    let currentPartSum = 0;

    for (let i = 0; i < currentArray.length; i++) {
      // push the child array to the array Stack and calculate all numbers
      // at the current level first
      if (typeof currentArray[i] === "object") {
        if (Array.isArray(currentArray[i])) {
          arrayStack.push(currentArray[i]);
          levelStack.push(currentLevel + 1);
        } else {
          throw new Error("illegal data type");
        }
      } else {
        currentPartSum += currentArray[i] * currentLevel;
      }
    }
    partSumStack.push(currentPartSum);
  }

  return partSumStack.pop();
}

//let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
let array = [[[[[5]]], 2]];

console.log(productSum(array));
