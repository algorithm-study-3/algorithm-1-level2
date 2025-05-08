let [n, arr, operators] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = +n;
arr = arr.split(' ').map(Number);
// +, -, x, /
operators = operators.split(' ').map(Number);

let max = -1_000_000_000;
let min = 1_000_000_000;

function dfs(count = 0, calcResult = arr[0]) {
  if (count === n - 1) {
    max = Math.max(max, calcResult);
    min = Math.min(min, calcResult);
  }
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === 0) continue;

    operators[i]--;
    dfs(count + 1, calculator(calcResult, arr[count + 1], i));
    operators[i]++;
  }
}

dfs();
console.log(max ? max : 0);
console.log(min ? min : 0);

function calculator(num1, num2, operator) {
  if (operator === 0) {
    return num1 + num2;
  }
  if (operator === 1) {
    return num1 - num2;
  }
  if (operator === 2) {
    return num1 * num2;
  }
  if (operator === 3) {
    if (num1 < 0) {
      return -Math.floor(Math.abs(num1) / num2);
    }
    return Math.floor(num1 / num2);
  }
}
