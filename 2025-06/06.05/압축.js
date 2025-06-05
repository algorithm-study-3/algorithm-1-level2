function solution(msg) {
  const dict = {};
  for (let i = 0; i < 26; i++) {
    dict[String.fromCharCode(65 + i)] = i + 1;
  }
  let nextCode = 27;
  const output = [];
  let i = 0;

  while (i < msg.length) {
    let length = 1;
    while (
      i + length <= msg.length &&
      dict[msg.substring(i, i + length)] !== undefined
    ) {
      length++;
    }
    const w = msg.substring(i, i + length - 1);
    output.push(dict[w]);
    if (i + length - 1 < msg.length) {
      const wc = msg.substring(i, i + length);
      if (dict[wc] === undefined) {
        dict[wc] = nextCode++;
      }
    }
    i += w.length;
  }

  return output;
}
