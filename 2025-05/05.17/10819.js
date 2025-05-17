const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number);

let max = 0;

const dfs = (arr, isSelected) => {
  if (arr.length === N) {
    let res = 0;

    for (let i = 0; i < N - 1; i++) {
      res += Math.abs(arr[i] - arr[i + 1]);
    }

    max = Math.max(max, res);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (isSelected[i]) continue;
    isSelected[i] = true;
    arr.push(A[i]);
    dfs(arr, isSelected);
    arr.pop();
    isSelected[i] = false;
  }
};

dfs(
  [],
  Array.from({ length: N }, () => false)
);

console.log(max);
