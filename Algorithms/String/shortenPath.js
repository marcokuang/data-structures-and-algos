function shortenPath(path) {
  // Write your code here.
  let result = [];
  let tokens = path.split("/");
  tokens = tokens.filter((token) => token !== "" && token !== ".");
  console.log(tokens);

  // initial setup when the start of the path inclues a root path
  let startWithSlash = path[0] === "/";
  if (startWithSlash) {
    // it will add a / to the result string
    result.push("");
  }

  tokens.forEach((token) => {
    if (token !== "..") {
      result.push(token);
    }
    // if ".." is detected
    // case 1: ignore .. when it's followed by root path "/", or the
    // 		result stack is empty;
    // case 2: push .. when path does NOT begin with root path
    else {
      if (result[result.length - 1] === "") {
        // return
        return;
      }

      if (result.length && result[result.length - 1] !== "..") {
        result.pop();
        return;
      }

      result.push(token);
    }
  });

  //let start = "/";
  return result.join("/");
}

let string = "/foo/../test/../test/../foo//bar/./baz";
let string2 = "/";
console.log(shortenPath(string2));
