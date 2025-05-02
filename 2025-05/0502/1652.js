const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const grid = input.slice(1).map((row) => row.split(''));

let rowCount = 0;
let colCount = 0;

// 가로 검사
for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (grid[i][j] === '.') {
      count++;
    } else {
      if (count >= 2) rowCount++;
      count = 0; // 끊김
    }
  }
  if (count >= 2) rowCount++;
}

// 세로 검사
for (let j = 0; j < N; j++) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (grid[i][j] === '.') {
      count++;
    } else {
      if (count >= 2) colCount++;
      count = 0;
    }
  }
  if (count >= 2) colCount++;
}

console.log(rowCount, colCount);
