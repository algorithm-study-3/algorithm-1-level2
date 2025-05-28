function solution(str1, str2) {
  const toMultiset = (s) => {
    const ms = new Map();
    const lower = s.toLowerCase();
    for (let i = 0; i < lower.length - 1; i++) {
      const a = lower[i];
      const b = lower[i + 1];
      if (a >= 'a' && a <= 'z' && b >= 'a' && b <= 'z') {
        const key = a + b;
        ms.set(key, (ms.get(key) || 0) + 1);
      }
    }
    return ms;
  };

  const ms1 = toMultiset(str1);
  const ms2 = toMultiset(str2);
  let intersection = 0;
  let union = 0;
  const keys = new Set([...ms1.keys(), ...ms2.keys()]);
  for (const key of keys) {
    const c1 = ms1.get(key) || 0;
    const c2 = ms2.get(key) || 0;
    intersection += Math.min(c1, c2);
    union += Math.max(c1, c2);
  }

  if (union === 0) return 65536;
  return Math.floor((intersection / union) * 65536);
}
