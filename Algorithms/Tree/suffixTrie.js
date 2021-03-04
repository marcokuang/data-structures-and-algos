class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // Write your code here.
    let root = this.root;
    for (let i = 0; i < string.length; i++) {
      // push the new node to the current node;
      if (!root[string[i]]) {
        root[string[i]] = {};
      }
      // insert the substring from i+1 to the root[string[i]] node;
      let j = i + 1;
      let childNode = root[string[i]];
      while (j < string.length) {
        if (!childNode[string[j]]) {
          childNode[string[j]] = {};
        }
        childNode = childNode[string[j]];
        j++;
      }
      childNode.endSymbol = "*";

      if (this.endSymbol) {
        this.endSymbol = "";
      }
    }
  }

  contains(string) {
    // Write your code here.
    let root = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!root[string[i]]) {
        return false;
      }
      root = root[string[i]];
    }
    return true;
  }
}

let trie = new SuffixTrie("babc");
console.log(trie.contains("cc"));
