const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const N = +input.shift();
const room = input.map((line) => line.split(""));

let rowCount = 0;
let colCount = 0;

for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (room[i][j] === '.') {
      count++;
    } else {
      if (count >= 2) rowCount++;
      count = 0;
    }
  }
  if (count >= 2) rowCount++;
}

for (let j = 0; j < N; j++) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (room[i][j] === '.') {
      count++;
    } else {
      if (count >= 2) colCount++;
      count = 0;
    }
  }
  if (count >= 2) colCount++;
}

console.log([rowCount, colCount].join(" "))