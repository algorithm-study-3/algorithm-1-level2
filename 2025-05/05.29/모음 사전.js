function solution(word) {
  const dict = [];
  const letters = ['A', 'E', 'I', 'O', 'U'];
  function generate(prefix) {
    if (prefix.length > 5) return;
    if (prefix) dict.push(prefix);
    for (const l of letters) generate(prefix + l);
  }
  generate('');
  return dict.indexOf(word) + 1;
}
