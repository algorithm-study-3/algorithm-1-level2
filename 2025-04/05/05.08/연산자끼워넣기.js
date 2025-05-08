const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)
const operand = input[2].split(" ").map(Number)

let max = Number.MIN_SAFE_INTEGER
let min = Number.MAX_SAFE_INTEGER

const bruteForce = (total, operandIndex, newOperand) => {
  if (operandIndex === n - 1) {
    max = Math.max(max, total)
    min = Math.min(min, total)
    return
  }
  const [plus, minus, multiply, divide] = newOperand

  if (plus > 0) {
    bruteForce(total + arr[operandIndex + 1], operandIndex + 1, [
      plus - 1,
      minus,
      multiply,
      divide,
    ])
  }

  if (minus > 0) {
    bruteForce(total - arr[operandIndex + 1], operandIndex + 1, [
      plus,
      minus - 1,
      multiply,
      divide,
    ])
  }

  if (multiply > 0) {
    bruteForce(total * arr[operandIndex + 1], operandIndex + 1, [
      plus,
      minus,
      multiply - 1,
      divide,
    ])
  }
  if (divide > 0) {
    bruteForce(
      total < 0
        ? -Math.floor(Math.abs(total) / arr[operandIndex + 1])
        : Math.floor(Math.abs(total) / arr[operandIndex + 1]),
      operandIndex + 1,
      [plus, minus, multiply, divide - 1],
    )
  }
}

bruteForce(arr[0], 0, operand)

console.log(max === -0 ? 0 : max)
console.log(min === -0 ? 0 : min)
