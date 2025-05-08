const fs = require('fs');

const [N, kim, im] = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(/\s+/)
  .map(Number);

let a = kim;
let b = im;
let round = 0;

while (a !== b) {
  a = Math.ceil(a / 2);
  b = Math.ceil(b / 2);
  round++;
}

console.log(round);
