/**
 * Leetcode 212
 * @param {string[][]} board
 * @param {string[]} words
 */

function boggleBoard(board, words) {
  // Write your code here.
  // construct prefix tries for the individual word in words array
  let res = new Set();
  let trie = new Trie();
  let wordSet = new Set();
  // let maxWordLength = 0;
  for (let word of words) {
    trie.insert(word);
    wordSet.add(word);
    // maxWordLength = Math.max(word.length, maxWordLength);
  }

  let row = board.length;
  let col = board[0].length;
  // let visit = new Array(row);
  // for (let i = 0; i < visit.length; i++) {
  //   visit[i] = new Array(col).fill(false);
  // }
  let visit = board.map((col) => new Array(col.length).fill(false));

  const dfs = (substring, i, j) => {
    //stop dfs if the current cursor with prior char selections cannot make up a substring of any word in words
    if (
      !trie.contains(substring) ||
      i < 0 ||
      i >= row ||
      j < 0 ||
      j >= col ||
      visit[i][j]
    ) {
      return;
    }

    // start the backtracking procedure
    substring += board[i][j];
    // mark the current character with index (i, j) as visited
    visit[i][j] = true;
    if (wordSet.has(substring)) {
      res.add(substring);
    }

    dfs(substring, i + 1, j);
    dfs(substring, i, j + 1);

    dfs(substring, i - 1, j);
    dfs(substring, i, j - 1);

    dfs(substring, i - 1, j - 1);
    dfs(substring, i + 1, j - 1);

    dfs(substring, i - 1, j + 1);
    dfs(substring, i + 1, j + 1);

    // revert the selection
    visit[i][j] = false;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      dfs("", i, j);
    }
  }
  //dfs("", 7, 0);

  return Array.from(res);
}

class Trie {
  constructor() {
    this.root = new Map();
    this.endSymbol = "*";
  }

  insert = (word) => {
    let trie = this.root;
    for (let c of word) {
      if (!trie.get(c)) {
        trie.set(c, new Map());
      }
      trie = trie.get(c);
      trie.endSymbol = "";
    }
    trie.endSymbol = "*";
  };

  contains = (word) => {
    let current = this.root;
    for (let c of word) {
      current = current.get(c);
      if (!current) {
        return false;
      }
    }
    return true;
  };
}

let word1 = "abcd";
let word2 = "";

let myTrie = new Trie();
myTrie.insert(word1);
//console.log(myTrie.root);
console.log(myTrie.contains(word2));

let board = [
  ["t", "h", "i", "s", "i", "s", "a"],
  ["s", "i", "m", "p", "l", "e", "x"],
  ["b", "x", "x", "x", "x", "e", "b"],
  ["x", "o", "g", "g", "l", "x", "o"],
  ["x", "x", "x", "D", "T", "r", "a"],
  ["R", "E", "P", "E", "A", "d", "x"],
  ["x", "x", "x", "x", "x", "x", "x"],
  ["N", "O", "T", "R", "E", "-", "P"],
  ["x", "x", "D", "E", "T", "A", "E"],
];
let words = [
  "this",
  "is",
  "not",
  "a",
  "simple",
  "boggle",
  "board",
  "test",
  "REPEATED",
  "NOTRE-PEATED",
];

console.log(boggleBoard(board, words));
