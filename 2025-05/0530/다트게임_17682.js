function solution(dartResult) {
  const regex = /(\d{1,2})([SDT])([*#]?)/g;
  const scores = [];
  let match;

  while ((match = regex.exec(dartResult)) !== null) {
    let [_, num, bonus, option] = match;
    num = parseInt(num);
    let score = 0;

    // 보너스 처리
    if (bonus === 'S') {
      score = num ** 1;
    } else if (bonus === 'D') {
      score = num ** 2;
    } else if (bonus === 'T') {
      score = num ** 3;
    }

    // 옵션 처리
    if (option === '*') {
      score *= 2;
      if (scores.length > 0) {
        scores[scores.length - 1] *= 2;
      }
    } else if (option === '#') {
      score *= -1;
    }

    scores.push(score);
  }
  return scores.reduce((acc, val) => {
    return acc + val;
  }, 0);
}

console.log(solution('1S2D*3T'));

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(input));
