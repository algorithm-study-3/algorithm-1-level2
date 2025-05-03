const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const S = input[2];

let count = 0;
let i = 0;
let patternCount = 0;

while (i < M - 1) {
  if (S[i] === 'I' && S[i + 1] === 'O' && S[i + 2] === 'I') {
    patternCount++;
    i += 2;
    if (patternCount === N) {
      count++;
      patternCount--;
    }
  } else {
    patternCount = 0;
    i++;
  }
}

console.log(count);
