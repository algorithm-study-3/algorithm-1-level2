function solution(n, arr1, arr2) {
  var answer = [];
  const map1 = [];
  const map2 = [];

  for (let i = 0; i < n; i++) {
    map1.push(digit(arr1[i], n));
    map2.push(digit(arr2[i], n));
  }

  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === '1') {
        line += '#';
        continue;
      }
      if (map2[i][j] === '1') {
        line += '#';
        continue;
      }
      line += ' ';
    }
    answer.push(line);
  }

  return answer;
}

function digit(number, n) {
  return number.toString(2).padStart(n, 0);
}
