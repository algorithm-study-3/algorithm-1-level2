function solution(n, t, m, p) {
  let sequence = '';
  let number = 0;
  const requiredLength = p + (t - 1) * m;
  while (sequence.length < requiredLength) {
    sequence += number.toString(n).toUpperCase();
    number++;
  }
  let result = '';
  for (let i = 0; i < t; i++) {
    result += sequence[p - 1 + i * m];
  }
  return result;
}
