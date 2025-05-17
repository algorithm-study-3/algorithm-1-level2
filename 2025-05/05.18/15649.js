const [n, m] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = new Array(n).fill(false);
const newArr = [];

function dfs(count = 0) {
  if (newArr.length === m) {
    console.log(newArr.join(' '));
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    if (newArr.length > m) break;
    visited[i] = true;
    newArr.push(i);
    dfs();
    visited[i] = false;
    newArr.pop();
  }
}

dfs();
