function solution(files) {
  var answer = [];
  const parserArr = [];

  for (let i = 0; i < files.length; i++) {
    parserArr.push({...parser(files[i]), key: i});
  }

  parserArr.sort((a, b) => {
    if (a.header === b.header) {
      return Number(a.number) - Number(b.number);
    }
    if (a.header < b.header) return -1;
    if (a.header > b.header) return 1;
    return 0;
  });

  for (let i = 0; i < files.length; i++) {
    answer.push(files[parserArr[i].key]);
  }

  return answer;
}

function parser(str) {
  const header = str.split(/[0-9]/)[0].toLowerCase();
  let number = '';

  for (let i = header.length; i <= header.length + 4; i++) {
    if (!isNaN(str[i])) number += str[i];
    else break;
  }

  return {header, number};
}
