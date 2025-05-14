const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n = parseInt(input[0]);
const k = parseInt(input[1]);
const cards = [];

for (let i = 2; i < 2 + n; i++) {
  cards.push(parseInt(input[i]));
}

const result = solve(n, k, cards);
console.log(result);

function solve(n, k, cards) {
  const unique = new Set();
  const picked = [];
  const visited = new Array(n).fill(false);

  function backtrack() {
    if (picked.length === k) {
      const num = parseInt(picked.join(''));
      unique.add(num);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        picked.push(cards[i]);
        backtrack();
        picked.pop();
        visited[i] = false;
      }
    }
  }

  backtrack();
  return unique.size;
}
