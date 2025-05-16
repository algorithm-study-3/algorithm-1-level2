let [n, arr] = require('fs').readFileSync('input.txt').toString().split('\n');

n = parseInt(n);
arr = arr.split(' ').map(Number);

let answer = 0;
const visit = new Array(n).fill(false);
const newArr = [];

function calcArr(arr) {
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    result += Math.abs(arr[i] - arr[i + 1]);
  }
  return result;
}

function dfs(depth) {
  if (depth === n) {
    answer = Math.max(answer, calcArr(newArr));
  }
  for (let j = 0; j < n; j++) {
    if (visit[j]) continue;
    visit[j] = true;
    newArr.push(arr[j]);
    dfs(depth + 1);
    visit[j] = false;
    newArr.pop(arr[j]);
  }
}

dfs(0);
console.log(answer);
