const readLine = require('fs').readFileSync('dev/stdin').toString().trim();

const [[N], numbers, separatorCount] = input.split("\n").map((line) => line.split(" ").map(Number));

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const calculator = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => ~~(a / b)];
console.log(N, numbers, separatorCount);

const dfs = (count, result) => {
  if (count === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
  } else {
    for (let i = 0; i < separatorCount.length; i++) {
      if (separatorCount[i] === 0) {
        continue;
      }
      separatorCount[i]--;
      dfs(count + 1, calculator[i](result, numbers[count + 1]));
      //배열 원상복구
      separatorCount[i]++;
    }
  }
};

dfs(0, numbers[0]);

console.log([max, min].join("\n"));
