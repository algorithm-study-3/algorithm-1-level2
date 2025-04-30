const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const M = Number(input[1])
const S = input[2]

let current = "IOI"

let answer = 0
let index = 0
let cnt = 0
while (index < M - 2) {
  const slicedIOI = S.slice(index, index + 3)
  if (slicedIOI === current) {
    cnt += 1
    index += 2
    if (cnt >= N) {
      answer += 1
    }
  } else {
    index += 1
    cnt = 0
  }
}
console.log(answer)
