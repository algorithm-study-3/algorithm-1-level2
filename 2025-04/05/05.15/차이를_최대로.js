const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = +input[0]
const arr = input[1].split(" ").map(Number)
const visited = Array.from({ length: N }, () => false)
let answer = Number.MIN_SAFE_INTEGER

const getAbs = (num1, num2) => {
  return Math.abs(num1 - num2)
}

const calculate = (array) => {
  let sum = 0
  for (let i = 0; i < N - 1; i += 1) {
    sum += getAbs(array[i], array[i + 1])
  }
  return sum
}

const dfs = (array) => {
  if (array.length === N) {
    answer = Math.max(answer, calculate([...array]))
    return
  }

  for (let i = 0; i < N; i += 1) {
    if (!visited[i]) {
      visited[i] = true
      dfs([...array, arr[i]])
      visited[i] = false
    }
  }
}

for (let i = 0; i < N; i += 1) {
  if (!visited[i]) {
    visited[i] = true
    dfs([arr[i]])
    visited[i] = false
  }
}

console.log(answer)
