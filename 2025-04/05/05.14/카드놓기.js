const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const k = Number(input[1])
const cards = input.slice(2).map(Number)
const answer = new Set()
const visited = new Array(n).fill(false)

const dfs = (newCards = []) => {
  if (newCards.length === k) {
    answer.add(newCards.join(""))
    return
  }

  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      visited[i] = true
      dfs([...newCards, cards[i]], i + 1)
      visited[i] = false
    }
  }
}

for (let i = 0; i < n; i += 1) {
  if (!visited[i]) {
    visited[i] = true
    dfs([newCards[i]])
    visited[i] = false
  }
}

console.log(answer.size)
