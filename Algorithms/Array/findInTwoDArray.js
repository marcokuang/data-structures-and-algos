const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

function find(num, matrix) {
  let row = 0;
  let column = matrix[0].length - 1;
  let rows = matrix.length;
  let columns = matrix[0].length;

  // the search starts from the upper right corner (15), then works its way down the rows and columns
  while (row < rows && column >= 0) {
    // if the number is not found, shrink the row and column boundries
    if (num === matrix[row][column]) {
      return true;
    } else if (num < matrix[row][column]) {
      column--;
    } else {
      row++;
    }
  }
  return false;
}

console.log(find(0, matrix));
