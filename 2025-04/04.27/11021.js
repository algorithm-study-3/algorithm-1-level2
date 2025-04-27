const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = +input[0];
const cases = input.slice(1).map((x) => x.split(" ").map(Number));

const results = [];

for (let i = 0; i < T; i++) {
  results.push(`Case #${i + 1}: ${cases[i][0] + cases[i][1]}`);
}

console.log(results.join("\n"));
