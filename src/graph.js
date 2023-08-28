const {visit} = require('graphql');

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

  depthFirstTraverseRecursively(head) {
    let result = [];
    let visitedVertex = {};
    let adjacencyList = this.adjacencyList;

    (function helper(vertex) {
      if (!vertex) return null;

      visitedVertex[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visitedVertex[neighbor]) {
          return helper(neighbor);
        }
      });
    })(head);

    return result;
  }

  depthFirstTraverseIteratively(start) {
    let stack = new Array();
    let result = [];
    let visited = {};

    stack.push(start);
    visited[start] = true;

    while (stack.length !== 0) {
      let neighbor = stack.pop();
      if (neighbor && !visited[neighbor]) {
        visited[neighbor] = true;
        result.push(neighbor);
        stack.push(stack);
      }
    }

    return result;
  }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.depthFirstTraverseIteratively('A'));
