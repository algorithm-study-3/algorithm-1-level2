function solution(n, arr1, arr2) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const combined = arr1[i] | arr2[i];
    const binaryStr = combined.toString(2).padStart(n, '0');
    const row = binaryStr
      .split('')
      .map((ch) => (ch === '1' ? '#' : ' '))
      .join('');
    result.push(row);
  }

  return result;
}
