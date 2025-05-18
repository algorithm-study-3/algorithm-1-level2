const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];

const arr = [];

function dfs(num, idx) {
  if (idx > 10) {
    return;
  }

  arr.push(num);

  for (let i = 0; i < num % 10; i++) {
    dfs(num * 10 + i, idx + 1);
  }
}

if (n <= 10) {
  console.log(n);
} else {
  for (let i = 0; i < 10; i++) {
    dfs(i, 0);
  }

  arr.sort((a, b) => a - b);

  if (arr.length - 1 < n) {
    console.log(-1);
  } else {
    console.log(arr[n]);
  }
}
