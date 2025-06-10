function solution(m, musicinfos) {
  function normalize(s) {
    return s
      .replace(/C#/g, 'c')
      .replace(/D#/g, 'd')
      .replace(/F#/g, 'f')
      .replace(/G#/g, 'g')
      .replace(/A#/g, 'a')
      .replace(/B#/g, 'b');
  }
  m = normalize(m);
  let answer = '(None)';
  let maxTime = 0;
  for (let info of musicinfos) {
    let [start, end, title, sheet] = info.split(',');
    let [sh, sm] = start.split(':').map(Number);
    let [eh, em] = end.split(':').map(Number);
    let playTime = eh * 60 + em - (sh * 60 + sm);
    let music = normalize(sheet);
    let built = '';
    for (let i = 0; i < playTime; i++) {
      built += music[i % music.length];
    }
    if (built.includes(m) && playTime > maxTime) {
      maxTime = playTime;
      answer = title;
    }
  }
  return answer;
}
