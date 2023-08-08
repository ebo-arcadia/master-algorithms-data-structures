class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = vertex2;
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = vertex1;
    }
  }
}

let graph = new Graph();
graph.addVertex('UK');
graph.addVertex('Mexico');
graph.addVertex('Iceland');
graph.addEdge('UK', 'Mexico');
console.log(graph);
