const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// R 없으면 D는 첫번째 자리
// R 있으면 D는 마지막 자리
// D가 수보다 갯수가 많으면 에러
// RR은 방향 그대로

const vectorUtils = () => {
  let frontVector = true

  const reverseVector = () => {
    frontVector = !frontVector
  }

  const getVector = () => {
    return frontVector
  }

  return {
    reverseVector,
    getVector,
  }
}

const T = Number(input[0])
for (let tc = 0; tc < T; tc++) {
  const p = input[tc * 3 + 1].split("")
  const n = Number(input[tc * 3 + 2])
  const numbers =
    n === 0 ? [] : input[tc * 3 + 3].slice(1, -1).split(",").map(Number)
  const deleteLength = p.filter((v) => v === "D").length

  if (deleteLength > n) {
    console.log("error")
    continue
  }

  const vector = vectorUtils()
  for (const command of p) {
    if (command === "R") {
      vector.reverseVector()
    } else if (command === "D") {
      if (vector.getVector()) {
        numbers.shift()
      } else {
        numbers.pop()
      }
    }
  }

  if (vector.getVector()) {
    console.log("[" + numbers.join(",") + "]")
  } else {
    console.log("[" + numbers.reverse().join(",") + "]")
  }
}
