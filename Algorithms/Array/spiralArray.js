function spiralTraverse(array) {
  // Write your code here.
  let colEnd = array[0].length - 1;
  let rowEnd = array.length - 1;

  let colStart = 0;
  let rowStart = 0;

  let output = [];

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // x coordinate increase
    for (let i = colStart; i <= colEnd; i++) {
      output.push(array[rowStart][i]);
    }

    // y coordinate increase
    for (let i = rowStart + 1; i <= rowEnd; i++) {
      output.push(array[i][colEnd]);
    }

    // x coordinate decrease
    for (let i = colEnd - 1; i >= colStart; i--) {
      if (colStart === colEnd) break;
      output.push(array[rowEnd][i]);
    }

    // y coordinate decrease;
    for (let i = rowEnd - 1; i > rowStart; i--) {
      if (rowStart === rowEnd) break;
      output.push(array[i][colStart]);
    }

    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }

  return output;
}

let array = [
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6],
];
console.log(spiralTraverse(array));
