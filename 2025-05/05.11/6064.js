// 카잉달력
const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const [M, N, x, y] = input[i].split(' ').map(Number);
  let answer = -1;

  const lcmNum = lcm(M, N);
  const Mmax = lcmNum / M;
  const Nmax = lcmNum / N;

  let p = 0,
    q = 0;
  while (Mmax !== p || Nmax !== q) {
    const X = M * p + x;
    const Y = N * q + y;
    if (X === Y) {
      answer = M * p + x;
      break;
    } else if (X > Y) {
      q++;
    } else {
      p++;
    }
  }

  console.log(answer);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  let x = Math.max(a, b);
  let y = Math.min(a, b);

  let gcd = 0;
  while (1) {
    const rest = x % y;
    if (rest === 0) {
      gcd = y;
      break;
    }
    x = y;
    y = rest;
  }
  return gcd;
}
