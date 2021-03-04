function topologicalSort(jobs, deps) {
  let visit = new Map();
  // visit: 0: not yet visit, 1: visiting, 2: visited
  let graph = buildGraph(jobs, deps);
  let sortedJobs = [];

  for (let [job, prereqs] of graph) {
    let containCycles = DFS(job, graph, visit, sortedJobs);
    if (containCycles) {
      return [];
    }
  }

  return sortedJobs;
}

function buildGraph(jobs, deps) {
  let graph = new Map();
  // load the job nodes to the graph:
  // the graph's key is the job node, the value is the adjacent list of nodes, named "prereqs"
  for (let job of jobs) {
    graph.set(job, []);
  }

  // load the deps to the graph
  for (let dep of deps) {
    let job = dep[0];
    let depJob = dep[1];
    let newDep = graph.get(job);
    newDep.push(depJob);
    graph.set(job, newDep);
  }
  return graph;
}

/**
 * Helper method to travrse the graph to sort the jobs
 * @param {string} job - job node
 * @param {map} graph - graph representation of the jobs and prereqs
 * @param {[]} visit - visit status, a map having the key as the job node, and the value as the visit state
 * @param {[]} output - sorted list of job nodes
 * @returns true if the graph contains any cycle
 * @returns false if the graph is acyclic
 */
function DFS(job, graph, visit, output) {
  // if the job node is visited
  if (visit.get(job) == 2) {
    return false;
  }

  // if the job node is visiting, there is a cycle
  if (visit.get(job) === 1) {
    return true;
  }

  // update the status of the job to in progress
  visit.set(job, 1);

  // get the prereq nodes of the current job node and DFS the prereq
  let prereqs = graph.get(job);
  for (let prereq of prereqs) {
    let containsCycle = DFS(prereq, graph, visit, output);
    if (containsCycle) {
      return true;
    }
  }

  // finish visiting the job node
  visit.set(job, 2);

  // add the job to the head of the output list
  output.unshift(job);

  return false;
}

let jobs = [1, 2, 3, 4];
let deps = [
  [1, 2],
  [1, 3],
  [3, 2],
  [4, 2],
  [4, 3],
];
console.log(topologicalSort(jobs, deps));
