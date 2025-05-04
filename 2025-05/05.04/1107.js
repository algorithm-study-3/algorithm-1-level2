let [n, m, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
m = parseInt(m);
const brokenBtn = arr.split(' ');

function solution() {
  // 100번 채널이면 0을 return
  if (n === 100) return console.log(0);
  // 100번 채널에서 +/-로 갈 수 있는 횟수
  let answer = Math.abs(n - 100);

  // 0번부터 1000000번까지에서 +/-로 가는 횟수 + 해당 번호까지 간 횟수(번호의 길이)
  for (let i = 0; i < 1000000; i++) {
    let isValid = true;
    const str = i.toString();

    for (let j = 0; j < str.length; j++) {
      if (brokenBtn?.includes(str[j])) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      answer = Math.min(answer, str.length + Math.abs(n - i));
    }
  }
  console.log(answer);
}

solution();
