function hasSingleCycle(array) {
  // Write your code here.

  for (let i = 0; i < array.length; i++) {
    let pointer = i;
    let visited = new Array(array.length).fill(false);
    visited[pointer] = true;
    for (let j = 0; j < array.length; j++) {
      let move = array[pointer];
      pointer += move;
      pointer %= array.length;
      if (pointer < 0) {
        pointer = pointer + array.length;
      }

      if (visited[pointer]) {
        break;
      } else {
        visited[pointer] = true;
      }
    }

    if (i === pointer) {
      let visitedCounts = visited.reduce((accu, val) => {
        if (val) {
          return accu + 1;
        } else {
          return accu;
        }
      }, 0);

      if (visitedCounts === array.length) {
        return true;
      }
    }
  }

  return false;
}

function hasSingleCycle2(array) {
  // Write your code here.
  let START_INDEX = 1;
  let visitedCounts = 0;
  let currentIndex = START_INDEX;

  while (visitedCounts < array.length) {
    if (visitedCounts > 0 && currentIndex === START_INDEX) {
      return false;
    }
    visitedCounts++;
    currentIndex = getNextIndex(currentIndex, array);
  }

  return currentIndex === START_INDEX;
}

function getNextIndex(index, array) {
  let next = array[index] + index;
  next %= array.length;

  if (next < 0) {
    return next + array.length;
  } else {
    return next;
  }
}

let array = [1, 1, 1, -1];
console.log(hasSingleCycle2(array));
