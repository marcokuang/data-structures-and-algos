function dijkstrasAlgorithm(start, edges) {
  // Write your code here.
  // set up the initial lists
  let visited = new Array(edges.length).fill(false);
  let distance = new Array(edges.length);
  for (let i = 0; i < distance.length; i++) {
    if (start === i) {
      distance[i] = 0;
    } else {
      distance[i] = Infinity;
    }
  }

  while (true) {
    let selected = selectVertex(distance, visited);
    if (selected === -1) {
      break;
    }

    let currentEdges = edges[selected];
    let currentDistance = distance[selected];
    for (let i = 0; i < currentEdges.length; i++) {
      let nextVertex = currentEdges[i][0];
      let nextDis = currentEdges[i][1];
      let newDis = currentDistance + nextDis;
      if (newDis < distance[nextVertex]) {
        distance[nextVertex] = newDis;
      }
    }
    // end of searching edges
    visited[selected] = true;
  }

  return distance;
}

function selectVertex(distance, visited) {
  let res = -1;
  let smallest = Infinity;
  for (let i = 0; i < distance.length; i++) {
    if (!visited[i]) {
      if (distance[i] <= smallest) {
        smallest = distance[i];
        res = i;
      }
    }
  }

  return res;
}

let start = 0;
let edges = [
  [[1, 7]],
  [
    [2, 6],
    [3, 20],
    [4, 3],
  ],
  [[3, 14]],
  [[4, 2]],
  [],
  [],
];
console.log(dijkstrasAlgorithm(start, edges));
