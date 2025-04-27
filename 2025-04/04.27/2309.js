const [...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sumArr = arr.reduce((cur, acc) => cur + acc, 0);
const fake = [];

for (let i = 0; i < 8; i++) {
  let findFake = false;
  for (let j = i + 1; j < 9; j++) {
    if (sumArr - arr[i] - arr[j] === 100) {
      fake.push(i);
      fake.push(j);
      findFake = true;
      break;
    }
  }
  if (findFake) break;
}

const real = arr.filter((a, idx) => idx !== fake[0] && idx !== fake[1]);
console.log(real.sort((a, b) => a - b).join('\n'));
