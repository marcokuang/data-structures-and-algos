/**
 * Leetcode 291
 */

let wordPatternMatch = (pattern, string) => {
  let dict = new Map();
  let used = new Set();

  return match(pattern, string, dict, used);
};

let match = (pattern, str, dict, used) => {
  // if the pattern string is fully consumed
  if (pattern.length === 0) {
    return str.length === 0;
  }

  let currentPattern = pattern.charAt(0);

  // the pattern has been match before
  if (dict.has(currentPattern)) {
    let word = dict.get(currentPattern);
    // try to match the current word with the remainding substring
    // if the prefix of the remaining substring cannot match, return false
    if (!str.startsWith(word)) {
      return false;
    }

    return match(pattern.substring(1), str.substring(word.length), dict, used);
  }

  for (let i = 0; i < str.length; i++) {
    let word = str.substring(0, i + 1);
    if (used.has(word)) {
      continue;
    }

    dict.set(currentPattern, word);
    used.add(word);

    if (match(pattern.substring(1), str.substring(i + 1), dict, used)) {
      return true;
    }

    dict.delete(currentPattern);
    used.delete(word);
  }
  return false;
};

console.log(wordPatternMatch("aaaa", "asdasdasdasd"));
