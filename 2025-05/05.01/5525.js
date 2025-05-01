// IOIO
// N+1개의 I와 N개의 O로 교대로 이루어져있으면
let [n, m, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
m = parseInt(m);

arr = arr.split('');
let count = 0;

for (let i = 0; i < m; i++) {
  if (arr[i] === 'I') {
    const sliceArr = arr.slice(i + 1, i + 2 * n + 1);
    let isOI = true;

    for (let j = 0; j < sliceArr.length; j += 2) {
      if (sliceArr[j] + sliceArr[j + 1] !== 'OI') {
        isOI = false;
        break;
      }
    }
    if (isOI && sliceArr.length) {
      count++;
    }
  }
}

console.log(count);
