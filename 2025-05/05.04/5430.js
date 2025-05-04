const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// R : 뒤집기, D : 버리기

const T = +input.shift();
const answer = [];

for (let t = 0; t < T * 3; t += 3) {
  const p = input[t];
  const n = +input[t + 1];
  const nums = input[t + 2]
    .slice(1, -1)
    .split(",")
    .map((x) => (x === "" ? [] : Number(x)));

  let start = 0;
  let end = n - 1;
  let isReverse = false;
  let isError = false;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "R") {
      isReverse = !isReverse;
    } else if (p[i] === "D") {
      if (start > end) {
        answer.push("error");
        isError = true;
        break;
      }

      if (isReverse) {
        end--;
      } else {
        start++;
      }
    }
  }

  if (isError) {
    continue;
  }

  if (isReverse) {
    const str = [];
    for (let i = end; i >= start; i--) {
      str.push(nums[i]);
    }
    answer.push(`[${str.join(",")}]`);
  } else {
    const str = [];
    for (let i = start; i <= end; i++) {
      str.push(nums[i]);
    }
    answer.push(`[${str.join(",")}]`);
  }
}

console.log(answer.join("\n"));
