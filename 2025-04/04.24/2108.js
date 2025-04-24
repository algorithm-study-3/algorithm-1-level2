// 통계학
const [n, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

arr.sort((a, b) => a - b);

const average = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const x = Math.round(sum / n);
  return Object.is(x, -0) ? 0 : x;
};

const center = (arr) => {
  return arr[(n - 1) / 2];
};

const mode = (arr) => {
  const count = {};

  arr.map((a) => {
    if (count[a]) count[a] = count[a] + 1;
    else count[a] = 1;
  });

  let max = 0;
  let maxArr = [];

  Object.entries(count).map(([key, value]) => {
    key = parseInt(key);
    if (value > max) {
      maxArr = [];
      max = value;
      maxArr.push(key);
    } else if (value === max) {
      maxArr.push(key);
    }
  });
  maxArr.sort((a, b) => a - b);

  return maxArr[1] ?? maxArr[0];
};

const range = (arr) => {
  return arr[n - 1] - arr[0];
};

console.log(average(arr));
console.log(center(arr));
console.log(mode(arr));
console.log(range(arr));
