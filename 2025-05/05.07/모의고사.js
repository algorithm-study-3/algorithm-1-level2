function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  answers.forEach((ans, i) => {
    patterns.forEach((pattern, idx) => {
      if (ans === pattern[i % pattern.length]) {
        scores[idx]++;
      }
    });
  });

  const maxScore = Math.max(...scores);

  return scores
    .map((score, idx) => ({ score, person: idx + 1 }))
    .filter((item) => item.score === maxScore)
    .map((item) => item.person);
}
