function replaceSpace(string) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      newStr += "%20";
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}

console.log(replaceSpace("A B"));
