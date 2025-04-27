let [n, ...candyArr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
candyArr = candyArr.map((candy) => candy.trim().split(''));
let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    result = changeCandy(i, j);

    if (answer < result) answer = result;
    if (answer === n) break;
  }

  if (answer === n) break;
}
console.log(answer);

function changeCandy(i, j) {
  let rowChangeResult = 0;
  let columnChangeResult = 0;

  if (j + 1 < n && candyArr[i][j] !== candyArr[i][j + 1]) {
    const newArr = JSON.parse(JSON.stringify(candyArr));
    const color = newArr[i][j];
    newArr[i][j] = newArr[i][j + 1];
    newArr[i][j + 1] = color;

    rowChangeResult = canEating(newArr);
  }

  if (i + 1 < n && candyArr[i][j] !== candyArr[i + 1][j]) {
    const newArr = JSON.parse(JSON.stringify(candyArr));
    const color = newArr[i][j];
    newArr[i][j] = newArr[i + 1][j];
    newArr[i + 1][j] = color;

    columnChangeResult = canEating(newArr);
  }

  return Math.max(rowChangeResult, columnChangeResult);
}

function canEating(arr) {
  let rowMax = 0;
  let columnMax = 0;

  for (let i = 0; i < n; i++) {
    let lineMax = 0;
    for (let j = 0; j < n - 1; j++) {
      if (arr[i][j] === arr[i][j + 1]) lineMax++;
      else {
        if (rowMax < lineMax) rowMax = lineMax;
        lineMax = 0;
      }
    }
    if (rowMax < lineMax) rowMax = lineMax;
    if (rowMax === n) return rowMax;
  }

  for (let i = 0; i < n; i++) {
    let lineMax = 0;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j][i] === arr[j + 1][i]) lineMax++;
      else {
        if (columnMax < lineMax) columnMax = lineMax;
        lineMax = 0;
      }
    }
    if (columnMax < lineMax) columnMax = lineMax;
    if (columnMax === n) return columnMax;
  }

  return Math.max(rowMax, columnMax) + 1;
}
