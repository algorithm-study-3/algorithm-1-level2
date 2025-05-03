const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();

const S = input[0].split("");

let cnt = 0;

for (let i = 0; i < M; i++) {
  let idx = 0;

  if (S[i + idx] === "I") {
    while (i + idx < M) {
      idx++;

      if (idx % 2 === 0 && S[i + idx] === "O") break;
      if (idx % 2 === 1 && S[i + idx] === "I") break;
    }

    if (idx % 2 === 0) idx -= 1;

    if (idx >= 2 * N + 1) {
      cnt += (idx - (2 * N + 1)) / 2 + 1;
    }

    i += idx - 1;
  }
}

console.log(cnt);
