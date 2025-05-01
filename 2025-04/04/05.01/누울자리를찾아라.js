const { start } = require("repl")

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const arr = input.slice(1).map((row) => row.split(""))

let row = 0
let col = 0

for (let i = 0; i < N; i += 1) {
  let cnt = 0
  for (let j = 0; j < N; j += 1) {
    if (arr[i][j] === ".") {
      cnt += 1
    } else {
      if (cnt >= 2) {
        row += 1
      }
      cnt = 0
    }
  }
  if (cnt >= 2) {
    row += 1
  }
}

for (let i = 0; i < N; i += 1) {
  let cnt = 0
  for (let j = 0; j < N; j += 1) {
    if (arr[j][i] === ".") {
      cnt += 1
    } else {
      if (cnt >= 2) {
        col += 1
      }
      cnt = 0
    }
  }
  if (cnt >= 2) {
    col += 1
  }
}

console.log(row, col)
