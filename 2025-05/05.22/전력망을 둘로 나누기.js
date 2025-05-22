function solution(n, wires) {
  function buildGraph(n, wires, excludeIndex) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < wires.length; i++) {
      if (i === excludeIndex) continue;
      const [v1, v2] = wires[i];
      graph[v1].push(v2);
      graph[v2].push(v1);
    }

    return graph;
  }

  function dfs(graph, start, visited) {
    visited[start] = true;
    let count = 1;

    for (const neighbor of graph[start]) {
      if (!visited[neighbor]) {
        count += dfs(graph, neighbor, visited);
      }
    }

    return count;
  }

  let minDiff = n;

  for (let i = 0; i < wires.length; i++) {
    const graph = buildGraph(n, wires, i);
    const visited = Array(n + 1).fill(false);

    const component1Size = dfs(graph, 1, visited);
    const component2Size = n - component1Size;

    const diff = Math.abs(component1Size - component2Size);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}
