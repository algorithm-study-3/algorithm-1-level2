const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const tips = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a)
let total = 0

// 0 1 2 3 4
// 5 4 3 2 1
// 1 2 3 4 5
for (let i = 0; i < n; i += 1) {
  const myTip = tips[i] - i
  if (myTip > 0) {
    total += myTip
  }
}
console.log(total)
