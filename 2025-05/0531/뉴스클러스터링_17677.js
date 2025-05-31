function isAlphabet(str) {
  return /^[a-z]$/.test(str);
}

function makeMultiset(str) {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (isAlphabet(str[i]) && isAlphabet(str[i + 1])) {
      arr.push(str[i] + str[i + 1]);
    }
  }
  return arr;
}
function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const arr1 = makeMultiset(str1);
  const arr2 = makeMultiset(str2);

  const map1 = {};
  const map2 = {};
  arr1.forEach((s) => (map1[s] = (map1[s] || 0) + 1));
  arr2.forEach((s) => (map2[s] = (map2[s] || 0) + 1));

  const allKeys = new Set([...Object.keys(map1), ...Object.keys(map2)]);

  let inter = 0; // 교집합
  let union = 0; // 합집합

  allKeys.forEach((key) => {
    const cnt1 = map1[key] || 0;
    const cnt2 = map2[key] || 0;
    inter += Math.min(cnt1, cnt2);
    union += Math.max(cnt1, cnt2);
  });

  if (union === 0) return 65536;
  return Math.floor((inter / union) * 65536);
}
