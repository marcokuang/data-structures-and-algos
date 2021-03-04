/**
 * build a graph containing job nodes with dependancy list
 */

class JobGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (let job of jobs) {
      this.addNode(job);
    }
  }

  /**
   * Add prereq to the job node.
   * First, find the current job node in graph
   * Second, find the prereq job node in graph
   * Finally add the prereq job node to the current job node's prereq list
   *
   * @param {string} job - the current job
   * @param {string} prereq - new dependency
   */
  addPrereq = (job, prereq) => {
    let jobNode = this.getNode(job);
    let prereqNode = this.getNode(prereq);
    jobNode.prereq.push(prereqNode);
  };

  /**
   * Add a new node to the job graph
   * @param {string} job
   */
  addNode = (job) => {
    this.graph[job] = new JobNode(job);
    this.nodes.push(this.graph[job]);
  };

  /**
   * Get the corresponding node of the current job and return
   * @param {string} job - the current job
   * @eturns - a jobNode or null if not found
   */
  getNode = (job) => {
    if (!(job in this.graph)) {
      this.addNode(job);
    }
    return this.graph[job];
  };
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.prereq = [];
    this.visited = false;
    this.visiting = false;
  }
}

/**
 * Generate a job graph using informations in the jobs array and the dependancy array of each job
 * @param {[]} jobs - list of jobs to complete, [...]
 * @param {[]} deps - list of job dependancy lists, [[], [], ...]
 */
const createJobGraph = (jobs, deps) => {
  let graph = new JobGraph(jobs);

  for (let [prereq, job] of deps) {
    graph.addPrereq(job, prereq);
  }

  return graph;
};

/**
 * Helper method to traverse every node in the job graph to generate the ordered list of jobs
 * Note: it will be using DFS
 * @param {jobGraph} graph - the job graph generated from the jobs and deps array
 * @returns
 */
const getOrderedJobs = (graph) => {
  let orderredJobs = [];
  let nodes = graph.nodes;
  while (nodes.length) {
    let node = nodes.pop();
    let containsCycle = DFS(node, orderredJobs);
    // if a cycle is detected, there is no topological order of the jobs
    if (containsCycle) return [];
  }
  return orderredJobs;
};

/**
 * DFS traverse method
 * @param {JobNode} node - current visiting node
 * @param {[]} output - the ordered list of jobs containing the visited nodes so far
 * @returns True if a cycle is detected, False if the graph is acyclic and nodes are vistied
 */
const DFS = (node, output) => {
  if (node.visited) {
    return false;
  }
  if (node.visiting) {
    return true;
  }
  node.visiting = true;
  // Traverse the prereq nodes of the current node and find if there is a cycle
  for (let prereqNode of node.prereq) {
    let containsCycle = DFS(prereqNode, output);
    if (containsCycle) {
      return true;
    }
  }
  node.visited = true;
  node.visiting = false;
  output.push(node.job);
  return false;
};

/**
 * The driver of the topological sort
 * It first generates a job graph using the given jobs, and deps
 * Then call the helper method getOrderedJobs to return the output list
 *
 * @param {[]} jobs
 * @param {[]} deps
 * @returns an array of orderred jobs
 */
function topologicalSort(jobs, deps) {
  let jobGraph = createJobGraph(jobs, deps);
  console.log(jobGraph);
  return getOrderedJobs(jobGraph);
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
