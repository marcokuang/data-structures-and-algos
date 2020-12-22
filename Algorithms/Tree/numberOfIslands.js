/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || !grid.length) {
    return 0;
  }
  let rowSize = grid.length;
  let columnSize = grid[0].length;

  let count = 0;
  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < columnSize; j++) {
      if (grid[i][j] === "1") {
        ++count;
        dfs(grid, i, j, rowSize - 1, columnSize - 1);
      }
    }
  }

  return count;
};

/**
 * DFS search starts from one node, then flips all the neighboring nodes of 1 to 0 to avoid double counts
 *
 * @param {character[][]} grid - the island grid containing "0" which represents water and "1" which represents land
 * @param {number} row - current row index
 * @param {number} column - current column index
 * @param {number} maxRow - max row index
 * @param {number} maxColumn - max column index
 */
function dfs(grid, row, column, maxRow, maxColumn) {
  if (
    row > maxRow ||
    column > maxColumn ||
    row < 0 ||
    column < 0 ||
    grid[row][column] === "0"
  ) {
    return null;
  }

  // flipping the island from 1 to 0 -- present us to double count the visited index in the grid
  grid[row][column] = "0";

  // continues from the top neighbor
  dfs(grid, row - 1, column, maxRow, maxColumn);
  // continues from the right neighbor
  dfs(grid, row, column + 1, maxRow, maxColumn);
  // continues from the bottom neighbor
  dfs(grid, row + 1, column, maxRow, maxColumn);
  // continues from the left neighbor
  dfs(grid, row, column - 1, maxRow, maxColumn);
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));
