let [nm, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +nm.split(' ')[0];
const m = +nm.split(' ')[1];
arr = arr.split(' ').map(Number);
arr.sort((a, b) => a - b);

const isVisit = new Array(n).fill(false);
const newArr = [];

function dfs() {
  if (newArr.length === m) {
    console.log(newArr.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!isVisit[i]) {
      isVisit[i] = true;
      newArr.push(arr[i]);
      dfs();
      isVisit[i] = false;
      newArr.pop();
    }
  }
}

dfs();
