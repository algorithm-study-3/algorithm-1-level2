const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number);
const cnt = input[2].split(" ").map(Number);

const calc = (idx, result, num) => {
  switch (idx) {
    case 0: {
      return result + num;
    }
    case 1: {
      return result - num;
    }
    case 2: {
      return result * num;
    }
    case 3: {
      return parseInt(result / num);
    }
  }
};

let maxN = Number.MIN_SAFE_INTEGER;
let minN = Number.MAX_SAFE_INTEGER;

const solve = (idx, result) => {
  if (idx === N - 1) {
    maxN = Math.max(maxN, result);
    minN = Math.min(minN, result);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (cnt[i] > 0) {
      cnt[i]--;
      const res = calc(i, result, A[idx + 1]);
      solve(idx + 1, res);
      cnt[i]++;
    }
  }
};

solve(0, A[0]);
console.log([maxN, minN].join("\n"));
