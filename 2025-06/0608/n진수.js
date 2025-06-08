function solution(n, t, m, p) {
  let sequence = '';
  let num = 0;

  while (sequence.length < t * m) {
    sequence += num.toString(n).toUpperCase();
    num++;
  }

  let answer = '';
  for (let i = 0; i < t; i++) {
    answer += sequence[p - 1 + i * m];
  }

  return answer;
}
