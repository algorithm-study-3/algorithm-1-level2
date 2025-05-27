function solution(str1, str2) {
  var answer = 0;
  let A = [];
  let B = [];

  A = makeDuplicateSet(str1);
  B = makeDuplicateSet(str2);

  let intersection = 0; //교
  let union = 0; //합

  const set = new Set([...A, ...B]);

  set.forEach((e) => {
    const hasA = A.filter((a) => a === e).length;
    const hasB = B.filter((b) => b === e).length;

    intersection += Math.min(hasA, hasB);
    union += Math.max(hasA, hasB);
  });

  answer = union === 0 ? 1 * 65536 : Math.floor((intersection / union) * 65536);

  return answer;
}

function makeDuplicateSet(str) {
  const dupArr = [];
  const regx = /^[a-zA-Z]+$/;
  for (let i = 0; i < str.length - 1; i++) {
    const element = str[i] + str[i + 1];

    if (regx.test(element)) dupArr.push(element.toUpperCase());
  }
  return dupArr;
}
