const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const n = input[0];
const arr = input.slice(1);

let max = 0;
const visited = Array(n).fill(false);
const perm = Array(n);

function dfs(depth) {
  if (depth === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) sum += Math.abs(perm[i] - perm[i + 1]);
    if (sum > max) max = sum;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      perm[depth] = arr[i];
      dfs(depth + 1);
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(max);
