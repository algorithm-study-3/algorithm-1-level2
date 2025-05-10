const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, a, b] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, (_, idx) => idx + 1);

const solve = (arr, round) => {
  if (arr.length <= 1) {
    return -1;
  }

  const winner = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (
      (arr[i] === a && arr[i + 1] === b) ||
      (arr[i] === b && arr[i + 1] === a)
    ) {
      return round + 1;
    }

    if (arr[i] === a || arr[i] === b) {
      winner.push(arr[i]);
    } else if (arr[i + 1] === a || arr[i + 1] === b) {
      winner.push(arr[i + 1]);
    } else {
      winner.push(arr[i]);
    }
  }

  return solve(winner, round + 1);
};

const round = solve(arr, 0);
console.log(round);
