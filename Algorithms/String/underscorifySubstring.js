function underscorifySubstring(string, substring) {
  // Write your code here.
  // locations array holds all occurance of substr with [startIdx, endIdx] locations
  let locations = [];

  let start = 0;
  let end = 0;
  while (end < string.length) {
    let currentLen = end + 1 - start;
    if (substring.length === currentLen) {
      // if the current sliding window matches with the substring
      if (string.slice(start, end + 1) === substring) {
        // push the occurance to the locations array
        locations.push([start, end]);
      }

      start++;
    }
    end++;
  }

  if (locations.length === 0) {
    return string;
  }

  locations = processLocations(locations);
  let result = [];
  let next = 0;
  for (let i = 0; i < string.length; i++) {
    let nextLocation = null;
    next < locations.length
      ? (nextLocation = locations[next])
      : (nextLocation = string.length);
    if (i === nextLocation) {
      next++;
      result.push("_");
    }
    result.push(string[i]);
  }
  if (next < locations.length) {
    result.push("_");
  }
  return result.join("");
}

function processLocations(locations) {
  let i = 1;
  let newLocations = [locations[0]];
  let previous = newLocations[0];
  while (i < locations.length) {
    let current = locations[i];
    if (current[0] <= previous[1] + 1) {
      previous[1] = current[1];
    } else {
      newLocations.push(current);
      previous = current;
    }
    i++;
  }

  let flatArray = [];
  newLocations.forEach((location) => {
    flatArray.push(location[0]);
    flatArray.push(location[1] + 1);
  });
  return flatArray;
}

console.log(underscorifySubstring("ababa", "a"));
