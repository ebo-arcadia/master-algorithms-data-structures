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
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(vertex) {
    for (let c = 0; c < this.adjacencyList.length; c++) {
      while (this.adjacencyList[c].includes(vertex)) {
        this.removeEdge(c, vertex);
      }
      this.adjacencyList[c] = this.adjacencyList[c].filter(
        key => key !== vertex
      );
    }
  }
}

let graph = new Graph();
graph.addVertex('UK');
graph.addVertex('Mexico');
graph.addVertex('Iceland');
graph.addEdge('UK', 'Mexico');
graph.addEdge('UK', 'Berlin');
graph.removeVertex('Iceland');
console.log(graph);
