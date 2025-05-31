function solution(str1, str2) {
  var answer = 0;

  // 자카드 유사도
  // J(A, B) => 교집합의 크기 / 합집합의 크기
  // A, B 모두 공집합일 경우 => 1

  const s1 = [];
  const s2 = [];
  const regx = /^[a-zA-Z]$/;

  for (let i = 0; i < str1.length - 1; i++) {
    const str = [str1[i], str1[i + 1]];

    if (regx.test(str[0]) && regx.test(str[1])) {
      s1.push(str.map((x) => x.toLowerCase()).join(""));
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const str = [str2[i], str2[i + 1]];

    if (regx.test(str[0]) && regx.test(str[1])) {
      s2.push(str.map((x) => x.toLowerCase()).join(""));
    }
  }

  const a = [];
  const str2Copy = [...s2];

  for (let str of s1) {
    if (str2Copy.includes(str)) {
      a.push(str);
      str2Copy.splice(str2Copy.indexOf(str), 1);
    }
  }

  const b = [];
  for (let str of s1) {
    b.push(str);
  }

  for (let str of s2) {
    b.push(str);
  }

  const aLen = a.length;
  const bLen = b.length - a.length;

  if (aLen === 0 && bLen === 0) answer = 65536;
  else answer = Math.floor((aLen / bLen) * 65536);
  return answer;
}
