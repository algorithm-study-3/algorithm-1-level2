const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
let numbers = input[1].split(' ').map(Number);
let operators = input[2].split(' ').map(Number);

let max = -Infinity;
let min = Infinity;

function dfs(depth, current) {
  if (depth === N) {
    max = Math.max(max, current);
    min = Math.min(min, current);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) {
      operators[i]--;

      let next;
      if (i === 0) next = current + numbers[depth];
      else if (i === 1) next = current - numbers[depth];
      else if (i === 2) next = current * numbers[depth];
      else {
        const num = numbers[depth];
        if (num === 0) {
          operators[i]++;
          continue;
        }
        if (current < 0) {
          next = -Math.floor(Math.abs(current) / num);
        } else {
          next = Math.floor(current / num);
        }
      }

      dfs(depth + 1, next);
      operators[i]++;
    }
  }
}

dfs(1, numbers[0]);

console.log(max);
console.log(min);
