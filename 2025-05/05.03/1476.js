// 날짜 계산
const [e, s, m] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split(' ')
  .map(Number);

let n = 1;
while (n) {
  const E = (n - e) % 15;
  const S = (n - s) % 28;
  const M = (n - m) % 19;

  if (E === 0 && S === 0 && M === 0) {
    break;
  }
  n++;
}
console.log(n);
