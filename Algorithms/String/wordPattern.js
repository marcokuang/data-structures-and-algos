/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let map1 = new Map();
  let map2 = new Map();
  let string = s.split(" ");
  for (let i = 0; i < pattern.length; i++) {
    let position1 = map1.get(pattern[i]);
    let position2 = map2.get(string[i]);

    if (position1 !== position2) {
      return false;
    }

    map1.set(pattern[i], i);
    map2.set(string[i], i);
  }
  return true;
};

console.log(wordPattern("aba", "dog cat cat"));
