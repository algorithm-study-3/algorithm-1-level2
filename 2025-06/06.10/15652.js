const [n, m] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split(' ')
  .map(Number);

const arr = [];

function dfs(start) {
  if (arr.length === m) {
    console.log(arr.join(' '));
    return;
  }
  for (let i = start; i <= n; i++) {
    arr.push(i);
    dfs(i);
    arr.pop(i);
  }
}

dfs(1);
