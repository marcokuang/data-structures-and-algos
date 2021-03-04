/**
 * Leetcode 291
 * @param {*} pattern
 * @param {*} str
 */
var wordPatternMatch = function (pattern, str) {
  if (pattern.length == 0 && str.length == 0) return true;
  if (pattern.length == 0 || str.length == 0) return false;
  var map = new Map();
  var set = new Set();
  DFShelper(pattern, str, 0, 0, map, set);
  return Array.from(map.values());
};

function DFShelper(pattern, str, i, j, map, set) {
  if (i == pattern.length && j == str.length) return true;

  if (i >= pattern.length || j >= str.length) return false;

  var c = pattern.charAt(i);
  // if (map.has(c)) {
  //   let s = map.get(c);
  //   if (!str.startsWith(s, i)) {
  //     return false;
  //   }
  //   return DFShelper(pattern, str, i + 1, j + s.length, map, set);
  // }

  for (let k = j; k < str.length; k++) {
    var sub = str.substring(j, k + 1);

    if (!map.has(c) && !set.has(sub)) {
      map.set(c, sub);
      set.add(sub);
      if (DFShelper(pattern, str, i + 1, k + 1, map, set)) {
        return true;
      }
      map.delete(c);
      set.delete(sub);
    } else if (map.has(c) && map.get(c) == sub) {
      if (DFShelper(pattern, str, i + 1, k + 1, map, set)) return true;
    }
  }
  return false;
}
console.log(wordPatternMatch("xxyxxy", "gogopowerrangergogopowerranger"));
