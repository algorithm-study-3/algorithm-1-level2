const input = require('fs').readFileSync('dev/stdin').toString().trim();

const [first, second] = input.split("\n");
const N = +first;
const numbers = second.split(" ").map(Number);

const visited = new Array(N).fill(false);
let max = 0;

const dfs = (arr) => {
  if (arr.length === N) {
    max = Math.max(max, calculate(arr));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...arr, numbers[i]]);
      visited[i] = false;
    }
  }
};

const calculate = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }

  return sum;
};

dfs([]);

console.log(max);
