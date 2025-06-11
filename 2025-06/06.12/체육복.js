function solution(n, lost, reserve) {
  const uniforms = Array(n + 2).fill(1);
  lost.forEach((v) => uniforms[v]--);
  reserve.forEach((v) => uniforms[v]++);
  for (let i = 1; i <= n; i++) {
    if (uniforms[i] === 0) {
      if (uniforms[i - 1] === 2) {
        uniforms[i - 1]--;
        uniforms[i]++;
      } else if (uniforms[i + 1] === 2) {
        uniforms[i + 1]--;
        uniforms[i]++;
      }
    }
  }
  return uniforms.slice(1, n + 1).filter((v) => v > 0).length;
}
