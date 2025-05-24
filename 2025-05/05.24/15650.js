const [n, m] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = new Array(n).fill(false);
const newArr = [];

function dfs(start = 1) {
  if (newArr.length === m) {
    console.log(newArr.join(' '));
  }
  for (let i = start; i <= n; i++) {
    if (visited[i]) continue;
    if (newArr.length > m) break;
    visited[i] = true;
    newArr.push(i);
    dfs(i);
    visited[i] = false;
    newArr.pop();
  }
}

dfs();
