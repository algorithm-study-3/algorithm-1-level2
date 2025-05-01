const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const S = input[2];

function findIOIPatterns(N, S) {
  const count = new Array(M).fill(0);
  let result = 0;

  for (let i = 2; i < M; i++) {
    if (S[i] === 'I' && S[i - 1] === 'O' && S[i - 2] === 'I') {
      count[i] = count[i - 2] + 1;

      if (count[i] >= N) {
        result += 1;
      }
    }
  }

  return result;
}

console.log(findIOIPatterns(N, S));
