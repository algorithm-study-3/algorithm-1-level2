const [n, m] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const arr = [];
const answer = [];
function dfs() {
  if (arr.length === m) {
    answer.push(arr.join(' '));
    return;
  }
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    dfs();
    arr.pop();
  }
}
dfs();
console.log(answer.join('\n'));
