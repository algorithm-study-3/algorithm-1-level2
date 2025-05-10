const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

let result = '';
for (let i = N; i >= 1; i--) {
  result += i + '\n';
}

console.log(result.trim());
