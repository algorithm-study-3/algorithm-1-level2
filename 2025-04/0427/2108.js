const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const N = input[0];
const numbers = input.slice(1);

// 1. 산술평균
const sum = numbers.reduce((a, b) => a + b, 0);
const avg = sum / N;
const roundedAvg = avg > 0 ? Math.floor(avg + 0.5) : Math.ceil(avg - 0.5);
const finalAvg = roundedAvg === -0 ? 0 : roundedAvg; // -0 처리

// 2. 중앙값
numbers.sort((a, b) => a - b);
const median = numbers[Math.floor(N / 2)];

// 3. 최빈값
const freq = {};
let maxFreq = 0;

numbers.forEach((num) => {
  freq[num] = (freq[num] || 0) + 1;
  if (freq[num] > maxFreq) maxFreq = freq[num];
});

const modeCandidates = Object.keys(freq)
  .filter((key) => freq[key] === maxFreq)
  .map(Number)
  .sort((a, b) => a - b);

const mode = modeCandidates.length > 1 ? modeCandidates[1] : modeCandidates[0];

// 4. 범위
const range = numbers[numbers.length - 1] - numbers[0];

// 출력
console.log(finalAvg);
console.log(median);
console.log(mode);
console.log(range);
