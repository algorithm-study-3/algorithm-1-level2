const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const nums = input.split(' ').map((num) => Number(num.split('').reverse().join('')));
console.log(Math.max(...nums));
