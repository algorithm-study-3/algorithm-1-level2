const n = require('fs').readFileSync('input.txt').toString().trim();

let number = 0;

const digit = n.length;

for (let i = 1; i < digit; i++) {
  number += i * 10 ** (i - 1) * 9;
}

number += digit * (parseInt(n) - 10 ** (digit - 1) + 1);

console.log(number);
