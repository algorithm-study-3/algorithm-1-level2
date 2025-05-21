const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr1 = input[1].split(' ').map(Number);
const arr2 = input[2].split(' ').map(Number);

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i].toString(2).padStart(n, 0);
    arr2[i] = arr2[i].toString(2).padStart(n, 0);
    let line = '';
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === '0' && arr2[i][j] === '0') {
        line += ' ';
      } else {
        line += '#';
      }
    }
    answer.push(line);
  }
  return answer;
}

console.log(solution(n, arr1, arr2));
