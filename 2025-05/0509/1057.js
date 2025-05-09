const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
let A = parseInt(input[0].split(' ')[1]);
let B = parseInt(input[0].split(' ')[2]);

let round = 0;

while (A != B) {
  A = Math.ceil(A / 2);
  B = Math.ceil(B / 2);
  round++;
}

console.log(round > 0 ? round : -1);
