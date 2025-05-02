const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
let line = 1;
const results = [];

for (let t = 0; t < T; t++) {
  const p = input[line++];
  const n = parseInt(input[line++]);

  let arr;
  if (n === 0) {
    arr = [];
    line++;
  } else {
    const arrStr = input[line++];
    arr = arrStr
      .substring(1, arrStr.length - 1)
      .split(',')
      .map(Number);
  }

  results.push(processACOptimized(p, arr));
}

console.log(results.join('\n'));

function processACOptimized(p, arr) {
  let isReversed = false;
  let start = 0;
  let end = arr.length;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === 'R') {
      isReversed = !isReversed;
    } else if (p[i] === 'D') {
      if (start >= end) {
        return 'error';
      }

      if (isReversed) {
        end--;
      } else {
        start++;
      }
    }
  }

  let result = [];
  if (isReversed) {
    for (let i = end - 1; i >= start; i--) {
      result.push(arr[i]);
    }
  } else {
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
  }

  return '[' + result.join(',') + ']';
}
