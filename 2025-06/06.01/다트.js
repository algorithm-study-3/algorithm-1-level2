function solution(dartResult) {
  var answer = 0;

  let answers = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === '*') {
      answers[answers.length - 1] *= 2;
      if (answers[answers.length - 2]) {
        answers[answers.length - 2] *= 2;
      }
      continue;
    }
    if (dartResult[i] === '#') {
      answers[answers.length - 1] *= -1;
      continue;
    }

    if (Number(dartResult[i]) === 1 && Number(dartResult[i + 1]) === 0) {
      const calc = powNumber(
        Number(dartResult[i] + dartResult[i + 1]),
        dartResult[i + 2]
      );
      answers.push(calc);
      i += 2;
      continue;
    }

    const calc = powNumber(Number(dartResult[i]), dartResult[i + 1]);
    answers.push(calc);
    i++;
  }
  answer = answers.reduce((acc, curr) => acc + curr, 0);

  return answer;
}

function powNumber(number, str) {
  switch (str) {
    case 'S':
      return Math.pow(number, 1);
    case 'D':
      return Math.pow(number, 2);
    case 'T':
      return Math.pow(number, 3);
  }
}
