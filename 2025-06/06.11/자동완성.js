function solution(words) {
  words.sort();
  let total = 0;
  const lcp = (a, b) => {
    let i = 0,
      len = Math.min(a.length, b.length);
    while (i < len && a[i] === b[i]) i++;
    return i;
  };
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const prev = words[i - 1] || '';
    const next = words[i + 1] || '';
    const c1 = prev ? lcp(prev, w) : 0;
    const c2 = next ? lcp(w, next) : 0;
    const need = Math.max(c1, c2) + 1;
    total += Math.min(need, w.length);
  }
  return total;
}
