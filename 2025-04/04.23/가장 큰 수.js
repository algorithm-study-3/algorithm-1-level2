function solution(numbers) {
  const strs = numbers.map(String);

  strs.sort((a, b) => {
    const ab = a + b;
    const ba = b + a;
    if (ab > ba) return -1;
    if (ab < ba) return 1;
    return 0;
  });

  if (strs[0] === '0') {
    return '0';
  }

  return strs.join('');
}
