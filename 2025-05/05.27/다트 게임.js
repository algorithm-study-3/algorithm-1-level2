function solution(dartResult) {
  const regex = /(\d{1,2})([SDT])([*#]?)/g;
  const matches = [...dartResult.matchAll(regex)];
  const scores = [];
  matches.forEach((m, i) => {
    let score = parseInt(m[1], 10);
    if (m[2] === 'D') score **= 2;
    else if (m[2] === 'T') score **= 3;
    if (m[3] === '*') {
      score *= 2;
      if (i > 0) scores[i - 1] *= 2;
    } else if (m[3] === '#') {
      score *= -1;
    }
    scores.push(score);
  });
  return scores.reduce((a, b) => a + b, 0);
}
