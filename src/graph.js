class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let vertexEdge = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, vertexEdge);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstTraverse(vertex) {
    let traversedGraph = this;
    let visitedVertex = {};

    function helper(vertex) {
      if (!vertex) return undefined;

      visitedVertex[vertex] = true;
      traversedGraph.push(vertex);
    }

    if (!visitedVertex.includes(vertex)) {
      helper(vertex);
    }

    return traversedGraph;
  }
}

let graph = new Graph();
graph.addVertex('UK');
graph.addVertex('Mexico');
graph.addVertex('Iceland');
graph.addEdge('UK', 'Mexico');
graph.addEdge('UK', 'Berlin');
graph.addEdge('UK', 'Bali');
graph.addEdge('Mexico', 'San Jose');
graph.removeVertex('Mexico');
console.log(graph);
graph.depthFirstTraverse();
