function solution(m, musicinfos) {
  let answerTime = 0;
  var answer = '';

  for (let i = 0; i < musicinfos.length; i++) {
    const splitStr = musicinfos[i].split(',');
    const playTime = getTime(splitStr[1]) - getTime(splitStr[0]);
    const isSong = play(m.length, splitStr[3], m);
    if (isSong && answerTime < playTime && playTime >= m.length) {
      answerTime = playTime;
      answer = splitStr[2];
    }
  }
  answer = answer === '' ? '(None)' : answer;

  return answer;
}

function getTime(splitStr) {
  const hour = splitStr.split(':')[0];
  const minute = splitStr.split(':')[1];
  return Number(hour) * 60 + Number(minute);
}

function play(mLength, melody, m) {
  const melodyArr = [];
  for (let i = 0; i < melody.length; i++) {
    if (melody[i] === '#') continue;
    const arr = [];
    let j = i;
    while (arr.length < mLength) {
      if (j === melody.length) j = 0;

      if (melody[j + 1] && melody[j + 1] === '#') {
        arr.push(melody[j]);
        arr.push(melody[j + 1]);
        j += 2;
        continue;
      }
      arr.push(melody[j]);
      j++;
    }
    melodyArr.push(arr.join(''));
  }

  if (melodyArr.indexOf(m) > -1) return true;
}
