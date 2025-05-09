const readLine = require('fs').readFileSync('dev/stdin').toString().trim();

const [N, A, B] = readLine.split(" ").map((v) => +v);
let curA = A;
let curB = B;
let count = 0;

while (curA !== curB) {
  count++;

  if (curA % 2 === 0 && curA - 1 === curB) break;
  if (curB % 2 === 0 && curB - 1 === curA) break;

  curA = Math.ceil(curA / 2);
  curB = Math.ceil(curB / 2);
}

console.log(count.toString());