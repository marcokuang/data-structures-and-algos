function balancedBrackets(string) {
  // Write your code here.
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) === "(" ||
      string.charAt(i) === "[" ||
      string.charAt(i) === "{"
    ) {
      stack.push(string.charAt(i));
    } else {
      if (!stack.length) {
        return false;
      }

      if (string.charAt(i) === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          return false;
        }
      } else if (string.charAt(i) === "]") {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          return false;
        }
      } else if (string.charAt(i) === "}") {
        if (stack[stack.length - 1] === "{") {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
}

let string = "{}gawgw()";
console.log(balancedBrackets(string));
