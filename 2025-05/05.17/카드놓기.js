const input = require('fs').readFileSync('dev/stdin').toString().trim();

const [N, K, ...numbers] = input.split("\n").map(Number);

const result = new Set();
const visited = new Array(N).fill(false);

const dfs = (depth, composed) => {
  if (depth === K) {
    result.add(composed);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(depth + 1, composed + numbers[i].toString());
      visited[i] = false;
    }
  }
};

dfs(0, "");

console.log(result.size);